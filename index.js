const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({ mensagem: 'Servidor backend rodando com sucesso ⚔🦸‍♀️🚀' });
});

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'desafio_batalha',
    password: 'ds564', //mudar a senha para ds564 ou 811867
    port: 7007, //mudar a porta para 7007 ou 5432   
});








app.listen(PORT, () => {
    console.log('Servidor rodando na porta ⚔🚀');
});