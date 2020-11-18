import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/min.css';

import addPost from "./components/addPost";
import EditPost from "./components/editPost";
import PostsList from "./components/postsList";
import Navbar from "./components/navbar";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>SafeT App</h2>

          <Route path="/" exact component={PostsList} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/create" component={CreatePost} />


        </div>
      </Router>
    );
  }
}

export default App;