module.exports = (repositories) => {
  const book_service = {
    getAll: async () => {
      return repositories.book.getAll();
    },
  };

  return book_service;
};
