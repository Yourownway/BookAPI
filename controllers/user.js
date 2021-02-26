const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

module.exports = (services) => {
  const user_controller = {
    getAll: async (req, res) => {
      let result = await services.user.getAll();
      res.send(result);
    },
    getUser: async (req, res) => {
      const email = req.body.email;
      const userFound = await services.user.userFoundByEmail(email);
      res.send(userFound);
    },
    register: async (req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      try {
        if (!email || !password) res.status(400).json("missing parameters");
        else {
          let bcrypt = await services.bcrypt.cryptPassword(password);
          let result = await services.user.register([email, bcrypt]);
          let user = await services.user.getById(result.insertId);
          await services.mailer.sendMail(user);
          res.status(201).json("new user registered");
        }
      } catch (err) {
        res.status(400).json(err);
      }
    },
    login: async (req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      try {
        if (!email || !password) res.status(400).json("missing parameters");
        else {
          const userFound = await services.user.userFoundByEmail(email);
          if (!userFound) {
            console.log("Email incorrect");
          }
          const comparePassword = await services.bcrypt.comparePassword(
            password,
            userFound[0].password
          );
          if (!comparePassword) {
            console.log("Mot de passe incorrect");
          }
          await services.jwt.createToken(res, userFound);

          res.status(201).json({ message: "Connecté" });
        }
      } catch (err) {
        res.status(400).json(err);
      }
    },
  };

  return user_controller;
};
