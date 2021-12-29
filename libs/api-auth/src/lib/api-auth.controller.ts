import { Public } from '@kiki-workspace/api-interfaces';
import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { ApiAuthService } from './api-auth.service';
import { JwtAuthGuard } from './guards/api-jwt-auth.guard';
import { LocalAuthGuard } from './guards/api-local-auth.guard';

@Controller('auth')
export class ApiAuthController {
  constructor(private readonly authService: ApiAuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
