// Importar as dependências
const session = require('express-session');
const express = require('express');
const app = express();

// Configurar o motor de visualização EJS
app.set('view engine', 'ejs');

// Configurando a pasta estática (public)
app.use(express.static('public'));

// Configurar o tipo JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar a parte de sessão
app.use(session({
  secret: 'login-ifal',
  resave: false,
  saveUninitialized: true
}));

// Usando as rotas
let rotas = require('./rotas');
app.use(rotas);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});