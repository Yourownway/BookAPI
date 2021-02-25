// middlewares dépendencies
const jwt = require("jsonwebtoken");

// middlewares
const auth_middleware = require("./auth");

// create a middlewares object for map all the services
const middlewares = {
  auth: auth_middleware(jwt),
};

// export our middlewares object
module.exports = middlewares;
