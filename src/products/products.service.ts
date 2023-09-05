import { Injectable } from '@nestjs/common';
import { CommercelayerService } from '../commercelayer/commercelayer.service';

@Injectable()
export class ProductsService {
  constructor(private commerceLayerService: CommercelayerService) {}

  findOne(clientId: string, skuReference: string) {
    return this.commerceLayerService.getSkuBySlug(clientId, skuReference);
  }
}
