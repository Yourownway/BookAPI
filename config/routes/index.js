const middlewares = require("../../middlewares");

module.exports = (express, controllers) => {
  const user_route = require("./user"),
    book_route = require("./book"),
    booking_route = require("./booking"),
    categorie_route = require("./categorie"),
    genre_route = require("./genre"),
    middlewares = require("../../middlewares/index");

  const routes = [
    user_route(express, middlewares, controllers),
    book_route(express, controllers),
<<<<<<< HEAD
    booking_route(express, middlewares, controllers),
=======
    booking_route(express, controllers),
    categorie_route(express, controllers),
    genre_route(express, controllers),
>>>>>>> Lorris
  ];

  return routes;
};
