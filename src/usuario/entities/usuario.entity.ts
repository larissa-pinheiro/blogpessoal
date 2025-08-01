import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Postagem } from "../../postagem/entities/postagem.entity"

@Entity({ name: "tb_usuarios" })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Nome deve conter apenas texto' })
  @Matches(/\S/, { message: 'Nome não pode conter apenas espaços' })
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/, {
    message: 'Nome deve conter apenas letras e espaços',
  })
  @MinLength(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
  @MaxLength(255, { message: 'Nome excede o limite permitido' })
  @Column({ length: 255, nullable: false })
  nome: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Email inválido' })
  @MaxLength(255, { message: 'Email excede o limite permitido' })
  @Column({ length: 255, nullable: false, unique: true })
  usuario: string

  @ApiProperty()
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @IsString({
    message:
      'Senha inválida: use somente letras, números e símbolos permitidos',
  })
  @MinLength(12, { message: 'Senha deve ter pelo menos 12 caracteres' })
  @Matches(/(?=.*[a-z])/, {
    message: 'Senha deve conter pelo menos uma letra minúscula',
  })
  @Matches(/(?=.*[A-Z])/, {
    message: 'Senha deve conter pelo menos uma letra maiúscula',
  })
  @Matches(/(?=.*\d)/, { message: 'Senha deve conter pelo menos um número' })
  @Matches(/(?=.*[@$#!%*?&])/, {
    message: 'Senha deve conter pelo menos um caractere especial (@$#!%*?&)',
  })
  @Column({ length: 255, nullable: false })
  senha: string

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Foto deve ser uma URL válida' })
  @MaxLength(5000, { message: 'Foto excede o limite permitido' })
  @Column({ length: 5000, nullable: true })
  foto?: string

  @ApiProperty()
  @OneToMany(() => Postagem, (postagem) => postagem.usuario)
  postagem: Postagem[]
}