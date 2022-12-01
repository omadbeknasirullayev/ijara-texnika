import { IsEmail, IsEnum, IsString } from "class-validator"

export class CreateUsersDto {
    @IsString({message: "Name satr bo'lishi kerak"})
    name: string

    @IsString({message: "Email satr bo'lishi kerak"})
    @IsEmail({}, {message: "Email noto'g'ri kiritildi"})
    email: string

    @IsString({message: "Phone_number satr bo'lishi kerak"})
    phone_number: string
    
    @IsString({message: "Location satr bo'lishi kerak"})
    location?: string
}