import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsers() {
    const x = await this.userRepository.getPaginatedUsers(10, 1);
    console.log(x.data[0], "bro");
    return x;
  }
}
