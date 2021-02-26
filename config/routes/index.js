module.exports = (express, controllers) => {
  const user_route = require("./user"),
    book_route = require("./book"),
    booking_route = require("./booking"),
    wishList_route = require("./wishList"),
    categorie_route = require("./categorie"),
    genre_route = require("./genre"),
    middlewares = require("../../middlewares/index");

  const routes = [
    user_route(express, middlewares, controllers),
    book_route(express, controllers),
    booking_route(express, middlewares, controllers),
    booking_route(express, controllers),
    wishList_route(express, middlewares, controllers),
    categorie_route(express, controllers),
    genre_route(express, controllers),
  ];

  return routes;
};
