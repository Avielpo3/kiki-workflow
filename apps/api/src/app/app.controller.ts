import { HttpCode } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

import { Message } from '@kiki-workspace/api-interfaces';

import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor() {
    console.log('1111111111111111111111111111111111');

  }

  // @Get('hello')
  // getData(): Message {
  //   // return this.appService.getData();
  // }

  @Get()
  @HttpCode(200)
  test(): Message {
    return { message: 'OK' };
  }

  @Get('test')
  @HttpCode(200)
  healthCheck(): Message {
    return { message: 'OK' };
  }
}
