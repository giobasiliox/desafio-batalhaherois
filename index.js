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

app.post('/heroi', async (req, res) => {
    try {
        const { nome, nivel, hp, ataque, defesa, poder } = req.body;

        await pool.query(`INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ($1, $2, $3, $4, $5, $6)`, [nome, nivel, hp, ataque, defesa, poder]);
        res.status(201).send({ mensagem: 'Herói cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao adicionar heroi:', error);
        res.status(500).send('Erro ao adicionar herói');
    }
});







app.listen(PORT, () => {
    console.log('Servidor rodando na porta ⚔🚀');
});