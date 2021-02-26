module.exports = (services) => {
  const wishList_controller = {
    addBook: async (req, res) => {
      console.log("USER ==>", req.user.id);
      const userId = req.user.id;
      const bookId = req.params.id;
      const result = await services.wishList.addBook({ userId, bookId });
      res.status(201).json({ result, message: "livre ajouté" });
    },
  };
  return wishList_controller;
};
