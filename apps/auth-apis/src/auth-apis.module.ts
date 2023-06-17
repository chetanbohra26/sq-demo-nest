import { Module } from '@nestjs/common';
import { AuthApisController } from './auth-apis.controller';
import { AuthApisService } from './auth-apis.service';

@Module({
  imports: [],
  controllers: [AuthApisController],
  providers: [AuthApisService],
})
export class AuthApisModule {}
