import { Controller, Get } from '@nestjs/common';

@Controller('hello-ctrl')
export class HelloCtrlController {
    @Get() 
    sayHello(): string {
      return 'Hello, NestJS!';
    }

    
    
}
