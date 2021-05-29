import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return (
      <Router>
        <div id="header">I n c i d e n t &nbsp;&nbsp; M  a n a g e m e n t &nbsp;&nbsp; S y s t e m</div>
      </Router>
    );
  }
}

export default Header;
