import { Response as ResponseType } from 'express';
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
                throw new HttpException('EMAIL_EXIST', HttpStatus.BAD_REQUEST)
            }
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt);
            await this.userRepository.insert({ email, username, password: hashedPassword })
        } catch (err) {
            throw new HttpException(`ERROR_IN_REGISTER: ${err}`, HttpStatus.BAD_REQUEST) //bed req or internal server error?
        }
    }

    async login(password: string, email: string, res: ResponseType) {
        try {
            const user = await this.userRepository.findOne({ where: { email } })
            if (!user) {
                //* Pay attention to not return specific error to the client 
                throw new HttpException('INCORRECT_USER_DETAILS', HttpStatus.UNAUTHORIZED)
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password)
            console.log('isPasswordMatch: ', isPasswordMatch);
            if (!isPasswordMatch) {
                //* Pay attention to not return specific error to the client 
                throw new HttpException('INCORRECT_USER_DETAILS', HttpStatus.UNAUTHORIZED)
            }
            //hear we need to send session id inside cookie (changed by jwt with refresh token)
            //is it need to be middleware? for auth and get if the user logged in each req form the server 
            // - check every time the session id by the cookie and if needed make new token, then return to server req the userId
            // when logout del the refresh token and when login agin create new one - refresh token needs to save in DB 
            return res.sendStatus(204)
        } catch (err) {
            throw new HttpException(`ERROR_IN_LOGIN: ${err}`, HttpStatus.BAD_REQUEST)
        }
    }
}
