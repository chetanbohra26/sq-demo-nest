import { BaseModel } from '@squareboat/nestjs-objection';

export class UsersModel extends BaseModel {
  static tableName = 'users';
}
