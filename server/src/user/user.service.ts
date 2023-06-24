import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Repository } from 'typeorm';
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }




    async registerNewUser(email: string, password: string, username: string) {
        try {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt);
            console.log('hashedPassword: ', hashedPassword);
            const r = await this.userRepository.insert({ email, username, password })
            console.log('r: ', r);
        } catch (err) {
            console.log('err: ', err);
            return err;
        }
    }
}
