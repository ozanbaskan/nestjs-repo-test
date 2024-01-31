import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../models/user.model";
import { Repository } from "src/repository";

@Injectable()
export class UserRepository extends Repository {
    @InjectModel(User)
    private userModel: typeof User

    async getPaginatedUsers(limit: number, page: number) {
        const user = await this.userModel.findOne();
        return user;
    }

}