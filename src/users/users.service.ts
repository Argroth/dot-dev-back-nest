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
    const generatedPassword = await bcrypt.hash(createUserDto.password, 10, async (err, hash): Promise<string> => {
      console.log(hash);
       return await hash;
    });

    console.log(generatedPassword);
    const createdUser = await this.userModel(createUserDto);
    return createdUser;
  }
}
