import { Module } from '@nestjs/common';
import { AuthApisService } from './service';
import { CandidateAuthController } from './controllers';
import { BoatModule } from '@libs/boat';
import { UsersModule } from '@libs/users';

@Module({
  imports: [BoatModule, UsersModule],
  controllers: [CandidateAuthController],
  providers: [AuthApisService],
})
export class AuthApisModule {}
