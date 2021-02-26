module.exports = (express, middleware, controllers) => {
  const router = express.Router();

  router
    .route("/:userId/:bookId/booking")
    .get(middleware.auth.verifyToken, controllers.booking.rentBook);

  return router;
};
