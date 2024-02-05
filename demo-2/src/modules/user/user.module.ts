import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserDao } from './daos/user.dao';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService, UserDao],
  exports: [UserService, UserDao],
  controllers: [UserController],
})
export class UserModule {}
