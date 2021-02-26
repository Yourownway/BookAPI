module.exports = (services) => {
  const genre_controller = {
    getAll: async (req, res) => {
      let result = await services.genre.getAll();
      res.send(result);
    },
  };
  return genre_controller;
};
