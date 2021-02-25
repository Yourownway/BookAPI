module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/books").get(controllers.book.getAll);

  return router;
};
module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/books").get(controllers.book.getAll);

  return router;
};
