import { Module } from '@nestjs/common';
import { CommercelayerService } from './commercelayer.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [CommercelayerService],
  exports: [CommercelayerService],
})
export class CommercelayerModule {}
