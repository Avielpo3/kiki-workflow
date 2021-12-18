import { User } from '@kiki-workspace/api-interfaces';
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
  ): Promise<User> {
    const user = await this.usersService.findUserWithPasswordByEmail(email);

    // TODO: add more logic (locked etc..)

    if (user && user.password === password) {
      console.log(`Valid for: ${user.email}`);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;

      return rest;
    }

    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, id: user.id };
    console.log(user);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
