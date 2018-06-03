import React, { Component } from "react";

class PostCreationView extends Component {
  state = {
    author: "",
    title: "",
    content: "",
    isCreateBtnDisabled: true
  };

  componentDidMount() {
    const { author, title, content } = this.state;

    if (!this.state.author && !this.state.title && !this.state.content) {
      this.makeCreateBtnEnabled();
    }
  }

  handleChange(event, fieldType) {
    const { author, title, content } = this.state;

    this.setState({
      [fieldType]: event.target.value
    });
  }

  makeCreateBtnEnabled() {
    this.setState({
      isCreateBtnDisabled: false
    });
  }

  render() {
    return (
      <div
        className="post-creation-view-overlay"
        onClick={() => this.props.makeItDisappear()}
      >
        <div
          className="post-creation-view-body has-shadow"
          onClick={event => event.stopPropagation()}
        >
          <label htmlFor="author">Author</label>
          <input
            className="input mb-1"
            name="author"
            type="text"
            placeholder="What's your name?"
            onChange={event => this.handleChange(event, "author")}
          />
          <label htmlFor="title">Title</label>
          <input
            className="input mb-1"
            name="title"
            type="text"
            placeholder="What does it talk about?"
            onChange={event => this.handleChange(event, "title")}
          />
          <label htmlFor="content">Content</label>
          <textarea
            className="textarea mb-1"
            name="content"
            id="post-creation-view-content"
            cols="30"
            rows="10"
            placeholder="Once upon a time..."
            onChange={event => this.handleChange(event, "content")}
          />
          <div>
            <button
              className="button is-primary"
              disabled={this.state.isCreateBtnDisabled}
            >
              Create post
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCreationView;
