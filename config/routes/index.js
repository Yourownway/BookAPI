module.exports = (express, controllers) => {
  const user_route = require("./user"),
    book_route = require("./book"),
    booking_route = require("./booking");

  const routes = [
    user_route(express, controllers),
    book_route(express, controllers),
    booking_route(express, controllers),
  ];

  return routes;
};
