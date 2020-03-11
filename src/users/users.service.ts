import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUsers(): Promise<User> {
    return await this.userModel.find().exec();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password =  await bcrypt.hash(createUserDto.password, 10);
    return this.userModel(createUserDto).save();
  }
}
