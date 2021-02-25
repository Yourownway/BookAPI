// server dépendencies
const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  cors = require("cors"),
  cookieParser = require("cookie-parser");

// server routes/controllers
const controllers = require("../controllers/index"),
  routes = require("./routes/index");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(routes(express, controllers));
module.exports = app;
