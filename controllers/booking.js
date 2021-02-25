module.exports = (services) => {
  const booking_controller = {
    rentBook: async (req, res) => {
      let { userId, bookId } = (data = req.params);
      let result = await services.booking.rentBook(data);
      res.send(result);
    },
  };
  return booking_controller;
};
