import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  // id INT AUTO_INCREMENT PRIMARY KEY
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  // titulo VARCHAR(100) NOT NULL
  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  // texto VARCHAR(1000) NOT NULL
  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  // data datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
  @ApiProperty()
  @UpdateDateColumn()
  data: Date;

  @ApiProperty({ type: () => Tema })
  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Tema;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: "CASCADE"
  })
  usuario: Usuario
}
