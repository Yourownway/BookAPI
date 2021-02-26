const middlewares = require("../../middlewares");

module.exports = (express, controllers) => {
  const user_route = require("./user"),
    book_route = require("./book"),
    booking_route = require("./booking"),
    middlewares = require("../../middlewares/index");

  const routes = [
    user_route(express, middlewares, controllers),
    book_route(express, controllers),
    booking_route(express, controllers),
  ];

  return routes;
};
