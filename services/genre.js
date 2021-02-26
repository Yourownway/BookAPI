module.exports = (repositories) => {
  const user_service = {
    getAll: async (data) => {
      return repositories.genre.getAll();
    },
  };

  return user_service;
};
