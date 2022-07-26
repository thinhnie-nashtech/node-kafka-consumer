import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dtos/create-news.dto';
import { News, NewsDocument } from './schemas/news.schema';

@Injectable()
export class NewsService {

    constructor(@InjectModel(News.name) private NewsModel: Model<NewsDocument>) {}

    async create(createNewsDto: CreateNewsDto): Promise<News> {
      const createdNews = new this.NewsModel(createNewsDto);
      return createdNews.save();
    }
  
    async findAll(): Promise<News[]> {
      return this.NewsModel.find().exec();
    }
}
