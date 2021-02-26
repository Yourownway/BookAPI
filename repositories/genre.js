module.exports = (models) => {
  const genre_repository = {
    getAll: async (data) => {
      return models.book.query("SELECT Genres.name FROM Genres");
    },
  };
  return genre_repository;
};
