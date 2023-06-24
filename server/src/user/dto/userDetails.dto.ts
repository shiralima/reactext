import { IsEnum, IsString } from "class-validator";

export class UserDetails {

    @IsString()
    username: string;

    @IsString() //check email validation
    email: string;

    @IsString() //check email validation
    password: string;
}