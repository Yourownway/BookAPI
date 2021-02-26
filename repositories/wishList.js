module.exports = (models) => {
  const wishList_repository = {
    addBook: async (data) => {
      console.log("DATA ==>", data);
      return models.wishList.query(
        `INSERT INTO WishLists (userId, bookId) VALUES (?,?)`,
        data
      );
    },
  };
  return wishList_repository;
};
