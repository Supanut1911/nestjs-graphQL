import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserInput } from './dto/input/update-user.input';
import { GetUsersArgs } from './dto/args/get-users.args';
import { GetUserArgs } from './dto/args/get-user.args';
import { DeleteUserInput } from './dto/input/delete-user.input';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.id === getUserArgs.id);
  }

  getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.ids.map((id) => this.getUser({ id }));
  }

  createUser(createuserData: CreateUserInput): User {
    const user: User = {
      id: uuidv4(),
      ...createuserData,
    };
    this.users.push(user);
    return user;
  }

  update(updateUserData: UpdateUserInput): User {
    const user = this.users.find((user) => user.id === updateUserData.id);
    Object.assign(user, updateUserData);

    return user;
  }

  deleteUser(delteUserData: DeleteUserInput): User {
    const userIdx = this.users.findIndex(
      (user) => user.id === delteUserData.id,
    );
    const user = this.users[userIdx];
    this.users.splice(userIdx);
    return user;
  }
}
