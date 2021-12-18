import { Module } from '@nestjs/common';
import { ApiUserController } from './api-user.controller';
import { ApiUserService } from './api-user.service';
import { MongooseModule } from "@nestjs/mongoose";
import { DboUser, UserSchema } from "./schemas/api-user-schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: DboUser.name, schema: UserSchema }])],
  controllers: [ApiUserController],
  providers: [ApiUserService],
  exports: [ApiUserService],
})
export class ApiUserModule {}
