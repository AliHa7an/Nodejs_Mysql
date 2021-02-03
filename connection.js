const mysql = require("mysql");

const mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

mySqlConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected");
});

module.exports = mySqlConnection;
