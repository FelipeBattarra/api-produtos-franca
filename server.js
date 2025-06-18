// 1. Importação dos pacotes necessários
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const mongoose = require('mongoose');

// 2. Importação das rotas
const produtoRoutes = require('./routes/produtoRoutes');

// 3. Inicialização do aplicativo Express
const app = express();
const PORT = process.env.PORT || 3000; // Define a porta do servidor

// 4. Middlewares
app.use(express.json()); // Permite que o Express entenda JSON no corpo das requisições

// 5. Conexão com o Banco de Dados MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
})
.then(() => {
  console.log('Conectado ao MongoDB com sucesso!');
  // Inicia o servidor apenas após a conexão bem-sucedida com o banco
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
})
.catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err.message);
});

// 6. Definição das Rotas da API
// Qualquer requisição que comece com /api/produtos será direcionada para produtoRoutes
app.use('/api/produtos', produtoRoutes);

// Rota raiz para teste
app.get('/', (req, res) => {
    res.send('API de Produtos está no ar!');
});
