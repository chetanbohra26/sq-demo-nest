import { UsersService } from '@libs/users';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AuthApisService {
  constructor(private readonly usersService: UsersService) {}
  loginUser(inputs) {
    const user = this.usersService.findUserByEmail(inputs.email);
    console.log(user);
    if (user?.email !== inputs.email)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    if (user?.password !== inputs.password)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    return { success: true, message: 'Login successfull', user };
  }

  async registerUser(inputs) {
    await this.usersService.addUser(inputs);
    return { success: true, message: 'Register successfull' };
  }

  fetchAll() {
    return this.usersService.findAll();
  }
}
