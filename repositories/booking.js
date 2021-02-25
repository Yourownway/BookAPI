module.exports = (models) => {
  const booking_repository = {
    rentBook: async (data) => {
      return models.booking.query(
        // `INSERT INTO Bookings (userId, bookId)  VALUES ( ${data.userId}, ${data.bookId}) WHERE Bookings.bookId NOT IN 2`
        `INSERT INTO Bookings (userId, bookId)
        SELECT * FROM (SELECT ${data.userId}, ${data.bookId}) AS tmp
        WHERE NOT EXISTS (
            SELECT bookId FROM Bookings WHERE bookId = ${data.bookId}
        ) LIMIT 1;`
      );
    },
  };

  return booking_repository;
};
