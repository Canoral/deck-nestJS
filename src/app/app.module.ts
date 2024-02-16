import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from 'src/card/card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from 'commons/config';
import { Card } from 'src/card/card.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'deck',
      password: 'deck',
      database: 'deck',
      entities: [Card],
    }),CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
