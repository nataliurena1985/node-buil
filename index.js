const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("hola mundo");

app.listen(4000, () => { console.log("corriendo en el puerto 4000")});