import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ApiUserModule } from '@kiki-workspace/api-user';
// import { environment } from '../environments/environment';
// import { ApiAuthModule } from '@kiki-workspace/api-auth';
//import { APP_GUARD } from '@nestjs/core';
//import { JwtAuthGuard } from '@kiki-workspace/api-auth';

// const MongoModule = MongooseModule.forRoot(environment.mongodbUri, {
//   appName: environment.mongoDbAppName,
//   sslKey: environment.mongoDbX509,
//   sslCert: environment.mongoDbX509,
// });

// const GlobalJwtAuthGuard = {
//   provide: APP_GUARD,
//   useClass: JwtAuthGuard,
// };

Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  exports: []
});
export class AppModule {

}
