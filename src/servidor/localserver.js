const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

const path = require('path');
const filePath = path.join(__dirname, '../src/api/dados.json');

app.get('/api/dados', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }
    res.setHeader('Content-Type', 'application/json'); // Definir o cabeçalho Content-Type para 'application/json'
    res.send(data); // Enviar os dados lidos do arquivo diretamente como resposta
  });
});

app.post('/api/dados', (req, res) => {
  const { tipo, dados } = req.body;
  let jsonFile = require('../api/dados.json'); // Carrega o arquivo JSON

  const novoCadastro = dados;

  if (jsonFile.hasOwnProperty(tipo)) {
    const tipoCadastro = jsonFile[tipo];
    const duplicado = tipoCadastro.some((item) =>
      item.email === novoCadastro.email ||
      item.cpf === novoCadastro.cpf ||
      item.telefone === novoCadastro.telefone
    );

    if (duplicado) {
      res.status(400).json({ error: 'Os dados já estão cadastrados.' });
      return;
    }

    tipoCadastro.push(novoCadastro);
  } else {
    res.status(400).json({ error: 'Tipo de cadastro inválido.' });
    return;
  }

  fs.writeFile(filePath, JSON.stringify(jsonFile), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao escrever no arquivo de dados.' });
      return;
    }
    res.json({ message: 'Dados cadastrados com sucesso!' });
  });
});

app.put('/api/dados', (req, res) => {
  const { nome, sobrenome, cpf, telefone, email, senha, confSenha, termos } = req.body;
  const formData = {
    nome,
    sobrenome,
    cpf,
    telefone,
    email,
    senha,
    confSenha,
    termos,
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

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});