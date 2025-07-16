import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DevService } from './data/services/dev.service';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: DevService, // alterar para DevService para desenvolvimento e DB MySQL ou ProdService para produção
      imports: [ConfigModule],
    }),
    PostagemModule,
    TemaModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
