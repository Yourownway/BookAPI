module.exports = (models) => {
  const genre_repository = {
    getAll: async (data) => {
      return models.book.query("SELECT Categories.name FROM Categories");
    },
  };
  return genre_repository;
};
