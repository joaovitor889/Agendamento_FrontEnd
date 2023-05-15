const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const proprietarios = express();
const authProp = express();

const clientes = express();
const authCli = express();

const funcionarios = express();
const authFunc = express();



const portProp = 4000;
const portAuthProp = 4001;

const portCli = 5000;
const portAuthCli = 5002;

const portFunc = 5001;
const portAuthFunc = 5004;

proprietarios.use(bodyParser.json());
authProp.use(bodyParser.json());

clientes.use(bodyParser.json());
authCli.use(bodyParser.json());

authFunc.use(bodyParser.json());
funcionarios.use(bodyParser.json());

// Tratando erro de cors
const cors = require('cors');

proprietarios.use(cors());
authProp.use(cors());

clientes.use(cors());
authCli.use(cors());

funcionarios.use(cors());
authFunc.use(cors());

// Adicione o middleware body-parser para processar os dados do corpo da requisição
proprietarios.use(bodyParser.urlencoded({ extended: false }));
proprietarios.use(bodyParser.json());

authProp.use(bodyParser.urlencoded({ extended: false }));
authProp.use(bodyParser.json());

clientes.use(bodyParser.urlencoded({ extended: false }));
clientes.use(bodyParser.json());

authCli.use(bodyParser.urlencoded({ extended: false }));
authCli.use(bodyParser.json());

funcionarios.use(bodyParser.urlencoded({ extended: false }));
funcionarios.use(bodyParser.json());

authFunc.use(bodyParser.urlencoded({ extended: false }));
authFunc.use(bodyParser.json());

// Defina a rota GET para enviar o arquivo JSON
const filePathProprietarios = path.join(__dirname, '../proprietarios/criar.json');
const filePathAuthProp = path.join(__dirname, '../auth/proprietario.json');

const filePathClientes = path.join(__dirname, '../clientes/criar.json');
const filePathAuthCliente = path.join(__dirname, '../auth/cliente.json');

const filePathFuncionarios = path.join(__dirname, '../funcionarios/criar.json');
const filePathAuthFuncionario = path.join(__dirname, '../auth/funcionario.json');

proprietarios.get('/proprietarios/criar', (req, res) => {
  fs.readFile(filePathProprietarios, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

authProp.get('/auth/proprietario', (req, res) => {
  fs.readFile(filePathAuthProp, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

authProp.put('/auth/proprietario', (req, res) => {
  fs.writeFile(filePathAuthProp, JSON.stringify([]), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir os dados de autenticação de proprietários.' });
      return;
    }
    res.json({ message: 'Dados de autenticação de proprietários excluídos com sucesso!' });
  });
});

authProp.delete('/auth/proprietario', (req, res) => {
  fs.writeFile(filePathAuthProp, JSON.stringify([]), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir os dados de autenticação de proprietários.' });
      return;
    }
    res.json({ message: 'Dados de autenticação de proprietários excluídos com sucesso!' });
  });
});

authProp.post('/auth/proprietario', (req, res) => {
  const { token, email, senha } = req.body;

  // Lê o conteúdo do arquivo proprietario.json
  fs.readFile(filePathAuthProp, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de autenticação de proprietários.' });
      return;
    }

    let existingData = JSON.parse(data);

    // Verifica se o dado lido é um array, caso contrário, converte-o para um array vazio
    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    // Adiciona os novos dados no array
    const newAuthData = {
      token,
      email,
      senha
    };
    existingData.push(newAuthData);

    // Escreve os dados atualizados no arquivo proprietario.json
    fs.writeFile(filePathAuthProp, JSON.stringify(existingData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao escrever no arquivo de autenticação de proprietários.' });
        return;
      }
      res.json({ message: 'Dados de autenticação de proprietários adicionados com sucesso!' });
    });
  });
});

clientes.get('/clientes/criar', (req, res) => {
  fs.readFile(filePathClientes, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

authCli.get('/auth/cliente', (req, res) => {
  fs.readFile(filePathAuthCliente, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

authCli.put('/auth/cliente', (req, res) => {
  fs.writeFile(filePathAuthCliente, JSON.stringify([]), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir os dados de autenticação de clientes.' });
      return;
    }
    res.json({ message: 'Dados de autenticação de clientes excluídos com sucesso!' });
  });
});

authCli.delete('/auth/cliente', (req, res) => {
  fs.writeFile(filePathAuthCliente, JSON.stringify([]), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir os dados de autenticação de proprietários.' });
      return;
    }
    res.json({ message: 'Dados de autenticação de proprietários excluídos com sucesso!' });
  });
});

authCli.post('/auth/cliente', (req, res) => {
  const { token, email, senha } = req.body;

  // Lê o conteúdo do arquivo proprietario.json
  fs.readFile(filePathAuthCliente, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de autenticação de proprietários.' });
      return;
    }

    let existingData = JSON.parse(data);

    // Verifica se o dado lido é um array, caso contrário, converte-o para um array vazio
    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    // Adiciona os novos dados no array
    const newAuthData = {
      token,
      email,
      senha
    };
    existingData.push(newAuthData);

    // Escreve os dados atualizados no arquivo proprietario.json
    fs.writeFile(filePathAuthCliente, JSON.stringify(existingData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao escrever no arquivo de autenticação de proprietários.' });
        return;
      }
      res.json({ message: 'Dados de autenticação de proprietários adicionados com sucesso!' });
    });
  });
});

funcionarios.get('/funcionarios/criar', (req, res) => {
  fs.readFile(filePathFuncionarios, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

authFunc.get('/auth/funcionario', (req, res) => {
  fs.readFile(filePathAuthFuncionario, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

proprietarios.put('/proprietarios/criar', (req, res) => {
  const { nome, telefone, cpf, email, senha, confSenha } = req.body;
  const formData = {
    nome,
    telefone,
    cpf,
    email,
    senha,
    confSenha
  };

  fs.writeFile(filePathProprietarios, JSON.stringify(formData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar o arquivo de dados.' });
      return;
    }
    res.json({ message: 'Dados atualizados com sucesso!' });
  });
});

clientes.put('/clientes/criar/:email', (req, res) => {
  const { email } = req.params;
  const { nome, sobrenome, cpf, telefone } = req.body;

  fs.readFile(filePathClientes, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }

    let existingData = JSON.parse(data);

    const updatedData = existingData.map((item) => {
      if (item.email === email) {
        return {
          ...item,
          nome,
          sobrenome,
          cpf,
          telefone,
          email,
        };
      }
      return item;
    });

    fs.writeFile(filePathClientes, JSON.stringify(updatedData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar o arquivo de dados.' });
        return;
      }
      res.json({ message: 'Dados atualizados com sucesso!' });
    });
  });
});



proprietarios.post('/proprietarios/criar', (req, res) => {
  const { nome, sobrenome, cpf, telefone, email, senha, confSenha } = req.body;

  // Lê o conteúdo do arquivo criar.json
  fs.readFile(filePathProprietarios, 'utf8', (err, data) => {
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
    fs.writeFile(filePathProprietarios, JSON.stringify(existingData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao escrever no arquivo de dados.' });
        return;
      }
      res.json({ message: 'Dados cadastrados com sucesso!' });
    });
  });
});


authCli.post('/auth/cliente', (req, res) => {
  const { token, email, senha } = req.body;

  // Lê o conteúdo do arquivo criar.json
  fs.readFile(filePathAuthCliente, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de dados.' });
      return;
    }

    let existingData = JSON.parse(data);

    // Verifica se o dado lido é um array, caso contrário, converte-o para um array vazio
    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    // Adiciona o novo objeto no array
    const newFormData = {
      token, 
      email,
      senha
    };
    existingData.push(newFormData);

    // Escreve os dados atualizados no arquivo criar.json
    fs.writeFile(filePathProprietarios, JSON.stringify(existingData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao escrever no arquivo de dados.' });
        return;
      }
      res.json({ message: 'Dados cadastrados com sucesso!' });
    });
  });
});


clientes.post('/clientes/criar', (req, res) => {
  const { nome, sobrenome, cpf, telefone, email, senha, confSenha } = req.body;

  // Lê o conteúdo do arquivo criar.json
  fs.readFile(filePathClientes, 'utf8', (err, data) => {
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
    fs.writeFile(filePathClientes, JSON.stringify(existingData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao escrever no arquivo de dados.' });
        return;
      }
      res.json({ message: 'Dados cadastrados com sucesso!' });
    });
  });
});



proprietarios.listen(portProp, () => {
  console.log(`Servidor Proprietarios está rodando na porta ${portProp}`);
});

authProp.listen(portAuthProp, () => {
  console.log(`Servidor AuthProp está rodando na porta ${portAuthProp}`);
});

clientes.listen(portCli, () => {
  console.log(`Servidor Clientes está rodando na porta ${portCli}`);
});

authCli.listen(portAuthCli, () => {
  console.log(`Servidor AuthCli está rodando na porta ${portAuthCli}`);
});