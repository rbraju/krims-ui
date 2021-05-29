import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/send-event";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class Home extends Component {
  render() {
    return (
      <Router>
        <div id="content">
          <div className="container mt-3">
            {/* <Switch> */}
              {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} /> */}
              {/* <Route exact path="/add" component={AddTutorial} /> */}
              {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
            {/* </Switch> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;
