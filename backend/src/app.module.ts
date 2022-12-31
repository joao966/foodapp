import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/conection/config.service';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigService.getTypeOrmConfigDefault()),
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
