module.exports = (models) => {
  const book_repository = {
    getAll: async (data) => {
      return models.book.query(
        "SELECT Books.auteur, Books.name , GROUP_CONCAT(Genres.name SEPARATOR '-') as genre ,Categories.name as categorie FROM (Books INNER JOIN BooksGenres ON Books.id = BooksGenres.bookId) INNER JOIN Genres ON BooksGenres.genreId = Genres.id INNER JOIN Categories ON Books.categorieId = Categories.id  GROUP BY BooksGenres.bookId"
      );
    },
    getBySearch: async (input) => {
      return models.book.query(
        `SELECT DISTINCT Books.auteur, Books.name as bookName FROM (Books INNER JOIN BooksGenres ON Books.id = BooksGenres.bookId) INNER JOIN Genres ON BooksGenres.genreId = Genres.id INNER JOIN Categories ON Categories.id = Books.id WHERE Genres.name LIKE '%${input}%' OR Categories.name LIKE '%${input}%'OR Books.name LIKE '%${input}%' OR Books.auteur LIKE '%${input}%' `
      );
    },
  };

  return book_repository;
};
