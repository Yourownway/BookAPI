module.exports = (models) => {
  const book_repository = {
    getAll: async (data) => {
      return models.book.query(
        "SELECT Books.auteur, Books.bookName, GROUP_CONCAT(Genres.genreName SEPARATOR '-') as genre ,Categories.categorieName FROM (Books INNER JOIN BooksGenres ON Books.id = BooksGenres.bookId) INNER JOIN Genres ON BooksGenres.genreId = Genres.id INNER JOIN Categories ON Books.categorieId = Categories.id  GROUP BY BooksGenres.bookId"
      );
    },
    getBySearch: async (input) => {
      console.log(input);
      return models.book.query(
        `SELECT DISTINCT Books.auteur, Books.bookName FROM (Books INNER JOIN BooksGenres ON Books.id = BooksGenres.bookId) INNER JOIN Genres ON BooksGenres.genreId = Genres.id INNER JOIN Categories ON Categories.id = Books.id WHERE Genres.genreName LIKE '%${input}%' OR Categories.categorieName LIKE '%${input}%'OR Books.bookName LIKE '%${input}%' OR Books.auteur LIKE '%${input}%' `
      );
    },
  };

  return book_repository;
};

// `SELECT Books.id, Categories.categorieName FROM Categories INNER JOIN Books ON Books.categorieId = Categories.id`
// "SELECT Books.id ,Books.auteur, Books.bookName, Categories.categorieName FROM (Books INNER JOIN Categories ON Books.categorieId = Categories.id) "
// "SELECT Books.auteur, Books.bookName, Categories.categorieName FROM Books INNER JOIN Categories ON Books.categorieId = Categories.id"

// "SELECT * FROM Genres INNER JOIN Books ON Genres.bookId=Books.id "
// "SELECT Genres.genreName, Books.bookName FROM (Genres INNER JOIN BooksGenres ON Genres.id = BooksGenres.genreId) INNER JOIN Books ON Books.id = BooksGenres.bookId"
