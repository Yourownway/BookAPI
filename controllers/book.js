module.exports = (services) => {
  const book_controller = {
    getAll: async (req, res) => {
      let result = await services.book.getAll();
      res.send(result);
    },
    getBySearch: async (req, res) => {
      let input = req.params.input;
      let result = await services.book.getBySearch(input);
      res.send(result);
    },
  };
  return book_controller;
};
