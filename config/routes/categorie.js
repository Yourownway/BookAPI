module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/categories").get(controllers.categorie.getAll);

  return router;
};
