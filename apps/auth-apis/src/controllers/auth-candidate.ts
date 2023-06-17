import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthApisService } from '../service';
import { Dto, Validate } from '@libs/boat/validator';
import { LoginUserDto, RegisterUserDto } from '@libs/users/dto';

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
  @Validate(RegisterUserDto)
  register(@Dto() inputs) {
    return this.authApisService.registerUser(inputs);
  }

  @Get('/usersList')
  fetch() {
    return this.authApisService.fetchAll();
  }
}
