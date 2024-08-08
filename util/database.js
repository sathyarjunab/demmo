const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "new-schema",
  password: "Sathyarjun@123",
});

module.exports = pool.promise();
