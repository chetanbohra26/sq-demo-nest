import { NestFactory } from '@nestjs/core';
import { ControlPanelModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(ControlPanelModule);
  await app.listen(3000);
}
bootstrap();
