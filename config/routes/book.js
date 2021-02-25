module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/books").get(controllers.book.getAll);

  return router;
};
module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/books").get(controllers.book.getAll);
  router.route("/:input/books").get(controllers.book.getBySearch);
  return router;
};
