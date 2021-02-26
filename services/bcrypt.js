module.exports = (bcrypt) => {
  const bcrypt_service = {
    cryptPassword: async (password) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    },
    comparePassword: async (password, user) => {
      const compare = await bcrypt.compare(password, user);
      return compare;
    },
  };
  return bcrypt_service;
};
