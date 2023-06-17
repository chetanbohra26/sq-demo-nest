import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthApisService {
  getHello(): string {
    return 'Hello World!';
  }
}
