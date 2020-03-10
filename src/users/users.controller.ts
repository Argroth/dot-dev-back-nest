import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): any{
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Res() res, @Body() createUserDto: CreateUserDto){
    const userCreated = await this.usersService.createUser(createUserDto);
    return res.status(HttpStatus.OK).json({message: "User Created", user: userCreated});
  }
}
