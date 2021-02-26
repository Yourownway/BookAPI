module.exports = (repositories) => {
  const user_service = {
    getAll: async (data) => {
      return repositories.user.getAll();
    },
    register: async (data) => {
      return repositories.user.register(data);
    },
    getById: async (id) => {
      const rows = await repositories.user.getById(id);
      return rows[0];
    },
    userFoundByEmail: async (email) => {
      return repositories.user.userFoundByEmail(email);
    },
  };

  return user_service;
};
