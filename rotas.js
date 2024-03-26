// Utilização de rotas (GET, POST, PUT, DELETE)
const express = require('express');
const router = express.Router();
const controle = require('./controle');

router.get('/', (req, res) => res.redirect('/login'));

// Rota para abrir a página de login
router.get('/login', (req, res) => {
  // Se estiver logado ir para a página inicial, Se não vai para tela de login
  if (req.session.login) {
    return res.redirect('/login/success');
  }
  // Verificar se há uma mensagem de erro na query string
  const errorMessage = req.query.error ? 'Credenciais inválidas! Tente novamente.' : null;
  res.render('login', { error: errorMessage });
});

// Rota para processar o envio dos dados de login
router.post('/login', controle.logarUsuario);

// Rota para a página de sucesso do login
router.get('/login/success', (req, res) => {
  // Se estiver logado continua, Se não volta para tela de login
  if (req.session.login) {
    res.render('login-success');
  } else {
    res.redirect('/login');
  }
});

// Rota para abrir a página de registro de login
router.get('/register', (req, res) => {
  // Se estiver logado continua, Se não volta para tela de login
  if (req.session.login) {
    // Verificar se há uma mensagem de erro na query string
    const errorMessage = req.query.error ? 'Erro ao registrar usuário. Tente novamente.' : null;
    res.render('register', { error: errorMessage });
  }
  else {
    res.redirect('/login');
  }
});

// Rota para processar o envio dos dados de registro
router.post('/register', controle.cadastrarUsuario);

router.post('/sair-da-conta', (req, res) => {
   // Se estiver logado na conta, destruir sessão (deslogar)
  if (req.session.login) {
    return req.session.destroy(() => res.redirect('/login'));
  }
});

module.exports = router;
