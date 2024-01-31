import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController {
    constructor( private userService: UserService){}

    @Get('users')
    async getUsers() {
        return this.userService.getUsers();
    }
} 