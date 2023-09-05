import { Controller, Get, Param, Query, UnauthorizedException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Sku } from '@commercelayer/sdk';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':skuReference')
  findOne(@Param('skuReference') skuReference: string, @Query('clientId') clientId: string): Promise<Sku> {
    if (!clientId) throw new UnauthorizedException('Missing credentials');
    return this.productsService.findOne(clientId, skuReference);
  }
}
