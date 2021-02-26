module.exports = (services) => {
  const categorie_controller = {
    getAll: async (req, res) => {
      let result = await services.categorie.getAll();
      res.send(result);
    },
  };
  return categorie_controller;
};
