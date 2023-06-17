import { Controller, Get } from '@nestjs/common';
import { AuthApisService } from './auth-apis.service';

@Controller()
export class AuthApisController {
  constructor(private readonly authApisService: AuthApisService) {}

  @Get()
  getHello(): string {
    return this.authApisService.getHello();
  }
}
