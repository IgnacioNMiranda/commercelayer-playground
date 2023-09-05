import { Injectable } from '@nestjs/common';
import { CommercelayerService } from '../commercelayer/commercelayer.service';
import { Sku } from '@commercelayer/sdk';

@Injectable()
export class ProductsService {
  constructor(private commerceLayerService: CommercelayerService) {}

  findOne(clientId: string, skuReference: string): Promise<Sku> {
    return this.commerceLayerService.getSkuBySlug(clientId, skuReference);
  }
}
