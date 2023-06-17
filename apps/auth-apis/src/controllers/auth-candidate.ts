import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthApisService } from '../service';
import { Dto, Validate } from '@libs/boat/validator';
import { LoginUserDto } from '@libs/users/dto';

@Controller('/candidate/auth')
export class CandidateAuthController {
  constructor(private readonly authApisService: AuthApisService) {}

  @Post('/login')
  @HttpCode(200)
  @Validate(LoginUserDto)
  login(@Dto() inputs) {
    return this.authApisService.loginUser(inputs);
  }

  @Post('/register')
  @HttpCode(200)
  register() {
    return { success: true, message: 'Register successfull' };
  }

  @Get('/usersList')
  fetch() {
    return this.authApisService.fetchAll();
  }
}
