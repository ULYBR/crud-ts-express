---

<h1 align="center">API REST using Node.js, Express, PostgreSQL, and Prisma</h1>

<p align="center">
  <em>This is an example README file for a RESTful API developed with Node.js, utilizing the Express framework, PostgreSQL as the database on Supabase, and Prisma as the ORM (Object-Relational Mapping).</em>
</p>

## Table of Contents

- [Requirements](#requirements)
- [Environment Setup](#environment-setup)
- [Database Migration](#database-migration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [User](#user)
  - [Agency](#agency)
  - [Client](#client)
- [Contributing](#contributing)
- [License](#license)

## Requirements

Ensure you have the following tools installed on your machine:

- Node.js (version 12 or higher)
- Yarn
- Prisma
- Supabase

## Environment Setup

1. Clone the repository to your local environment:

```bash
git clone https://gitlab.com/tegrus/learning-isc-team/ulysses/crud-ts.git
cd crud-ts
```

2. Install project dependencies by running the following command in the terminal:

```bash
yarn install
```

3. Create an account on Supabase and navigate to the database section.

4. Create a `.env` file in the project's root and define the necessary environment variables. Here is a basic configuration example:

```plaintext
# Environment Configuration
thema=dracula

# Postgres database config variables:
POSTGRES_USER=postgres
POSTGRES_PASSWORD=//your Supabase db password
POSTGRES_DB=//your Supabase db name

# Config database:
DB_PORT=5432
DB_SCHEMA=public

# Database connection:
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_DB}:${DB_PORT}/postgres?schema=${DB_SCHEMA}

# Token to decrypt the user's jwt.
TOKEN_KEY=//Define the secret.
```

Be sure to replace `user`, `password`, `5432`, and `database-name` with your local PostgreSQL settings.

## Database Migration

This project uses Prisma for database migration. Make sure you have properly configured the database connection in the `.env` file. Then, run the following command to apply the migrations:

```bash
npx prisma migrate dev --name init

# Apply database changes.
npx prisma db push
```

This will create the necessary tables and relations in the database.

## Running the Application

After setting up the environment and applying migrations, you can start the application using the following command:

```bash
yarn build
yarn dev
```

This will start the Express server, and you can access the REST API at `http://localhost:3001`.

## API Endpoints

### User

- `GET /users/me`: Returns the details of the authenticated user. **(Only authenticated users can access this endpoint)**.

- `PUT /users/me`: Updates the details of the authenticated user. **(Only the user themselves can update their data)**.

### Agency

- `GET /agencies`: Returns a list of agencies. **(Only administrators can access this endpoint)**.

- `GET /agencies/all`: Returns all public agencies. **(Common users can access this endpoint)**.

- `GET /agencies/:id`: Returns the details of a specific agency based on the provided ID. **(Only administrators can access this endpoint)**.

- `POST /agencies`: Creates a new agency. **(Only administrators can create agencies)**.

- `PUT /agencies/:id`: Updates the details of an existing agency based on the provided ID. **(Only administrators can edit agencies)**.

- `DELETE /agencies/:id`: Removes a specific agency based on the provided ID. **(Only administrators can remove agencies)**.

### Client

- `GET /clients`: Returns a list of clients. **(Only administrators can access this endpoint)**.

- `GET /clients/all`: Returns all public clients. **(Common users can access this endpoint)**.

- `GET /clients/:id`: Returns the details of a specific client based on the provided ID. **(Only administrators can access this endpoint)**.

- `POST /clients`: Creates a new client. **(Only administrators can create clients)**.

- `PUT /clients/:id`: Updates the details of an existing client based on the provided ID. **(Only administrators can edit clients)**.

- `DELETE /clients/:id`: Removes a specific client based on the provided ID. **(Only administrators can remove clients)**.

Remember to replace `:id` with the actual IDs when making requests.

## Contributing

If you want to contribute to this project, feel free to open an issue or send a pull request. Your contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

---

<h1 align="center">API REST utilizando Node.js, Express, PostgreSQL e Prisma</h1>

<p align="center">
  <em>Este é um exemplo de arquivo README para uma API RESTful desenvolvida com Node.js, utilizando o framework Express, PostgreSQL como banco de dados no Supabase e Prisma como ORM (Object-Relational Mapping).</em>
</p>

## Índice

- [Requisitos](#requisitos)
- [Configuração do ambiente](#configuração-do-ambiente)
- [Migração do banco de dados](#migração-do-banco-de-dados)
- [Executando a aplicação](#executando-a-aplicação)
- [Endpoints da API](#endpoints-da-api)
  - [Usuário](#usuário)
  - [Agência](#agência)
  - [Cliente](#cliente)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 12 ou superior)
- Yarn
- Prisma
- Supabase

## Configuração do ambiente

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://gitlab.com/tegrus/learning-isc-team/ulysses/crud-ts.git
cd crud-ts
```

2. Instale as dependências do projeto executando o seguinte comando no terminal:

```bash
yarn install
```

3. Crie uma conta no Supabase e vá para a seção de banco de dados.

4. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias. Aqui está um

exemplo básico de configuração:

```plaintext
# Configuração do Ambiente
thema=dracula

# Variáveis de configuração do banco de dados Postgres:
POSTGRES_USER=postgres
POSTGRES_PASSWORD=//senha do seu banco de dados do Supabase
POSTGRES_DB=//nome do seu banco de dados do Supabase

# Configuração do banco de dados:
DB_PORT=5432
DB_SCHEMA=public

# Conexão com o banco de dados:
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_DB}:${DB_PORT}/postgres?schema=${DB_SCHEMA}

# Token para descriptografar o jwt do usuário.
TOKEN_KEY=//Defina a senha.
```

Certifique-se de substituir `usuario`, `senha`, `5432` e `nome-do-banco` pelas suas configurações locais do PostgreSQL.

## Migração do banco de dados

Este projeto utiliza o Prisma para migração do banco de dados. Certifique-se de ter configurado corretamente a conexão com o banco de dados no arquivo `.env`. Em seguida, execute o seguinte comando para aplicar as migrações:

```bash
npx prisma migrate dev --name init

# Aplicar as alterações no banco de dados.
npx prisma db push
```

Isso criará as tabelas e relações necessárias no banco de dados.

## Executando a aplicação

Após configurar o ambiente e aplicar as migrações, você pode iniciar a aplicação usando o seguinte comando:

```bash
yarn build
yarn dev
```

Isso iniciará o servidor Express e você poderá acessar a API REST em `http://localhost:3001`.

## Endpoints da API

### Usuário

- `GET /users/me`: Retorna os detalhes do usuário autenticado. **(Somente usuários autenticados podem acessar este endpoint)**.

- `PUT /users/me`: Atualiza os detalhes do usuário autenticado. **(Somente o próprio usuário pode atualizar seus dados)**.

### Agência

- `GET /agencies`: Retorna uma lista de agências. **(Somente administradores podem acessar este endpoint)**.

- `GET /agencies/all`: Retorna todas as agências públicas. **(Usuários comuns podem acessar este endpoint)**.

- `GET /agencies/:id`: Retorna os detalhes de uma agência específica com base no ID fornecido. **(Somente administradores podem acessar este endpoint)**.

- `POST /agencies`: Cria uma nova agência. **(Somente administradores podem criar agências)**.

- `PUT /agencies/:id`: Atualiza os detalhes de uma agência existente com base no ID fornecido. **(Somente administradores podem editar agências)**.

- `DELETE /agencies/:id`: Remove uma agência específica com base no ID fornecido. **(Somente administradores podem remover agências)**.

### Cliente

- `GET /clients`: Retorna uma lista de clientes. **(Somente administradores podem acessar este endpoint)**.

- `GET /clients/all`: Retorna todos os clientes públicos. **(Usuários comuns podem acessar este endpoint)**.

- `GET /clients/:id`: Retorna os detalhes de um cliente específico com base no ID fornecido. **(Somente administradores podem acessar este endpoint)**.

- `POST /clients`: Cria um novo cliente. **(Somente administradores podem criar clientes)**.

- `PUT /clients/:id`: Atualiza os detalhes de um cliente existente com base no ID fornecido. **(Somente administradores podem editar clientes)**.

- `DELETE /clients/:id`: Remove um cliente específico com base no ID fornecido. **(Somente administradores podem remover clientes)**.

Lembre-se de substituir `:id` pelos IDs reais ao fazer as solicitações.

## Contribuindo

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Suas contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
