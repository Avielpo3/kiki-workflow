import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ApiUserService } from "./api-user.service";
import { CreateUserDto } from "./dto/CreateUserDto";
import { User } from "@kiki-workspace/api-interfaces";

@Controller("users")
export class ApiUserController {
  constructor(private apiUserService: ApiUserService) {
  }

  @Get()
  @HttpCode(200)
  async getUsers(): Promise<User[]> {
    const users = await this.apiUserService.findAll();

    return users;
  }

  @Get(':id')
  @HttpCode(200)
  async getUser(@Param('id') id: string): Promise<User> {
    const user = await this.apiUserService.findUserById(id);

    return user;
  }


  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto):Promise<User> {
    const user = await this.apiUserService.create(createUserDto);

    return user;
  }

}
