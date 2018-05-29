const Router = require("express").Router;
const service = require("../service");

const router = Router();

router.get("/posts", (req, res, next) => {
  service
    .getPosts()
    .then(posts => res.json({ posts }))
    .catch(err => next(err));
});

router.post("/posts", (req, res, next) => {
  service
    .addPost({
      title: req.body.title,
      content: req.body.content
    })
    .then(posts => res.sendStatus(201))
    .catch(err => next(err));
});

router.get("/posts/:postId", (req, res, next) => {
  service
    .getPostsById(req.params.postId)
    .then(posts => res.json({ posts }))
    .catch(err => next(err));
});

router.get("/posts/:postId/comments", (req, res, next) => {
  service
    .getCommentsFor(req.params.postId)
    .then(comments => res.json({ comments }))
    .catch(err => next(err));
});

module.exports = router;
