# API
Api feita em TypeScript, usando Prisma como ORM e PostgreSql. Foi usado docker para virtualizar o banco de dados.

## CRUD
A api contém funcionalidades básicas de CRUD.

## Banco de Dados
Foi usado PostgreSQL rodando em ambiente virtual no docker.

# Start
Para rodar o backend é preciso ter o docker compose.
Após realizar a instalação do docker compose rode o comando:
 - docker-compose up -d 
Caso tudo ocorra como esperado o seu container deve estar rodando.

- Após iniciar o docker, você deve baixar as dependências do projeto através do comando `yarn` ou `yarn install`
- Feito isso, você pode rodar a API utilizando: `yarn dev`

## FrontEnd
Para realizar a configuração do frontend basta seguir a documentação nesse outro repositório
https://github.com/GBvaillant/FrontEnd-API-Fornecedores
