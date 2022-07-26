import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateNewsDto } from './news/dtos/create-news.dto';
import { NewsService } from './news/news.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly newsService: NewsService) {}

  @MessagePattern('hot-news') // Our topic name
  getHello(@Payload() message: CreateNewsDto) {
    console.log(message);
    this.newsService.create(message)
    return 'Hello World';
  }
}
