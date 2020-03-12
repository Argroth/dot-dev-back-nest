import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //get all users
  @Get()
  getUsers(): any{
    return this.usersService.getUsers();
  }

  //get single user by id
  @Get('/:id')
  async getUser(@Res() res, @Param('id') id){
    const token = await this.usersService.getUser(id);
    return res.status(HttpStatus.OK).json({userToken: token});
  }

}
