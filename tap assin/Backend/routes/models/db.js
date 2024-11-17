const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "contact_management",
});

module.exports = db;
