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

        if(nome === '' || nivel === '' || hp === '' || ataque === '' || defesa === '' || poder === ''   ){
            return res.status(400).send({ mensagem: 'Os campos não podem estar vazios. Escreva novamente corretamente.' });
        }else{
            await pool.query(`INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ($1, $2, $3, $4, $5, $6)`, [nome, nivel, hp, ataque, defesa, poder]);
            res.status(201).send({ mensagem: 'Herói cadastrado com sucesso!' });
        }
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
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Herói não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar herói:', error);
        if (!res.headersSent) {
            res.status(500).send('Erro ao buscar herói');
        }
    }
});

app.get('/heroi/nome/:nome', async (req, res) => {
    try {
        const { nome } = req.params;
        const result = await pool.query('SELECT * FROM herois WHERE nome = $1', [nome]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: 'Herói não encontrado' });
        } else {
            res.json(result.rows);
            console.log('Resultados da consulta:', result.rows);

        }
    } catch (error) {
        console.error('Erro ao obter herói por nome:', error);
        res.status(500).send('Erro ao obter herói por nome');
    }
});


app.put('/heroi/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, nivel, hp, ataque, defesa, poder } = req.body;

        if(nome === '' || nivel === '' || hp === '' || ataque === '' || defesa === '' || poder === ''   ){
            return res.status(400).send({ mensagem: 'Os campos não podem estar vazios. Escreva novamente corretamente.' });
        }else{
        await pool.query('UPDATE herois SET nome = $1, nivel = $2, hp = $3, ataque = $4, defesa = $5, poder = $6 WHERE id = $7', [nome, nivel, hp, ataque, defesa, poder, id]);
        res.status(200).send({ mensagem: 'Herói atualizado com sucesso!' });}
    } catch (error) {
        console.error('Erro ao atualizar herói:', error);
        res.status(500).send('Erro ao atualizar herói');
    }
} );

app.delete('/heroi/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query('DELETE FROM herois WHERE id = $1', [id]);
        res.status(200).send({ mensagem: 'Herói deletado com sucesso!' });
    } catch (error) {
        console.error('Erro ao deletar herói:', error);
        res.status(500).send('Erro ao deletar herói');
    }
});

//batalha

app.get('/batalha/:id1/:id2', async (req, res) => {
    try {
        const id1= await pool.query('SELECT * FROM herois WHERE id = $1', [req.params.id1]);
        const id2= await pool.query('SELECT * FROM herois WHERE id = $1', [req.params.id2]);

        if (id1.rows.length < 1 || id2.rows.length < 1) {
            res.status(404).send('Herói não encontrado');
            return;
        }

        const heroi1 = id1.rows[0];
        const heroi2 = id2.rows[0];


        const dano1 = heroi1.ataque - heroi2.defesa;
        const dano2 = heroi2.ataque - heroi1.defesa;


        if (dano1 > dano2) {
            // Herói 1 vence
            res.json({
                mensagem: `${heroi1.nome} venceu a batalha com dano de ${dano1}!, ${heroi2.nome} perdeu a batalha com um dano de ${dano2}!`,
                vencedor: heroi1,
            });
            await pool.query( 'INSERT INTO batalha (id_heroi1, id_heroi2, vencedor) VALUES ($1, $2, $3)', [heroi1.id, heroi2.id, heroi1.id]);
        } else if (dano2 > dano1) {
            // Herói 2 vence
            res.json({
                mensagem: `${heroi2.nome} venceu a batalha com dano de ${dano2}!, ${heroi1.nome} perdeu a batalha!`,
                vencedor: heroi2,
            });
            await pool.query( 'INSERT INTO batalha (id_heroi1, id_heroi2, vencedor) VALUES ($1, $2, $3)', [heroi1.id, heroi2.id, heroi2.id]);
        } else {
                // Empate total
                res.json({
                    mensagem: 'A batalha terminou em um empate total!',
                    vencedor: null,
                });
            }
    } catch (error) {
        console.error('Erro ao batalhar:', error);
        res.status(500).send('Erro ao batalhar');
    }
});

app.get('/batalhas', async (req, res) => {
    try {
        const result = await pool.query('SELECT batalha.id as numero_batalha, batalha.id_heroi1 as heroi1, batalha.id_heroi2 as heroi2, herois.* FROM batalha INNER JOIN herois ON batalha.vencedor = herois.id');
        res.json({
            total: result.rowCount,
            batalhas: result.rows,
        });
    } catch (error) {
        console.error('Erro ao buscar batalhas:', error);
        res.status(500).send('Erro ao buscar batalhas');
    }
});



app.get('/batalhas/:nome', async (req, res) => {
    const { nome } = req.params;
    try {
        const result = await pool.query('SELECT * FROM herois WHERE nome = $1', [nome]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: 'Herói não encontrado' });
        } else {
            const heroi = result.rows[0];
            
            const batalhas = await pool.query('SELECT batalha.id as numero_batalha, batalha.id_heroi1 as heroi1, batalha.id_heroi2 as heroi2, herois.* FROM batalha INNER JOIN herois ON batalha.vencedor = herois.id WHERE batalha.id_heroi1 = $1 OR batalha.id_heroi2 = $1', [heroi.id]);
            
            
            const batalhasFormatadas = batalhas.rows.map(batalha => {
                return {
                    id: batalha.numero_batalha,
                    heroi_1: {
                        nome: batalha.nome,
                        nivel: batalha.nivel,
                        hp: batalha.hp,
                        ataque: batalha.ataque,
                        defesa: batalha.defesa,
                        poder: batalha.poder
                    },
                    heroi_2: {
                        nome: batalha.nome,
                        nivel: batalha.nivel,
                        hp: batalha.hp,
                        ataque: batalha.ataque,
                        defesa: batalha.defesa,
                        poder: batalha.poder
                    },
                    vencedor: batalha.nome
                };
            });

            res.json({
                total: batalhas.rowCount,
                batalhas: batalhasFormatadas,
            });

        }
    } catch (error) {
        console.error('Erro ao obter herói por nome:', error);
        res.status(500).send('Erro ao obter herói por nome');
    }
});
















app.listen(PORT, () => {
    console.log('Servidor rodando na porta ⚔🚀');
});