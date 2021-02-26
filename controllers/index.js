// controllers dépendencies
const services = require("../services/index");

// controllers
const user_controller = require("./user"),
  book_controller = require("./book"),
  booking_controller = require("./booking"),
  genre_controller = require("./genre"),
  categorie_controller = require("./categorie");

// create a controllers object for map all the controllers
const controllers = {
  user: user_controller(services),
  book: book_controller(services),
  booking: booking_controller(services),
  genre: genre_controller(services),
  categorie: categorie_controller(services),
};

// export our controllers object
module.exports = controllers;
