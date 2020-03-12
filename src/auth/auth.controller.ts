import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //login user
  @Post('/login')
  async loginUser(@Res() res, @Body() body){
    const loggedUser = await this.authService.loginUser(body);
    console.log(loggedUser);
    return res.status(HttpStatus.OK).json({user: loggedUser});
  }

  //create user
  @Post()
  async createUser(@Res() res, @Body() createUserDto: CreateUserDto){
    const userCreated = await this.authService.createUser(createUserDto);
    return res.status(HttpStatus.OK).json({message: "User Created", user: userCreated});
  }
}
