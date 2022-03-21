const mysql = require('mysql');
const dbConn = mysql.createConnection(
  {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'theo'
  });

dbConn.connect(
  function (error) {
    if (error) throw error;
    console.log("Database Connected!");
  });
module.exports = dbConn;