import React, { Component } from "react";
import Post from "./Post";

const posts = [
  {
    id: 0,
    author: "Mike",
    title: "First post",
    text:
      "Soleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt."
  },
  {
    id: 1,
    author: "Mike",
    title: "Second post",
    text:
      "Soleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt."
  }
];

class Feed extends Component {
  state = {};
  render() {
    return (
      <section className="feed-container section">
        <div className="tile is-ancestor has-content-centered">
          <div className="tile is-parent is-6 is-vertical">
            {posts.map((post, i) => (
              <div key={i} className="tile is-child box is-12 is-primary">
                <Post post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Feed;
