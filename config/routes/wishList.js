module.exports = (express, middleware, controllers) => {
  const router = express.Router();

  router
    .route("/wish-list/:id")
    .post(middleware.auth.verifyToken, controllers.wishList.addBook);

  return router;
};
