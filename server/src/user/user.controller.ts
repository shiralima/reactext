import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { NewUserDetails } from './dto/index';

@Controller('api/user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Post("/register")
    async getSettingsOfUser(@Body() { email, password, username }: NewUserDetails) {
        try {
            return await this.userService.registerNewUser(email, password, username);
        } catch (err) {
            return err;
        }
    }
}
