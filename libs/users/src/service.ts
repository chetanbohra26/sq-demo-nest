import { Inject, Injectable } from '@nestjs/common';
import { UserLibConstants } from './constants';
import { UsersRepositoryContract } from './repositories';
import { ModelKeys } from '@squareboat/nestjs-objection';
import { UsersModel } from './models';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserLibConstants.repo)
    private repo: UsersRepositoryContract,
  ) {}
  private readonly usersList = [
    { email: 'chetan@gmail.com', password: 'abcd' },
    { email: 'chetan1@gmail.com', password: 'abcd1' },
    { email: 'chetan2@gmail.com', password: 'abcd2' },
  ];

  findUserByEmail(email: string) {
    return this.usersList.find((user) => user.email === email);
  }

  findAll() {
    return this.repo.all();
  }

  addUser(inputs: ModelKeys<UsersModel>) {
    return this.repo.create(inputs);
  }
}
