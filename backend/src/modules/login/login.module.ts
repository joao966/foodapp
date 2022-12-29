import { Module } from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginController } from "./login.controller";
import { ConfigServiceClass } from "src/config/conection/config.service";

@Module({
  controllers: [LoginController],
  providers: [LoginService, ConfigServiceClass],
})
export class LoginModule {}
