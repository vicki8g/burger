var mysql = require("mysql");
var mysqlConnection = require('./mysqlconn.example.js');

if (process.env.JAWSDB_URL) {
	mysqlConnection = process.env.JAWSDB_URL;
}

// connecting to MySQL
var connection = mysql.createConnection(mysqlConnection);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;