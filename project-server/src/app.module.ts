import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasechildController } from './basechild/basechild.controller';
import { FondServerController } from './fond_server/fond_server.controller';
import { ConfigController } from './config/config.controller';

@Module({
  imports: [],
  controllers: [AppController, BasechildController, FondServerController, ConfigController],
  providers: [AppService],
})
export class AppModule {}
