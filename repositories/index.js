// Repositories dépendencies
const models = require("../db/models/index");

// Repositories
const user_repository = require("./user"),
  book_repository = require("./book");

// create a repositories object for map all the repositories
const repositories = {
  user: user_repository(models),
  book: book_repository(models),
};

// export our repositories object
module.exports = repositories;
