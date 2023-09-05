import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CommercelayerModule } from '../commercelayer/commercelayer.module';

@Module({
  imports: [CommercelayerModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
