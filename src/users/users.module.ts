import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserResolver],
})
export class UsersModule {}
