import React from "react";
import CommentsSection from "./CommentsSection";

const Post = props => (
  <div className="post">
    <div className="post-body mb-1">
      <h2 className="is-size-2 has-text-weight-semibold">{props.post.title}</h2>
      <p>{props.post.text}</p>
      <small className="has-text-weight-semibold">{props.post.author}</small>
    </div>
    <CommentsSection />
  </div>
);

export default Post;
