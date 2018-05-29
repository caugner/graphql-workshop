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
  getPostById(postId) {
    return db.get("SELECT * FROM Post WHERE id=?", postId);
  },
  getAllCommentFor(postId) {
    return db.all("SELECT * FROM Comment WHERE postId=?", postId);
  }
};
