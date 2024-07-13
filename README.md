Aqui está um exemplo de README para o frontend do seu projeto em React:

---

# Star Wars Favorites Frontend

## Descrição

Este projeto é a interface de usuário para gerenciar itens favoritos do universo de Star Wars. Ele consome dados da API interna e da [SWAPI](https://swapi.dev/), permitindo ao usuário listar filmes e marcar como favoritos.

## Para que serve

Esta aplicação permite aos usuários visualizar e gerenciar seus itens favoritos de Star Wars. Os usuários podem ver uma lista de filmes, marcar/desmarcar filmes como favoritos e ver quais filmes já foram favoritados.

## O que foi usado

- **React** - Biblioteca JavaScript para construir interfaces de usuário
- **Material UI** - Biblioteca de componentes de interface para React
- **Axios** - Cliente HTTP baseado em promessas para o navegador e node.js
- **React Router** - Biblioteca para roteamento em React
- **Tailwind CSS** - Framework utilitário de CSS para estilização

## Requisitos

- Node.js instalado na máquina
- Docker instalado na máquina (para rodar via Docker)
- Porta 3000 disponível para o frontend

## Como usar no Docker

### Passo 1: Build da imagem Docker

No diretório raiz do projeto, execute o seguinte comando para construir a imagem Docker:

```sh
docker build -t starwars-favorites-frontend .
```

### Passo 2: Executar o contêiner

Após a imagem ser construída, execute o seguinte comando para iniciar um contêiner:

```sh
docker run -d -p 3000:3000 starwars-favorites-frontend
```

Este comando irá iniciar o contêiner em segundo plano e mapear a porta 3000 do contêiner para a porta 3000 do host.

### Passo 3: Verificar o funcionamento

A aplicação estará disponível em `http://localhost:3000`. Você pode acessar a interface de usuário e interagir com os dados.

## Como usar localmente

### Passo 1: Clonar o repositório

Clone o repositório do projeto para sua máquina local:

```sh
git clone https://github.com/ViniciusCTeixeira/PUC_MVP_SWApi_Favoritos_Front
```

### Passo 2: Instalar as dependências

Navegue até o diretório do projeto e instale as dependências necessárias:

```sh
cd starwars-favorites-frontend
npm install
```

### Passo 3: Iniciar o servidor de desenvolvimento

Inicie o servidor de desenvolvimento:

```sh
npm start
```

### Passo 4: Verificar o funcionamento

A aplicação estará disponível em `http://localhost:3000`. Você pode acessar a interface de usuário e interagir com os dados.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
starwars-favorites-frontend/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── FavoritesPage.js
│   │   └── ...
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .env
├── package.json
└── README.md
```

## Endpoints da API

- **GET /favorites** - Lista todos os favoritos
- **POST /favorites** - Adiciona um novo favorito
- **DELETE /favorites/:id** - Remove um favorito

## Como contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e commit (`git commit -m 'Adicionar nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT.

---

Espero que isso ajude! Se precisar de mais alguma coisa, estarei à disposição.