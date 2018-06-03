import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import * as restClient from "./rest-client";
import * as graphQLClient from "./graphql-client";

const isRest = false;
const client = isRest ? restClient : graphQLClient;

class App extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  async componentDidMount() {
    this.setState({ posts: await client.getPosts() });
  }

  render() {
    return (
      <div className="App has-text-dark">
        <Navbar />
        <Feed posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
