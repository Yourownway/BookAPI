module.exports = (services) => {
  const wishList_controller = {
    addBook: async (req, res) => {
      console.log("USER ==>", req.user.id);
      const userId = req.user.id;
      const bookId = req.params.id;
      const book = services.wishList.addBook({ userId, bookId });
      console.log("books", book);
      res.status(201).json({ message: "livre ajouté" });
    },
  };
  return wishList_controller;
};
