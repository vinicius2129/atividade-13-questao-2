// Controle dos modelos existentes
const modelo = require('./modelo');

function logarUsuario(req, res) {
  const { email, password } = req.body;
  // Verificar se o usuário existe no "banco de dados"
  const user = modelo.acharUsuario(email, password);
  if (user) {
      req.session.login = email;
      res.redirect('/login/success'); // Redirecionar para a página de sucesso
  } else {
      res.redirect('/login?error=true'); // Redirecionar de volta para a página de login com mensagem de erro
  }
}

function cadastrarUsuario(req, res) {
  const { name, email, password, confirmPassword } = req.body;
  // Validar os campos obrigatórios
  if (!name || !email || !password || !confirmPassword) {
      return res.redirect('/register?error=Todos os campos são obrigatórios.');
  }
  // Validar o formato do e-mail
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
      return res.redirect('/register?error=E-mail inválido. Tente novamente.');
  }
  // Verificar se a senha e a confirmação de senha são iguais
  if (password !== confirmPassword) {
      return res.redirect('/register?error=As senhas não coincidem. Tente novamente.');
  }
  // Cadastrar o usuário (simulado)
  // Aqui você pode adicionar a lógica para salvar os dados do usuário em um banco de dados
  // Neste exemplo, apenas exibiremos uma mensagem de sucesso
  modelo.adicionarUsuario({ email, password });
  res.redirect('/login');
}

module.exports = {
  logarUsuario,
  cadastrarUsuario
};
