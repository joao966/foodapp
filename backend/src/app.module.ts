import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/conection/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigService.getTypeOrmConfigDefault()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
