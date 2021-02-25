const models = require('../db/models');
const bcrypt = require('bcrypt');

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

module.exports = (services) => {
  const user_controller = {
    getAll: async (req, res) => {
      let result = await services.user.getAll();
      res.send(result);
    },
    register: async (req, res) => {
      const {
        email,
        password,
      } = req.body;

      try {
        if (!email || !password) res.status(400).json("Missing parameters");

        if (!EMAIL_REGEX.test(email)) res.status(401).json("Email invalid");

        if (!PASSWORD_REGEX.test(password)) res.status(401).json("The invalid password: it must be 8 to 15 characters long and include at least 1 number, lowercase, uppercase")

        const userFound = await models.Users.findOne({
          attributes: ["email"],
          where: {
            email
          },
        });

        if (!userFound) {
          const bcryptedPassword = await services.cryptPassword.hashPassword(password);
          const comparePassword = await services.cryptPassword.comparePassword(password);
          const newUser = await models.User.create({
            email,
            password: bcryptedPassword,
            password: comparePassword,
          });
          res.status(201).json(newUser);
        } else {
          throw "user already exists";
        }

      } catch (err) {
        res.status(400).json(err);
      }
    },
  };

  return user_controller;
};