import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/dto/create-users.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login') 
    login (@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto)
    }

    @Post('/registration')
    registration(@Body() createUserDto: CreateUsersDto) {
        return this.authService.registration(createUserDto)
    }

}
