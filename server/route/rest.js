const Router = require("express").Router;
const service = require("../service");
const $ = require("./rest-utils");

const router = Router();

router
  .route("/posts")
  .get($.getAll(service.getPosts))
  .post((req, res, next) => {
    service
      .addNewPost({
        title: req.body.title,
        content: req.body.content
      })
      .then(() => res.sendStatus(201))
      .catch(err => next(err));
  });

router.route("/posts/:postId").get($.getById(service.getPostById, "postId"));

router
  .route("/posts/:postId/comments")
  .get($.getById(service.getCommentsFor, "postId"))
  .post((req, res, next) => {
    service
      .addNewCommentFor(req.params.postId, {
        content: req.body.content
      })
      .then(() => res.sendStatus(201))
      .catch(err => next(err));
  });

module.exports = router;
