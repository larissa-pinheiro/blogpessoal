# 📝 Blog Pessoal
Projeto backend de blog pessoal desenvolvido como parte do Bootcamp da Generation, utilizando NestJS e MySQL para criar uma API REST completa.

## 🚀 Tecnologias Utilizadas

**[NestJS](https://nestjs.com/)** - Framework Node.js para construção da API REST  
**[TypeScript](https://www.typescriptlang.org)** - Linguagem de programação com tipagem estática  
**[TypeORM](https://typeorm.io/)** - ORM para integração com banco de dados  
**[MySQL](https://www.mysql.com)** - Sistema de gerenciamento de banco de dados (SGBD)

## 📋 Funcionalidades

- [ ] CRUD de postagens
- [ ] Validação de dados
- [ ] Tratamento de erros
- [ ] Documentação da API
- [ ] Testes unitários

## 🛠️ Como Executar  
### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **MySQL** (servidor de banco de dados)
- **npm** (gerenciador de pacotes)

### Instalação

#### Clone o repositório:

```bash
git clone https://github.com/larissa-pinheiro/blogpessoal.git
```
#### Acesse o diretório do projeto:

```
cd blogpessoal
```
#### Instale as dependências:

```bash
npm install
```

#### Configure o banco de dados:

Crie um banco de dados MySQL chamado `db_blogpessoal`  
Ajuste as credenciais no arquivo de configuração se necessário

#### Execute a aplicação:

```bash
# Desenvolvimento
npm run start:dev
```

```bash
# Produção
npm run start:prod
```

#### A API estará disponível em `http://localhost:3000`  

## 📚 Estrutura do Projeto  

```
📁 src/  
├── 📁 postagem/  
│   ├── 📁 controllers/  
│   │   └── postagem.controller.ts  
│   ├── 📁 entities/  
│   │   └── postagem.entity.ts  
│   ├── 📁 services/  
│   │   └── postagem.service.ts  
│   └── postagem.module.ts  
├── app.module.ts  
└── main.ts
```  

## 🤝 Contribuindo
Este é um projeto de estudo do bootcamp. Sugestões e melhorias são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
