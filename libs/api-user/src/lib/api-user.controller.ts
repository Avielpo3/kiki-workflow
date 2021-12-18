import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { ApiUserService } from "./api-user.service";
import { CreateUserDto } from "./dto/CreateUserDto";
import { Message, User } from "@kiki-workspace/api-interfaces";

@Controller("user")
export class ApiUserController {
  constructor(private apiUserService: ApiUserService) {
  }

  @Get()
  @HttpCode(200)
  async get(): Promise<any[]> {
    const users = await this.apiUserService.findAll();

    return users;
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto):Promise<any> {
    const user = await this.apiUserService.create(createUserDto);

    return user;
  }

}
