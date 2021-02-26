// service dépendencies
const repositories = require("../repositories/index"),
  nodemailer = require("nodemailer"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");

// services
const user_service = require("./user"),
  mailer_service = require("./mailer"),
  token_service = require("./jwt"),
  bcrypt_service = require("./bcrypt"),
  book_service = require("./book"),
  booking_service = require("./booking");

// create a services object for map all the services
const services = {
  user: user_service(repositories),
  mailer: mailer_service(nodemailer),
  bcrypt: bcrypt_service(bcrypt),
  jwt: token_service(jwt),
  book: book_service(repositories),
  booking: booking_service(repositories),
  cryptPassword: bcrypt_service(bcrypt),
};

// export our service object
module.exports = services;
