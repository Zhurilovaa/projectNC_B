import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasechildController } from './basechild/basechild.controller';
import { FondServerController } from './fond_server/fond_server.controller';

@Module({
  imports: [],
  controllers: [AppController, BasechildController, FondServerController],
  providers: [AppService],
})
export class AppModule {}
