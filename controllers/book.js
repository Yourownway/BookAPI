module.exports = (services) => {
  const book_controller = {
    getAll: async (req, res) => {
      let result = await services.book.getAll();
      res.send(result);
    },
  };
  return book_controller;
};
