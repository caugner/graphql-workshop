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

app.get("/post/:postId", (req, res, next) => {
  service
    .getPostById(req.params.postId)
    .then(post => res.json({ post: post }))
    .catch(err => next(err));
});

app.get("/post/:postId/comment", (req, res, next) => {
  service
    .getAllCommentFor(req.params.postId)
    .then(comment => res.json({ comment: comment }))
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
