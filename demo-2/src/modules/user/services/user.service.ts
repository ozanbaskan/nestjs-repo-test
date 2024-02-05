import { Injectable } from '@nestjs/common';
import { UserDao } from '../daos/user.dao';

@Injectable()
export class UserService {
  constructor(private userRepository: UserDao) {}

  async getUsers() {
    const x = await this.userRepository.getPaginatedUsers(10, 1);
    return x;
  }
}
