import React, { Component } from "react";

const comments = [
  {
    author: "Mike",
    text: "This is a great post!"
  },
  {
    author: "Mike",
    text: "And i mean it!"
  }
];

class CommentsSection extends Component {
  state = {
    comment: ""
  };

  comment() {}

  handleChange(event) {
    this.setState({
      comment: event.target.value
    });
  }

  render() {
    return (
      <div className="comments-section">
        <div className="comments-feed p-1">
          {comments.map(comment => (
            <div className="comment mb-1">
              <h3 className="has-text-weight-semibold">{comment.author}</h3>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
        <div className="comments-section-form">
          <input
            className="input is-small is-rounded mr-1"
            type="text"
            placeholder="What is on your mind about it?"
            onChange={event => this.handleChange(event)}
          />
          <button
            className="button is-small is-primary"
            onClick={() => this.comment()}
          >
            Comment
          </button>
        </div>
      </div>
    );
  }
}

export default CommentsSection;
