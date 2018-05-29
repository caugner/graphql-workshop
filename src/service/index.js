const db = require("sqlite");
const Promise = require("bluebird");

const logger = require("../logger-conf").logger;

module.exports = {
  onReady() {
    return db
      .open("./blog.sqlite", { Promise, verbose: true })
      .then(() => db.migrate({ force: "last" }));
  },
  getPosts() {
    return db.all("SELECT * FROM Post");
  },
  addPost(params) {
    return db.run(
      "INSERT INTO Post (title, content) VALUES (?, ?)",
      params.title,
      params.content
    );
  },
  getPostsById(postId) {
    return db.get("SELECT * FROM Post WHERE id=?", postId);
  },
  getCommentsFor(postId) {
    return db.all("SELECT * FROM Comment WHERE postId=?", postId);
  }
};
