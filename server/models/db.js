const mysql = require('mysql');
const dbConn = mysql.createConnection(
  {  host     : 'localhost', 
  user     : 'user', 
  password : 'password', 
  database : 'web'});

  dbConn.connect(
    function(err) { 
       if (err) throw err;
       console.log("Database Connected!");
      });
module.exports = dbConn;