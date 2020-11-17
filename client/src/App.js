import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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