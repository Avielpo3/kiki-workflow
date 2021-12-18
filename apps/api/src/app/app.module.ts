import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ApiUserModule } from "@kiki-workspace/api-user";
import { environment } from "../environments/environment";
import { ApiAuthModule } from "@kiki-workspace/api-auth";

const MongoModule = MongooseModule.forRoot(environment.mongodbUri, {
  appName: environment.mongoDbAppName,
  sslKey: environment.mongoDbX509,
  sslCert: environment.mongoDbX509
});

@Module({
  imports: [
    MongoModule,
    ApiUserModule,
    ApiAuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}


