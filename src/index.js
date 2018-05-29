const express = require("express");
const service = require("./service");

const app = express();
const port = process.env.PORT || 3000;

app.get("/post", (req, res, next) => {
  service
    .getAllPost()
    .then(posts => res.json({ posts: posts }))
    .catch(err => next(err));
});

app.get("/post/:id", (req, res, next) => {
  service
    .getPostById(req.params.id)
    .then(post => res.json({ post: post }))
    .catch(err => next(err));
});

service
  .open()
  .then(
    app.listen(port, () => {
      console.log(`App listen on ${port}`);
    })
  )
  .catch(err => {
    console.error(`SQLite database cannot be opened. Reason :\n${err}`);
  });
