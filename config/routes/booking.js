module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/:userId/:bookId/booking").get(controllers.booking.rentBook);

  return router;
};
