# API REST utilizando Node.js, Express, PostgreSQL e Prisma

Este é um exemplo de arquivo README para uma API RESTful desenvolvida com Node.js, utilizando o framework Express, PostgreSQL como banco de dados no Supabase e Prisma como ORM (Object-Relational Mapping).

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
yarn build
```
3. Crie uma conta no supabase e vai em database .

4. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias. Aqui está um exemplo básico de configuração:

```plaintext thema = dracula
# Postgres database config variables:
POSTGRES_USER=postgres
POSTGRES_PASSWORD=//senha do seu db do supabase
POSTGRES_DB=// nome do seu db do supabase

# Config database:
DB_PORT=5432
DB_SCHEMA=public

# Database connection:
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_DB}:${DB_PORT}/postgres?schema=${DB_SCHEMA}



# token para descriptografar o jwt do user.
TOKEN_KEY = "//Defina a senha ."


```

Certifique-se de substituir `usuario`, `senha`, `5432` e `nome-do-banco` pelas suas configurações locais do PostgreSQL.


## Migração do banco de dados

Este projeto utiliza o Prisma para migração do banco de dados. Certifique-se de ter configurado corretamente a conexão com o banco de dados no arquivo `.env`. Em seguida, execute o seguinte comando para aplicar as migrações:

```bash
npx prisma migrate dev --name init

#subir as alterações do banco.
npx prisma db push
```

Isso irá criar as tabelas e as relações necessárias no banco de dados.

## Executando a aplicação

Após configurar o ambiente e aplicar as migrações, você pode iniciar a aplicação usando o seguinte comando:

```bash
yarn build
yarn dev
```

Isso irá iniciar o servidor Express e você poderá acessar a API REST em `http://localhost:3001`.

## Endpoints da API

Aqui estão alguns exemplos de endpoints que você pode utilizar nesta API:
## User
- `GET /users`: Retorna uma lista de usuários.
- `GET /users/:id`: Retorna um usuário específico com base no ID fornecido.
- `POST /users`: Cria um novo usuário.
- `PUT /users/:id`: Atualiza um usuário existente com base no ID fornecido.
- `PUT /users/add-agency/:id`: Adicionar uma agência a um usuário exitente com base no ID fornecido.
- `DELETE /users/:id`: Remove um usuário específico com base no ID fornecido.
- `POST /login`: Acessar a pagina de login com email e senha.
- `GET /agencies`: Retorna uma lista de agência.
- `GET /agencies/:id`: Retorna um agência específico com base no ID fornecido.
- `POST /agencies`: Cria um novo agência.
- `PUT /agencies/:id`: Atualiza um agência existente com base no ID fornecido.
- `PUT /agencies/add-user/:id`: Adicionar um usuário a agência existente com base no ID fornecido.
- `DELETE /agencies/:id`: Remove um agência específico com base no ID fornecido.


# Uso dos endpoints 

Como padrão tem que criar um usuário e pegar o token que retorna no endpoit `POST /login` com corpo json sendo Email e senha do usuário.
após isso poderar adcionar `N User para Agência e 1 Agência para User.
Certifique-se de consultar a documentação do seu código-fonte para obter mais detalhes sobre os endpoints disponíveis.

## Contribuindo

Se você deseja contribuir para este projeto, fique à vontade para abrir uma issue ou enviar uma pull request. Será um prazer receber suas contribuições!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).