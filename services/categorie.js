module.exports = (repositories) => {
  const user_service = {
    getAll: async (data) => {
      return repositories.categorie.getAll();
    },
  };

  return user_service;
};
