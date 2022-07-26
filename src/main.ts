import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['ec2-13-229-128-200.ap-southeast-1.compute.amazonaws.com:9092'],
      },
      consumer: {
          groupId: 'hot-news-consumer',
      }
    }
  });

  app.listen().then(() => console.log('Kafka consumer service is listening!'));
}

bootstrap();
