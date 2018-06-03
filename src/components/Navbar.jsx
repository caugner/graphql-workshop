import React, { Component } from "react";
import PostCreationView from "./PostCreationView";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.togglePostCreationView = this.togglePostCreationView.bind(this);
  }

  state = {
    isPostCreationViewVisible: false
  };

  togglePostCreationView() {
    this.setState({
      isPostCreationViewVisible: !this.state.isPostCreationViewVisible
    });
  }

  render() {
    return (
      <nav className="navbar has-shadow" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            GraphBlog.io
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <button
                className="button is-primary"
                onClick={() => this.togglePostCreationView()}
              >
                Create post
              </button>
            </div>
          </div>
        </div>
        {this.state.isPostCreationViewVisible && (
          <PostCreationView makeItDisappear={this.togglePostCreationView} />
        )}
      </nav>
    );
  }
}

export default Navbar;
