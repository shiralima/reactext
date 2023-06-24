import { IsEnum, IsString } from "class-validator";

export class NewUserDetails {

    @IsString()
    username: string;

    @IsString() //check email validation
    email: string;

    @IsString() //check email validation
    password: string;
}