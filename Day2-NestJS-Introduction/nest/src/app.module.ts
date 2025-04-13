import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloCtrlController } from './hello-ctrl/hello-ctrl.controller';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [CartModule],
  controllers: [AppController, HelloCtrlController],
  providers: [AppService],
})
export class AppModule {}
