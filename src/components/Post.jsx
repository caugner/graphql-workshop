import React from "react";
import CommentsSection from "./CommentsSection";
import ReactMarkdown from "react-markdown";

const Post = ({ post: { title, author, content } }) => (
  <div className="post">
    <div className="post-body mb-1">
      <h2 className="is-size-2 has-text-weight-semibold">{title}</h2>
      <ReactMarkdown source={content} />
      <small className="has-text-weight-semibold">{author}</small>
    </div>
    <CommentsSection />
  </div>
);

export default Post;
