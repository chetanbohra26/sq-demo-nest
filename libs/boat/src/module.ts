import { Global, Module } from '@nestjs/common';
import config from '@config/index';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DiscoveryModule } from '@nestjs/core';
import { BaseValidator } from './validator';
import { ObjectionModule } from '@squareboat/nestjs-objection';

@Global()
@Module({
  imports: [
    DiscoveryModule,
    ObjectionModule.registerAsync({
      isGlobal: true,
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('db'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: config,
    }),
  ],
  providers: [BaseValidator],
  exports: [],
})
export class BoatModule {}
