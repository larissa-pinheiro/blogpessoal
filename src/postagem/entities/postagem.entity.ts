import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  // id INT AUTO_INCREMENT PRIMARY KEY
  @PrimaryGeneratedColumn()
  id: number;

  // titulo VARCHAR(100) NOT NULL
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  // texto VARCHAR(1000) NOT NULL
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  // data datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
  @UpdateDateColumn()
  data: Date;
}
