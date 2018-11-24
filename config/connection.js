// Set up MySQL connection.
var mysql = require("mysql");

var localconnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

var connection = mysql.createConnection({
  host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ay6rguaa6o4lslp3",
  password: "mjj87zql71qvkhfd",
  database: "td3u1q7btyxx9vum"
});


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;