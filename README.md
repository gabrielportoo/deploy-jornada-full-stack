# Clone Spotify - Projeto Fullstack

Este é um projeto Fullstack inspirado na interface e funcionalidades principais do Spotify. Desenvolvido como parte do curso **Jornada FullStack da Hashtag Treinamentos**, o projeto simula uma plataforma de streaming de músicas, incluindo artistas, álbuns e reprodutor de áudio.

---

## Funcionalidades

- Listagem de artistas populares com imagens e nomes.
- Listagem de músicas populares com capa, título, artista e duração.
- Página de perfil do artista com suas músicas.
- Player de música funcional:
  - Reproduz uma música específica de cada artista ao clicar no botão "play".
  - Todas as músicas de um mesmo artista compartilham o mesmo áudio.
  - Ao avançar ou retroceder no player, uma nova música aleatória do mesmo artista é exibida (com capa e nome diferentes), mas o áudio permanece o mesmo.
- Requisições dinâmicas à API com dados armazenados no MongoDB.
- Deploy completo com integração entre front-end e back-end.

---

## Sobre o comportamento do Player

O player simula uma reprodução musical funcional. Ao clicar no botão de play em uma música:

- O sistema toca **um único arquivo de áudio por artista**, padronizando a música tocada.
- Mesmo que o usuário avance ou retorne as faixas de um artista, o sistema **mantém a reprodução do mesmo áudio**, mas **exibe diferentes capas e nomes de músicas** daquele artista, escolhidos aleatoriamente.

Esse comportamento foi projetado para fins de simplificação e demonstração da lógica de controle de estado no React.

---

## Tecnologias Utilizadas

### Front-end

- **React** (com Vite)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Fetch API**

### Back-end

- **Node.js**
- **Express.js**
- **MongoDB Atlas** (Banco de Dados NoSQL)

### Outras tecnologias

- **Render.com** para deploy
- **Vite** para build do front-end
- **MongoClient** (native driver) para conexão com o banco

---

## Como rodar localmente

1. **Clone o repositório**:
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo

2. Instale as dependências:
   Copiar
   Editar
   npm install --prefix back-end
   npm install --prefix front-end

3. Execute em modo de desenvolvimento:
   Em um terminal:
   npm start --prefix back-end
   Em outro terminal:
   npm run dev --prefix front-end

4. Acesse o front-end:
   http://localhost:5173

5. Acesse a API:
   http://localhost:3001/api

---

## Deploy

O projeto está publicado e acessível em:
https://deploy-jornada-full-stack-hcys.onrender.com

Com o mesmo link acima do deploy, consegue ter acesso também a API,
acrescentando /api/<artists> ou <songs>

---

## Banco de Dados

A base de dados MongoDB contém coleções:
artists: com nome, imagem do artista e banner do artista.

songs: com nome, artista, imagem, duração da música e audio.
