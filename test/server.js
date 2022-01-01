const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("Start Server : localhost:3000");
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("index.html");
});

app.get("/about", function (req, res) {
  res.render("about.html");
});

var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "csjun",
  password: "72339900",
  database: "outstargram",
});

app.get("/db", function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;

    connection.query("select * from posts", function (error, results, fields) {
      res.send(JSON.stringify(results));
      console.log("results", results);
      connection.release();

      if (error) throw error;
    });
  });
});
