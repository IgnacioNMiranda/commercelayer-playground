import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import environment from './config/environment';

@Module({
  imports: [ProductsModule, ConfigModule.forRoot({ isGlobal: true, load: [environment] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
