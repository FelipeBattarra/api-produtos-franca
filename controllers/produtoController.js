const Produto = require('../models/Produto');
const mongoose = require('mongoose');

// Função para LISTAR TODOS os produtos
exports.listarTodos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
  }
};

// Função para LISTAR UM produto por ID ou Nome
exports.listarUm = async (req, res) => {
  try {
    const { identificador } = req.params;
    let produto;

    // Verifica se o identificador é um ID válido do MongoDB
    if (mongoose.Types.ObjectId.isValid(identificador)) {
        produto = await Produto.findById(identificador);
    }
    
    // Se não encontrou pelo ID (ou se não era um ID válido), busca pelo nome
    if (!produto) {
        // Usamos uma expressão regular para fazer a busca 'case-insensitive' (não diferencia maiúsculas de minúsculas)
        produto = await Produto.findOne({ nome: { $regex: new RegExp(`^${identificador}$`, 'i') } });
    }

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o produto', error: error.message });
  }
};

// Função para CADASTRAR um novo produto
exports.cadastrar = async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    const produtoSalvo = await novoProduto.save();
    res.status(201).json({ message: 'Produto cadastrado com sucesso!', produto: produtoSalvo });
  } catch (error) {
    // Tratamento de erros de validação do Mongoose
    if (error.name === 'ValidationError') {
        let errors = {};
        Object.keys(error.errors).forEach((key) => {
            errors[key] = error.errors[key].message;
        });
        return res.status(400).json({ message: 'Erro de validação', errors });
    }
    res.status(500).json({ message: 'Erro ao cadastrar produto', error: error.message });
  }
};

// Função para ATUALIZAR um produto
exports.atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const produtoAtualizado = await Produto.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    
    if (!produtoAtualizado) {
      return res.status(404).json({ message: 'Produto não encontrado para atualização.' });
    }
    
    res.status(200).json({ message: 'Produto atualizado com sucesso!', produto: produtoAtualizado });
  } catch (error) {
     if (error.name === 'ValidationError') {
        let errors = {};
        Object.keys(error.errors).forEach((key) => {
            errors[key] = error.errors[key].message;
        });
        return res.status(400).json({ message: 'Erro de validação', errors });
    }
    res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
  }
};

// Função para DELETAR um produto
exports.deletar = async (req, res) => {
  try {
    const { id } = req.params;
    const produtoDeletado = await Produto.findByIdAndDelete(id);
    
    if (!produtoDeletado) {
      return res.status(404).json({ message: 'Produto não encontrado para exclusão.' });
    }

    res.status(200).json({ message: 'Produto deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto', error: error.message });
  }
};