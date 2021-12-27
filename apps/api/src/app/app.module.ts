import { ApiAuthModule } from '@kiki-workspace/api-auth';
import { JwtAuthGuard } from '@kiki-workspace/api-auth';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment.prod';
import { AppController } from './app.controller';
import { AppService } from './app.service';


const MongoModule = MongooseModule.forRoot(environment.mongodbUri, {
  appName: environment.mongoDbAppName,
  sslKey: environment.mongoDbX509,
  sslCert: environment.mongoDbX509,
});

const GlobalJwtAuthGuard = {
  provide: APP_GUARD,
  useClass: JwtAuthGuard,
};
@Module({
  imports: [MongoModule, ApiAuthModule],
  controllers: [AppController],
  providers: [AppService, GlobalJwtAuthGuard],
})
export class AppModule {}
