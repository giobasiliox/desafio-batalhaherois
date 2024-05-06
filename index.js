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

app.get('/herois', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM herois');
        res.json({
            total: result.rowCount,
            heróis: result.rows,
        });
    } catch (error) {
        console.error('Erro ao buscar heróis:', error);
        res.status(500).send('Erro ao buscar heróis');
    }
});

app.get('/heroi/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query('SELECT * FROM herois WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar herói:', error);
        res.status(500).send('Erro ao buscar herói');
    }
});






app.listen(PORT, () => {
    console.log('Servidor rodando na porta ⚔🚀');
});