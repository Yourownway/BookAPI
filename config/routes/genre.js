module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/genres").get(controllers.genre.getAll);

  return router;
};
