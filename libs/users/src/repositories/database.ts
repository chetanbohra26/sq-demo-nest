import { Injectable } from '@nestjs/common';
import { DatabaseRepository, InjectModel } from '@squareboat/nestjs-objection';
import { UsersModel } from '../models';
import { UsersRepositoryContract } from './contract';

@Injectable()
export class UsersRepository
  extends DatabaseRepository<UsersModel>
  implements UsersRepositoryContract
{
  @InjectModel(UsersModel)
  model: UsersModel;
}
