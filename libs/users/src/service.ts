import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly usersList = [
    { email: 'chetan@gmail.com', password: 'abcd' },
    { email: 'chetan1@gmail.com', password: 'abcd1' },
    { email: 'chetan2@gmail.com', password: 'abcd2' },
  ];

  findUserByEmail(email: string) {
    return this.usersList.find((user) => user.email === email);
  }

  findAll() {
    return this.usersList;
  }
}
