import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';

@Injectable()
export class UserDao {
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
