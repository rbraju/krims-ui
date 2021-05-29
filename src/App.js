import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Welcome from "./components/welcome";
import SendEvent from "./components/send-event";
import Tutorial from "./components/tutorial.component";
import Alerts from "./components/alerts";
import Incidents from "./components/incidents";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/alerts" component={Alerts} />
            <Route exact path="/incidents" component={Incidents} />
            <Route exact path="/send-event" component={SendEvent} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route exact path={["/tutorials"]} component={Alerts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
