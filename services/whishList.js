module.exports = (repositories) => {
  const wishList_service = {
    addBook: async (data) => {
      const wish = await repositories.wishList.addBook(data);
      console.log("WISH ===>", wish);
      return wish;
    },
  };

  return wishList_service;
};
