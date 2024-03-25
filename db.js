// Banco de Dados
const mysql = require('mysql2');

let connect = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});

module.exports = connect;