## Gerenciamento de Heróis

Este é um projeto de sistema de gerenciamento de heróis desenvolvido em Node.js com Express e PostgreSQL. O objetivo é criar uma API que permita realizar operações CRUD (Create, Read, Update, Delete) para manipular informações sobre heróis, além de oferecer funcionalidades adicionais, como batalhas entre heróis e registro de histórico de batalhas.


## Tecnologias Utilizadas
- Node.js
- Express.js
- PostgreSQL
- Insomnia (para testes de API)

## Configuração
1. Clonando o repositório:
   
   - git clone https://github.com/giobasiliox/desafio-batalhaherois.git

3. Instalando as dependências:

   - npm install


3. Iniciando o servidor:

   - npm run dev

## Rotas
A seguir estão as rotas disponíveis no servidor:

## Heróis
1. GET /:
   - Descrição: Retorna uma mensagem indicando que o servidor backend está rodando com sucesso.
   - Exemplo de uso: GET /

2. POST /heroi:
   - Descrição: Cria um novo herói no banco de dados.
   - Exemplo de uso: POST /heroi

4. GET /herois:
   - Descrição: Retorna todos os heróis cadastrados no banco de dados.
   - Exemplo de uso: GET /herois

5. GET /heroi/:id:
   - Descrição: Retorna um herói específico pelo ID.
   - Exemplo de uso: GET /heroi/1

6 .GET /heroi/nome/:nome:
    - Descrição: Pesquisa um herói pelo nome.
    - Exemplo de uso: GET /heroi/nome/Harry Potter

7. PUT /heroi/:id:
   - Descrição: Atualiza as informações de um herói existente pelo ID.
   - Exemplo de uso: PUT /heroi/1

8. DELETE /heroi/:id:
   - Descrição: Exclui um herói existente pelo ID.
   - Exemplo de uso: DELETE /heroi/1
  
## Batalhas

1. GET /batalha/:id1/:id2:
   - Descrição: Simula uma batalha entre dois heróis com os IDs fornecidos.
   - Exemplo de uso: GET /batalha/1/2

2. GET /batalhas:
   - Descrição: Retorna o histórico de todas as batalhas registradas.
   - Exemplo de uso: GET /batalhas

3. GET /batalhas/:nome:
    - Descrição: Retorna o histórico de batalhas de um herói específico pelo nome.
    - Exemplo de uso: GET /batalhas/Supergirl


## Autor

[Giovana Basílio](https://github.com/giobasiliox)

