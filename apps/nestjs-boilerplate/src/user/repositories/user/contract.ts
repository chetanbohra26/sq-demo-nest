import { RepositoryContract } from '@squareboat/nestjs-objection';
import { UserModel } from '../../models';

export interface UserRepositoryContract extends RepositoryContract<UserModel> {}
