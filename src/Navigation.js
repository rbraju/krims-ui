import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div id="navigation">
          <ul>
            <br /><li><a href="/">Home</a></li>
            <br /><li><a href="/alerts">Alerts</a></li>
            <br /><li><a href="/incidents">Incidents</a></li>
            <br /><li><a href="/settings">Users</a></li>
            <br /><li><a href="/send-event">Send Event</a></li>
          </ul>
        </div>
      </Router >
    );
  }
}

export default Navigation;
