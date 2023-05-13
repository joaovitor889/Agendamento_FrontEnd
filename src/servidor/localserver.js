const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const app = express();
const port = 4000;

app.use(bodyParser.json());

// Tratando erro de cors
const cors = require('cors');
app.use(cors());

// Adicione o middleware body-parser para processar os dados do corpo da requisição
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Defina a rota GET para enviar o arquivo JSON
const filePath = path.join(__dirname, '../proprietarios/criar.json');

app.get('/proprietarios/criar', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.put('/proprietarios/criar', (req, res) => {
  const { nome, telefone, cpf, email, senha, confSenha } = req.body;
  const formData = {
    nome,
    telefone,
    cpf,
    email,
    senha,
    confSenha
  };

  fs.writeFile(filePath, JSON.stringify(formData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar o arquivo de dados.' });
      return;
    }
    res.json({ message: 'Dados atualizados com sucesso!' });
  });
});

app.post('/proprietarios/criar', (req, res) => {
  const { nome, sobrenome, cpf, telefone, email, senha, confSenha, termos } = req.body;

  // Lê o conteúdo do arquivo criar.json
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }

    let existingData = JSON.parse(data);

    // Verifica se já existe um objeto com telefone, CPF ou e-mail igual ao informado
    const duplicateData = _.find(existingData, (obj) => {
      return obj.telefone === telefone || obj.cpf === cpf || obj.email === email;
    });

    if (duplicateData) {
      res.status(400).json({ error: 'Telefone, CPF ou e-mail já cadastrado.' });
      return;
    }

    // Verifica se o dado lido é um array, caso contrário, converte-o para um array vazio
    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    // Adiciona o novo objeto no array
    const newFormData = {
      nome,
      sobrenome,
      cpf,
      telefone,
      email,
      senha,
      confSenha
    };
    existingData.push(newFormData);

    // Escreve os dados atualizados no arquivo criar.json
    fs.writeFile(filePath, JSON.stringify(existingData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao escrever no arquivo de dados.' });
        return;
      }
      res.json({ message: 'Dados cadastrados com sucesso!' });
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
