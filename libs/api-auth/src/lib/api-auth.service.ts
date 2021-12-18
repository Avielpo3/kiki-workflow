import { UserWithPassword } from '@kiki-workspace/api-interfaces';
import { ApiUserService } from '@kiki-workspace/api-user';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ApiAuthService {
  constructor(
    private readonly usersService: ApiUserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(
    email: string,
    password: string
  ): Promise<UserWithPassword> {
    const user = await this.usersService.findUserWithPasswordByEmail(email);
    
    // TODO: add more logic (locked etc..)

    if (user && user.password === password) {
      console.log(user.email);
      return user;
    }

    return null;
  }

  async login(email: string, password: string) {
    const payload = { username: email, sub: password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
