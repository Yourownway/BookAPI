module.exports = (express, controllers) => {
  const router = express.Router();

  router
    .route("/users")
    .get(controllers.user.getAll)
    .post(controllers.user.register)
    .post(controllers.user.login);

  router.route("/users/login").post(controllers.user.login);
  router.get("/users/me").get(controllers.user.getUser);

  return router;
};
