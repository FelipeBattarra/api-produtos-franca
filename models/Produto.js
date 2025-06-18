// models/Produto.js
// Este arquivo define o "Schema" do nosso produto, ou seja, a estrutura dos dados que vamos salvar no MongoDB.

const mongoose = require('mongoose');

// Criamos o schema usando o construtor do Mongoose
const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'O nome do produto é obrigatório.'], // Campo obrigatório
    trim: true // Remove espaços em branco do início e do fim
  },
  descricao: {
    type: String,
    required: [true, 'A descrição do produto é obrigatória.']
  },
  cor: {
    type: String,
    required: true
  },
  peso: {
    type: Number, // Em gramas, por exemplo
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: [true, 'O preço do produto é obrigatório.'],
    min: [0, 'O preço não pode ser negativo.'] // Validação de valor mínimo
  },
  dataCadastro: {
    type: Date,
    default: Date.now // Define um valor padrão para a data de cadastro
  }
}, {
  // timestamps: true adiciona os campos `createdAt` e `updatedAt` automaticamente
  timestamps: true
});

// Exportamos o modelo. 'Produto' será o nome da coleção no MongoDB (ele será pluralizado para 'produtos')
module.exports = mongoose.model('Produto', produtoSchema);
