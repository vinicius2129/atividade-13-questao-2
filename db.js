const mysql = require('mysql2'); // LEMBRAR: $ npm install mysql

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: process.env.host, // Endereço do servidor MySQL
    port: process.env.port , // Porta do servidor MySQL
    user: process.env.user, // Nome de usuário do MySQL
    password: process.env.password, // Senha do usuário do MySQL
    database: process.env.database // Nome do banco de dados que deseja se conectar
  });

// Conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});
module.exports = connection;
