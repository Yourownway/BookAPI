module.exports = (models) => {
  const booking_repository = {
    rentBook: async (data) => {
      return models.booking.query(
        `INSERT INTO Bookings (userId, bookId)  VALUES ( ${data.userId}, ${data.bookId}) WHERE Bookings.bookId NOT IN 2`
      );
    },
  };

  return booking_repository;
};
