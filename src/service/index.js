const db = require("sqlite");
const Promise = require("bluebird");

module.exports = {
  open() {
    return db
      .open("./blog.sqlite", { Promise })
      .then(() => db.migrate({ force: "last" }));
  },
  getAllPost() {
    return db.all("SELECT * FROM Post");
  },
  getPostById(id) {
    return db.get("SELECT * FROM Post WHERE id=?", id);
  }
};
