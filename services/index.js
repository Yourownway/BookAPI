// service dépendencies
const repositories = require("../repositories/index"),
  nodemailer = require("nodemailer"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");

// services
const user_service = require("./user"),
<<<<<<< HEAD
  mailer_service = require("./mailer"),
  bcrypt_service = require("./bcrypt"),
  token_service = require("./jwt");
=======
  bcrypt_service = require("./bcrypt"),
<<<<<<< HEAD
  book_service = require("./book");
>>>>>>> origin/Lorris
=======
  book_service = require("./book"),
  booking_service = require("./booking");
>>>>>>> origin/Lorris

// create a services object for map all the services
const services = {
  user: user_service(repositories),
<<<<<<< HEAD
  mailer: mailer_service(nodemailer),
  bcrypt: bcrypt_service(bcrypt),
  jwt: token_service(jwt),
=======
  book: book_service(repositories),
  booking: booking_service(repositories),
  cryptPassword: bcrypt_service(bcrypt),
>>>>>>> origin/Lorris
};

// export our service object
module.exports = services;
