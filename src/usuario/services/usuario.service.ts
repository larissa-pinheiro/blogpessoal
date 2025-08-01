import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcrypt: Bcrypt
  ) { }

  async findByUsuario(usuario: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({
      where: {
        usuario: usuario
      }
    })
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id
      }
    });

    if (!usuario)
      throw new NotFoundException('Usuario não encontrado!');

    return usuario;
  }

  async create(usuario: Usuario): Promise<Usuario> {
    const buscaUsuario = await this.findByUsuario(usuario.usuario);

    if (buscaUsuario)
      throw new BadRequestException("O Usuario já existe!");

    usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
    return await this.usuarioRepository.save(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {
    const usuarioExistente = await this.findById(usuario.id);

    const buscaUsuario = await this.findByUsuario(usuario.usuario);

    if (buscaUsuario && buscaUsuario.id !== usuario.id)
      throw new BadRequestException('Usuário (e-mail) já cadastrado!');

    if (!usuario.senha) {
      usuario.senha = usuarioExistente.senha;
    }

    usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
    return await this.usuarioRepository.save(usuario);
  }
}