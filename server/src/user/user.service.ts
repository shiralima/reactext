import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
            //TODO check XXS hear
            const isEmailExist = await this.userRepository.findOne({ where: { email } })
            if (isEmailExist) {
                //TODO return status
                // return "EMAIL_EXIST"
            throw new HttpException('ERROR_IN_LOGIN' , HttpStatus.BAD_REQUEST)
            }
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt);
            await this.userRepository.insert({ email, username, password: hashedPassword })
        } catch (err) {
            throw new HttpException('ERROR_IN_REGISTER' , HttpStatus.BAD_REQUEST)
        }
    }

    async login(password: string, email: string) {
        try {
            const user = await this.userRepository.findOne({ where: { email } })
            if (!user) {
                //* Pay attention to not return specific error to the client 
                throw new HttpException('INCORRECT_USER_DIALS' , HttpStatus.UNAUTHORIZED)
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password)
            if (!isPasswordMatch) {
                //* Pay attention to not return specific error to the client 
                throw new HttpException('INCORRECT_USER_DIALS' , HttpStatus.UNAUTHORIZED)
            } 
        } catch (err) {
            throw new HttpException('ERROR_IN_LOGIN' , HttpStatus.BAD_REQUEST)
        }
    }
}
