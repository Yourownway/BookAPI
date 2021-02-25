// models dépendency
const db = require("../config");

// models
<<<<<<< HEAD
const User = require("./user");

// create a object models for map all the models
const models = {
  user: new User(db),
=======
const User = require("./user"),
  Book = require("./book"),
  Booking = require("./booking");
// create a object models for map all the models
const models = {
  user: new User(db),
  book: new Book(db),
<<<<<<< HEAD
>>>>>>> origin/Lorris
=======
  booking: new Booking(db),
>>>>>>> origin/Lorris
};

// export our model object
module.exports = models;
