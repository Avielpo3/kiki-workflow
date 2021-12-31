import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DboUser, UserDocument } from './schemas/api-user-schema';
import { CreateUserDto } from './dto/CreateUserDto';
import { User, UserWithPassword } from '@kiki-workspace/api-interfaces';

@Injectable()
export class ApiUserService {
  constructor(
    @InjectModel(DboUser.name) private userModel: Model<UserDocument>
  ) {}

  async findAll(): Promise<User[]> {
    const userList = await this.userModel.find().exec();
    const convertedUserArr = userList.map((user) => user.toJSON<User>());

    return convertedUserArr;
  }

  async findUserById(_id: string): Promise<User> {
    const queryFilter: FilterQuery<UserDocument> = { _id };
    const foundUser = await this.userModel.findOne(queryFilter).exec();

    return foundUser.toJSON<User>();
  }

  async findUserByEmail(email: string): Promise<User> {
    const queryFilter: FilterQuery<UserDocument> = { email };
    const foundUser = await this.userModel.findOne(queryFilter).exec();

    return foundUser.toJSON<User>();
  }

  async findUserWithPasswordByEmail(email: string): Promise<UserWithPassword> {
    const queryFilter: FilterQuery<UserDocument> = { email };
    const transform = (doc, ret: UserDocument) => ({ id: ret._id, ...ret });
    const foundUser = await this.userModel.findOne(queryFilter).exec();
    
    return foundUser ? foundUser.toJSON<UserWithPassword>({transform}) : null;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userToCreate = new this.userModel(createUserDto);
    const createdUser = await userToCreate.save();

    return createdUser.toJSON<User>();
  }
}
