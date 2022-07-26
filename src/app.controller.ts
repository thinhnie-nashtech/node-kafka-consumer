import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { MessageType } from './models/message-type.enum';
import { IMessage } from './models/messge.interface';
import { CreateNewsDto } from './news/dtos/create-news.dto';
import { NewsService } from './news/news.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly newsService: NewsService) {}

  @MessagePattern('hot-news') // Our topic name
  saveNews(@Payload() message: IMessage) {
    console.log(message);
    let newsToCreate: CreateNewsDto;
    if(message.type == MessageType.CREATE_NEWS)
      newsToCreate = message.msg as CreateNewsDto;
    this.newsService.create(newsToCreate)
    return 'Save ok';
  }

  @MessagePattern('hot-news') // Our topic name
  deleteNew(@Payload() message: IMessage) {
    console.log(message);
    let newsToCreate: CreateNewsDto;
    if(message.type == MessageType.DELETE_NEWS)
      newsToCreate = message.msg as CreateNewsDto;
    this.newsService.create(newsToCreate)
    return 'Save ok';
  }
}
