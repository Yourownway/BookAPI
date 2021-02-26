module.exports = (models) => {
  const wishList_repository = {
    addBook: async (data) => {
      console.log("DATA ==>", data);
      return models.wishList.query(
        `INSERT INTO WishLists (userId, bookId) 
        SELECT userId, bookId FROM WishLists INNER JOIN Books ON Books.id = 
                `
      );
    },
  };
  return wishList_repository;
};
