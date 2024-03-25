

// Modelo de usuários | por enquanto sem banco de dados
const users = [
  { nome: 'exemplo', email: 'usuario1@example.com', password: 'senha1' },
];

function adicionarUsuario(usuario) {
  users.push(usuario);
}

function acharUsuario(email, senha) {
  return users.find(user => user.email === email && user.password === senha);
}

module.exports = {
  adicionarUsuario,
  acharUsuario
};