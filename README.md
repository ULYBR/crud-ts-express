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

### User (Usuário)

- `GET /users`: Retorna uma lista de usuários.

- `GET /users/:id`: Retorna os detalhes de um usuário específico com base no ID fornecido.

- `POST /users`: Cria um novo usuário.

- `PUT /users/:id`: Atualiza os detalhes de um usuário existente com base no ID fornecido.

- `DELETE /users/:id`: Remove um usuário específico com base no ID fornecido.

### Agency (Agência)

- `GET /agencies`: Retorna uma lista de agências.

- `GET /agencies/:id`: Retorna os detalhes de uma agência específica com base no ID fornecido.

- `POST /agencies`: Cria uma nova agência.

- `PUT /agencies/:id`: Atualiza os detalhes de uma agência existente com base no ID fornecido.

- `DELETE /agencies/:id`: Remove uma agência específica com base no ID fornecido.

### Client (Cliente)

- `GET /clients`: Retorna uma lista de clientes.
- `GET /clients/:id`: Retorna os detalhes de um cliente específico com base no ID fornecido.
- `POST /clients`: Cria um novo cliente.
- `PUT /clients/:id`: Atualiza os detalhes de um cliente existente com base no ID fornecido.
- `DELETE /clients/:id`: Remove um cliente específico com base no ID fornecido.

Lembre-se de substituir `:id` pelos IDs reais ao fazer as solicitações.


# Uso dos endpoints 

Como padrão tem que criar um usuário e pegar o token que retorna no endpoit `POST /login` com corpo json sendo Email e senha do usuário.
após isso poderar adcionar `N User para Agência e 1 Agência para User.
Certifique-se de consultar a documentação do seu código-fonte para obter mais detalhes sobre os endpoints disponíveis.

## Contribuindo

Se você deseja contribuir para este projeto, fique à vontade para abrir uma issue ou enviar uma pull request. Será um prazer receber suas contribuições!
## Insomnia Test 
Import arquivo Insomnia.json que irá ter todos os métodos usados para exemplo da API.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
Aqui está a documentação revisada em formato Markdown (MD) com base nos endpoints fornecidos anteriormente:



