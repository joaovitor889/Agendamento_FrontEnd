//coloque este arquivo na raiz do projeto e digite node server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const filePath = './src/api/clientes.json';

app.get('/api/clientes', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/clientes', (req, res) => {
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
        res.status(500).json({ error: 'Erro ao escrever no arquivo de dados.' });
        return;
      }
      res.json({ message: 'Dados cadastrados com sucesso!' });
    });
  });
  
  app.put('/api/clientes', (req, res) => {
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