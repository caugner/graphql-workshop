const db = require("sqlite");
const Promise = require("bluebird");

module.exports = {
  open() {
    return db
      .open("./blog.sqlite", { Promise })
      .then(() => db.migrate({ force: "last" }));
  },
  getPosts() {
    return db.all("SELECT * FROM Post LIMIT 10");
  }
};
