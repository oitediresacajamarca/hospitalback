import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Options } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  await app.listen(8088);
}
bootstrap();
