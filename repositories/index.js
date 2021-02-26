// Repositories dépendencies
const models = require("../db/models/index");

// Repositories
const user_repository = require("./user"),
  book_repository = require("./book"),
  booking_repository = require("./booking"),
  wishList_repository = require("./wishList"),
  genre_repository = require("./genre"),
  categorie_repository = require("./categorie");
// create a repositories object for map all the repositories
const repositories = {
  user: user_repository(models),
  book: book_repository(models),
  booking: booking_repository(models),
  wishList: wishList_repository(models),
  categorie: categorie_repository(models),
  genre: genre_repository(models),
};

// export our repositories object
module.exports = repositories;
