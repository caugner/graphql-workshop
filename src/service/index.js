const db = require("sqlite");
const Promise = require("bluebird");

module.exports = {
  onReady() {
    return db
      .open("./blog.sqlite", { Promise })
      .then(() => db.migrate({ force: "last" }));
  },
  getPosts() {
    return db.all("SELECT * FROM Post");
  },
  getPostsById(postId) {
    return db.get("SELECT * FROM Post WHERE id=?", postId);
  },
  getCommentsFor(postId) {
    return db.all("SELECT * FROM Comment WHERE postId=?", postId);
  }
};
