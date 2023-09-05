import { Injectable, UnauthorizedException } from '@nestjs/common';
import { authentication } from '@commercelayer/js-auth';
import { GrantType } from '@commercelayer/js-auth/lib/esm/types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  async getToken(grantType: GrantType, clientId: string) {
    const token = await authentication(grantType, {
      clientId,
      slug: this.configService.get('orgSlug'),
      scope: this.configService.get('scope'),
    });
    if (token.error) throw new UnauthorizedException('Invalid credentials');
    return token;
  }
}
