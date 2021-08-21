require("dotenv").config();

const users = require("./db/index");
const express = require("express");
const app = express();
const port = 3000;

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DB_DB,
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();

app.get("/", (req, res) => {
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
