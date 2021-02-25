// service dépendencies
const repositories = require("../repositories/index"),
  bcrypt = require("bcrypt");

// services
const user_service = require("./user"),
  bcrypt_service = require("./bcrypt"),
  book_service = require("./book"),
  booking_service = require("./booking");

// create a services object for map all the services
const services = {
  user: user_service(repositories),
  book: book_service(repositories),
  booking: booking_service(repositories),
  cryptPassword: bcrypt_service(bcrypt),
};

// export our service object
module.exports = services;
