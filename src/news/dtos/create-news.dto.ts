import { INews } from "../interfaces/news.interface";

export class CreateNewsDto implements INews {
    title: string;
    briefDescription: string;
    imageUrl: string;
    destinationUrl: string;
}