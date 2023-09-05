import CommerceLayer, { Sku } from '@commercelayer/sdk';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CommercelayerService {
  constructor(private readonly configService: ConfigService, private readonly authService: AuthService) {}

  async getSkuBySlug(clientId: string, skuReference: string): Promise<Sku> {
    const token = await this.authService.getToken('client_credentials', clientId);

    const client = CommerceLayer({
      organization: this.configService.get('orgSlug'),
      accessToken: token.accessToken,
    });
    const skus = await client.skus.list({
      filters: {
        reference_eq: skuReference,
      },
    });
    if (!skus.length) throw new NotFoundException(`'${skuReference}' does not exist`);
    return skus[0];
  }
}
