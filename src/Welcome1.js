import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Welcome extends Component {
  render() {
    return (
      <Router>
        <div id="content">
          <h3>Welcome!</h3>
        </div>
      </Router>
    );
  }
}

export default Welcome;
