import { Module } from '@nestjs/common';
import { ConfigServiceClass }  from './config.service';

@Module({
  providers: [ConfigServiceClass],
  exports: [ConfigServiceClass]
})
export class connectionModule { }
