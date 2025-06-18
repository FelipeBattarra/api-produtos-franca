const express = require('express');
const router = express.Router();

// Exemplo de rota GET
router.get('/', (req, res) => {
  res.json({ mensagem: 'Lista de produtos' });
});

// Aqui você pode adicionar POST, PUT, DELETE etc.

module.exports = router;
