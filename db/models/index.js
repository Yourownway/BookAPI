// models dépendency
const db = require("../config");

// models
const User = require("./user"),
  Book = require("./book");
// create a object models for map all the models
const models = {
  user: new User(db),
  book: new Book(db),
};

// export our model object
module.exports = models;
