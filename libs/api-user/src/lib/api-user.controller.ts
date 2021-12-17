import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiUserService } from "./api-user.service";
import { CreateUserDto } from "./dto/CreateUserDto";
import { Message } from "@kiki-workspace/api-interfaces";

@Controller("api-user")
export class ApiUserController {
  constructor(private apiUserService: ApiUserService) {
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto):Promise<Message> {
    const user = await this.apiUserService.create(createUserDto);

    return {message: JSON.stringify(user)};
  }

}
