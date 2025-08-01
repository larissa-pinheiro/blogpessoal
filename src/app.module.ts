import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ProdService } from './data/services/prod.service';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService, // alterar para DevService para desenvolvimento e DB MySQL ou ProdService para produção
      imports: [ConfigModule],
    }),
    PostagemModule,
    TemaModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
