// models dépendency
const db = require("../config");

// models
const User = require("./user"),
  Book = require("./book"),
  Booking = require("./booking"),
  WishList = require("./wishList");

// create a object models for map all the models
const models = {
  user: new User(db),
  book: new Book(db),
  booking: new Booking(db),
  wishList: new WishList(db),
};

// export our model object
module.exports = models;
