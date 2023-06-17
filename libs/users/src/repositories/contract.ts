import { RepositoryContract } from '@squareboat/nestjs-objection';
import { UsersModel } from '../models';

export interface UsersRepositoryContract
  extends RepositoryContract<UsersModel> {}
