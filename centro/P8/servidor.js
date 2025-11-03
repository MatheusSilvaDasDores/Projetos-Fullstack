const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 80;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const usuarios = [];


app.get('/', (req, res) => {
  res.redirect('/cadastra');
});


app.get('/cadastra', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Cadastro.html'));
});

app.post('/cadastra', (req, res) => {
  const { usuario, senha } = req.body;
  usuarios.push({ usuario, senha });
  res.render('resposta', { mensagem: `Usuário ${usuario} cadastrado com sucesso!`, usuarios });
});


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Login.html'));
});

app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;
  const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (user) {
    res.render('resposta', { mensagem: `Login realizado com sucesso! Bem-vindo, ${usuario}.`, usuarios });
  } else {
    res.render('resposta', { mensagem: 'Usuário ou senha incorretos.', usuarios });
  }
});


app.get('/resposta', (req, res) => {
  res.render('resposta', { mensagem: 'Página acessada diretamente.', usuarios: [] });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
