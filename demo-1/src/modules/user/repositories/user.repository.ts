import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { Repository } from 'src/repository';

@Injectable()
export class UserRepository extends Repository {
  @InjectModel(User)
  private userModel: typeof User;

  async getPaginatedUsers(limit: number, page: number) {
    const users = await this.userModel.findAll({
      limit,
      offset: (page - 1) * limit,
    });
    return {
      data: users.eachToJSON(),
    };
  }
}
