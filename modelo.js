// Modelo de usuários | por enquanto sem banco de dados
const bd = require('./db.js')

function adicionarUsuario(usuario) {
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  bd.query(query, [usuario.email, usuario.password], (err, result) => {
      if (err) {
          console.error('Erro ao registrar usuário:', err);
          return;
      }
  });
}

function acharUsuario(email, senha, callback) {
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  bd.query(query, [email, senha], (err, results) => {
      if (err) {
          console.error('Erro ao encontrar usuário:', err);
          callback(err, null);
          return;
      }
      callback(null, results[0]); // Retorna apenas o primeiro usuário encontrado
  });
}

module.exports = {
  adicionarUsuario,
  acharUsuario
};
