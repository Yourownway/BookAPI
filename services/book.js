module.exports = (repositories) => {
  const book_service = {
    getAll: async () => {
      return repositories.book.getAll();
    },
    getBySearch: async (input) => {
      return repositories.book.getBySearch(input);
    },
  };

  return book_service;
};
