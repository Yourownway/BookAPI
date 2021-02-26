class WishList {
  constructor(db, data) {
    this.db = db;
  }

  async query(query, data = []) {
    const [rows, fields] = await this.db.promise().execute(query, data);
    return rows;
  }
}

module.exports = WishList;
