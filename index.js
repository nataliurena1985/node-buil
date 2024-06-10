const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crud_contact",
});

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "crud_contact",
// });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("hola mundo");

app.listen(4000, () => {
  console.log("corriendo en el puerto 4000");
});

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { name, email, contact } = req.body;
  const sqlInsert =
    "INSERT INTO crud_contact.contact_db (name,email,contact) VALUES (?,?,?)";

    db.query(sqlInsert,[name,email,contact], (error, result) => {
      if(error){
        console.log(error)
      }
    });


});


app.get("/", (req, res) => {
  //   const sqlInsert =
  //     "INSERT INTO crud_contact.contact_db (name,email,contact) VALUES ('johndoe','johndoe@gmail.com',3123456)";
  //   db.query(sqlInsert, (err, result) => {
  //     console.log("error", err);
  //     console.log("result", result);
  //     res.send("hello express");
  // });
});
