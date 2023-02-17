 # Boas-vindas ao repositório do projeto CarShop!

<strong>Projeto realizando durante o curso de _Desenvolvimento Web da Trybe_.</strong>

Para este projeto, foram utilizados os princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos. Isso foi feito utilizando o banco de dados `MongoDB` através do framework do `Mongoose`.

Para acessar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, me envie uma _[mensagem](https://portfolio-bay-omega-17.vercel.app/contact)_ :)

# Orientações

  - [Acesse a documentação do projeto aqui!](https://documenter.getpostman.com/view/25807192/2s935uG1ML#56e93251-caff-4851-8963-33b279c31b75) 

  <summary><strong>‼️ Para acessar o projeto: </strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:lcsrbr/carShop.git`.

  2. Instale as dependências

IMPORTANTE: necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.
rode o seguinte comando no seu terminal:
```
docker-compose up -d && docker exec -it car_shop bash
```
  3. Rode os comandos:
```
npm install
npm run dev
```
<br>

## Rotas Acessíveis, possíveis requests e responses

### 01 - rota POST /cars onde seja possível cadastrar um carro

- O endpoint é acessível através do caminho (`/cars`);

- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
- Deve-se retornar um JSON com as seguintes chaves:
```json
{
  "id": "6348513f34c397abcad040b2",
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
</br>
</br>

### 02 - rota /GET para listar carros

- O endpoint é acessível através do caminho (`/cars`) e (`/cars/:id`);

- Deve-se retornar um JSON com as seguintes chaves: 
```json
[
  {
    "id": "634852326b35b59438fbea2f",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.99,
    "doorsQty": 4,
    "seatsQty": 5
  },
  {
    "id": "634852326b35b59438fbea31",
    "model": "Tempra",
    "year": 1995,
    "color": "Black",
    "buyValue": 39,
    "doorsQty": 2,
    "seatsQty": 5
  }
]
```

- Ao buscar um carro por ID (`/cars/:id`), deve-se retornar um JSON com as seguintes chaves: 
```json
{
"id": "634852326b35b59438fbea2f",
"model": "Marea",
"year": 2002,
"color": "Black",
"status": true,
"buyValue": 15.99,
"doorsQty": 4,
"seatsQty": 5
}
```


- Não é possível listar um carro que não existe. Retorna `status 404` e um JSON com a seguinte mensagem: 
```json
{ "message": "Car not found" }
```
- Não é possível listar um carro quando o formato do `id` esta inválido. Retorna o `status 422` e um JSON com a seguinte mensagem: 
```json
{ "message": "Invalid mongo id" }
```
</br>
</br>

### 03 - Rota PUT /cars/:id onde seja possível atualizar um carro por ID

- O endpoint é acessível através do caminho (`/cars/:id`);

- Apenas o carro com o `id` presente na URL é atualizado;

- O corpo da requisição deverá seguir o formato abaixo:
```json
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```
- Deve-se retornar um JSON com as seguintes chaves: 
```json
{
"id": "634852326b35b59438fbea2f",
"model": "Marea",
"year": 1992,
"color": "Red",
"status": true,
"buyValue": 12.000,
"doorsQty": 2,
"seatsQty": 5
}
```

- Não é possível alterar um carro que não existe. Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
```json
{ "message": "Car not found" }
```
- Não é possível alterar um carro quando o formato do `id` esta inválido. Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
```json
{ "message": "Invalid mongo id" }
```

<br>
<br>

### 04 - Rota DELETE /cars/:id onde seja possível deletar um carro por ID
- O endpoint é acessível através do caminho (`/cars/:id`);

- Através do caminho `/cars/:id`, apenas o carro com o `id` presente na URL é excluído;

- Ao excluir com sucesso, retorne `status 204` sem body;

- Não é possível excluir um carro que não existe. Retorna `status 404` e um JSON com a mensagem: 
```json
 { "message": "Car not found" }
```
- Não é possível excluir um carro quando o formato do `id` esta inválido. Retorna `status 422` e um JSON com a mensagem: 
```json
 { "message": "Invalid mongo id" }
```
<br>
<br>

### 05 - rota POST /motorcycles onde seja possível cadastrar uma moto

- O endpoint é acessível através do caminho (`/motorcycles`);

- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
- Deve-se retornar um JSON com as seguintes chaves:
```json
{
  "id": "6348513f34c397abcad040b2",
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
</br>
</br>

### 06 - rota /GET para listar motos

- O endpoint é acessível através do caminho (`/motorcycles`) e (`/motorcycles/:id`);

- Deve-se retornar um JSON com as seguintes chaves: 
```json
[
  {
    "id": "634852326b35b59438fbea2f",
    "model": "Honda Cb 600f Hornet",
    "year": 2005,
    "color": "Yellow",
    "status": true,
    "buyValue": 30.000,
    "category": "Street",
    "engineCapacity": 600
  },
  {
    "id": "634852326b35b59438fbea31",
    "model": "Honda Cbr 1000rr",
    "year": 2011,
    "color": "Orange",
    "status": true,
    "buyValue": 59.900,
    "category": "Street",
    "engineCapacity": 1000
  }
]
```

- Ao buscar uma moto por ID (`/motorcycles/:id`), deve-se retornar um JSON com as seguintes chaves: 
```json
{
 "id": "634852326b35b59438fbea2f",
 "model": "Honda Cb 600f Hornet",
 "year": 2014,
 "color": "Red",
 "status": true,
 "buyValue": 45.000,
 "category": "Street",
 "engineCapacity": 600
}
```


- Não é possível listar uma moto que não existe. Retorna `status 404` e um JSON com a seguinte mensagem: 
```json
{ "message": "Motorcycle not found" }
```
- Não é possível listar uma moto quando o formato do `id` esta inválido. Retorna o `status 422` e um JSON com a seguinte mensagem: 
```json
{ "message": "Invalid mongo id" }
```
</br>
</br>

### 07 - Rota PUT /motorcycles/:id onde seja possível atualizar um moto por ID

- O endpoint é acessível através do caminho (`/motorcycles/:id`);

- Apenas a moto com o `id` presente na URL é atualizado;

- O corpo da requisição deverá seguir o formato abaixo:
```json
{
 "model": "Honda Cb 600f Hornet",
 "year": 2014,
 "color": "Red",
 "status": true,
 "buyValue": 45.000,
 "category": "Street",
 "engineCapacity": 600
}
```
- Deve-se retornar um JSON com as seguintes chaves: 
```json
{
 "id": "634852326b35b59438fbea2f",
 "model": "Honda Cb 600f Hornet",
 "year": 2014,
 "color": "Red",
 "status": true,
 "buyValue": 45.000,
 "category": "Street",
 "engineCapacity": 600
}
```

- Não é possível alterar uma moto que não existe. Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
```json
{ "message": "Motorcycle not found" }
```
- Não é possível alterar uma moto quando o formato do `id` esta inválido. Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
```json
{ "message": "Invalid mongo id" }
```

<br>
<br>

### 08 - Rota DELETE /motorcycles/:id onde seja possível deletar um carro por ID
- O endpoint é acessível através do caminho (`/motorcycles/:id`);

- Através do caminho `/motorcycles/:id`, apenas a moto com o `id` presente na URL é excluído;

- Ao excluir com sucesso, retorne `status 204` sem body;

- Não é possível excluir uma moto que não existe. Retorna `status 404` e um JSON com a mensagem: 
```json
 { "message": "Motorcycle not found" }
```
- Não é possível excluir uma moto quando o formato do `id` esta inválido. Retorna `status 422` e um JSON com a mensagem: 
```json
 { "message": "Invalid mongo id" }
```


### 09 - Em qualquer caso de campo não preenchido, vazio ou incompleto:

- O endpoint é acessível através dos caminhos (`/cars`), (`/cars/:id`), (`/motorcycles`), (`/motorcycles/:id`);

- O corpo da requisição que não seguir conforme o orientado, terá um retorno genérico contendo uma mensagem indicando o campo com erro. Exemplo:
```json
// MÉTODO POST /cars
{
  "MODELO DE CARRO": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
- Deve-se retornar um JSON com as seguintes chaves: 
```json
{
    "message": "Cars validation failed: model: Path `model` is required."
}
```

<br>
<br>

  # [Outros Projetos](https://portfolio-lcsrbr.vercel.app/projects)
