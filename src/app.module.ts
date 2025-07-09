import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdService } from './data/services/prod.service';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService, // alterar para DevService para desenvolvimento e DB MySQL
      imports: [ConfigModule],
    }),
    PostagemModule,
    TemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
