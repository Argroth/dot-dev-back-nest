import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  private secret = "superdupa";

  async loginUser(user): Promise<string>{
    const userFound = await this.userModel.findOne({"email": user.email}).exec();
    if(!userFound){
      throw new HttpException('No user with that email', HttpStatus.NOT_FOUND);
    } else {
      const result = await bcrypt.compare(user.password, userFound.password);

      if(result){
        const token = await jwt.sign({name: userFound.name, email: userFound.email}, this.secret, {expiresIn: '24h'});
        return token
      }else{
        throw new HttpException('Invalid password', HttpStatus.NOT_FOUND);
      }
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password =  await bcrypt.hash(createUserDto.password, 10);
    return this.userModel(createUserDto).save();
  }
}
