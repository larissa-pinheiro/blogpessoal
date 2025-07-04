import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {
  async criptografarSenha(senha: string): Promise<string> {
    const saltos: number = 10; // Os saltos (ou salt rounds) determinam quantas vezes o algoritmo de hash será processado internamente.

    return await bcrypt.hash(senha, saltos);
  }

  async compararSenhas(senhaDigitada: string, senhaBanco: string): Promise<boolean> {
    return await bcrypt.compare(senhaDigitada, senhaBanco)
  };
}
