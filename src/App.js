import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

class App extends Component {
  render() {
    return (
      <div className="App has-text-dark">
        <Navbar />
        <Feed />
      </div>
    );
  }
}

export default App;
