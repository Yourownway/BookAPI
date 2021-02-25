module.exports = (repositories) => {
  const book_service = {
    rentBook: async (id) => {
      return repositories.booking.rentBook(id);
    },
  };

  return book_service;
};
