import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { INews } from 'src/news/interfaces/news.interface';

export type NewsDocument = News & Document;

@Schema()
export class News implements INews {
  @Prop()
  title: string;

  @Prop()
  briefDescription: string;
  
  @Prop()
  imageUrl: string;
  
  @Prop()
  destinationUrl: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);