import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://admin01:admin01%40@18.143.77.106:27017/'), NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
