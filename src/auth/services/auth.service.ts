import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from "../entities/usuarioLogin.entity";
import { UsuarioService } from './../../usuario/services/usuario.service';


@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private bcrypt: Bcrypt
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const buscaUsuario = await this.usuarioService.findByUsuario(username)

    if (!buscaUsuario)
      throw new NotFoundException('Usuário não encontrado!')

    const matchPassword = await this.bcrypt.compararSenhas(password, buscaUsuario.senha)

    if (buscaUsuario && matchPassword) {
      const { senha, ...resposta } = buscaUsuario
      return resposta
    }

    return null
  }

  async login(usuarioLogin: UsuarioLogin) {
    const usuarioValidado = await this.validateUser(usuarioLogin.usuario, usuarioLogin.senha);

    if (!usuarioValidado)
      throw new NotFoundException('Usuário ou senha inválidos!');

    const payload = { sub: usuarioValidado.usuario };

    return {
      id: usuarioValidado.id,
      nome: usuarioValidado.nome,
      usuario: usuarioValidado.usuario,
      senha: '',
      foto: usuarioValidado.foto,
      token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }

}