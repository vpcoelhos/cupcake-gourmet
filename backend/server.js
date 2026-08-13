const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Libera acessos à API
app.use(cors());
app.use(express.json());

// Conexão com o Banco de Dados do Render (PostgreSQL)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Exigido pelo Render para conexões SSL seguras
});

// Rota 1: Teste inicial no navegador
app.get('/', (req, res) => {
    res.json({ mensagem: 'API Cupcake Gourmet no ar!' });
});

// Rota 2: Buscar a lista de Cupcakes na vitrine
app.get('/cupcakes', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM cupcakes');
        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar cupcakes', detalhe: erro.message });
    }
});

// Rota 3: Cadastrar novo usuário
app.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const novoUsuario = await pool.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email',
            [nome, email, senha]
        );
        res.status(201).json(novoUsuario.rows[0]);
    } catch (erro) {
        res.status(400).json({ erro: 'Erro ao cadastrar usuário', detalhe: erro.message });
    }
});

// Rota 4: Criar novo pedido
app.post('/pedidos', async (req, res) => {
    const { usuario_id, valor_total } = req.body;
    try {
        const novoPedido = await pool.query(
            'INSERT INTO pedidos (usuario_id, valor_total) VALUES ($1, $2) RETURNING *',
            [usuario_id, valor_total]
        );
        res.status(201).json(novoPedido.rows[0]);
    } catch (erro) {
        res.status(400).json({ erro: 'Erro ao criar pedido', detalhe: erro.message });
    }
});

// Inicialização da porta dinâmica do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
