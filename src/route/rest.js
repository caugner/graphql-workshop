const Router = require("express").Router;
const service = require("../service");

const router = Router();

router.get("/post", (req, res, next) => {
  service
    .getAllPost()
    .then(posts => res.json({ posts: posts }))
    .catch(err => next(err));
});

router.get("/post/:postId", (req, res, next) => {
  service
    .getPostById(req.params.postId)
    .then(post => res.json({ post: post }))
    .catch(err => next(err));
});

router.get("/post/:postId/comment", (req, res, next) => {
  service
    .getAllCommentFor(req.params.postId)
    .then(comment => res.json({ comment: comment }))
    .catch(err => next(err));
});

module.exports = router;
