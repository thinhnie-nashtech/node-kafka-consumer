import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('hot-news') // Our topic name
  getHello(@Payload() message) {
    console.log(message);
    return 'Hello World';
  }
}
