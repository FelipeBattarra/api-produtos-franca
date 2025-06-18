const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para LISTAR TODOS os produtos (GET /api/produtos)
router.get('/', produtoController.listarTodos);

// Rota para CADASTRAR um novo produto (POST /api/produtos)
router.post('/', produtoController.cadastrar);

// Rota para LISTAR UM produto pelo ID ou NOME (GET /api/produtos/:identificador)
// O :identificador é um parâmetro dinâmico
router.get('/:identificador', produtoController.listarUm);

// Rota para ATUALIZAR um produto existente pelo ID (PUT /api/produtos/:id)
router.put('/:id', produtoController.atualizar);

// Rota para DELETAR um produto pelo ID (DELETE /api/produtos/:id)
router.delete('/:id', produtoController.deletar);


module.exports = router;