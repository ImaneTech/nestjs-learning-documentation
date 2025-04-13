import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloCtrlController } from './hello-ctrl/hello-ctrl.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloCtrlController],
  providers: [AppService],
})
export class AppModule {}
