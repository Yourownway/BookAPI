module.exports = (models) => {
  const book_repository = {
    getAll: async (data) => {
      return models.book.query(
        "select * from Books INNER JOIN BooksGenres ON Books.id = BooksGenres.bookId"
      );
    },
  };

  return book_repository;
};
