import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUsers(): Promise<User> {
    return await this.userModel.find().exec();
  }

  async getUser(id): Promise<User>{
    return await this.userModel.findById(id);
  }
}
