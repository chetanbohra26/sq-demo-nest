import { Module } from '@nestjs/common';
import { UsersService } from './service';
import { UsersRepository } from './repositories';
import { UserLibConstants } from './constants';

@Module({
  providers: [
    UsersService,
    { useClass: UsersRepository, provide: UserLibConstants.repo },
  ],
  exports: [UsersService],
})
export class UsersModule {}
