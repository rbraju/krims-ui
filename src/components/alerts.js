import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

class Alerts extends Component {
  state = {
    alerts: []
  };

  async componentDidMount() {
    const response = await fetch(`http://localhost:8787/krims/alerts`);
    const body = await response.json();
    this.setState({ alerts: body });
  }

  async update(id) {
    await fetch(`http://localhost:8787/krims/alerts/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {

    });
  }

  render() {
    const { alerts } = this.state;
    let tt = "123";

    return (
      <div>
        <header className="app-header">
          <div className="data">
            <div class="data-row-header">
              <div class="data-col-header">Alert ID</div>
              <div class="data-col-header">Severity</div>
              <div class="data-col-header">Source</div>
              <div class="data-col-medium">Assignee ID</div>
              <div class="data-col-header-large">Description</div>
              <div class="data-col-medium">Status</div>
              <div class="data-col-header">Location</div>
            </div>

            {alerts.map(alert =>
              <div class="data-row">
                <div class="data-col">{alert.alert_id}</div>
                <div class="data-col">{alert.severity}</div>
                <div class="data-col">{alert.source}</div>
                <div class="data-col-medium">{alert.assignee}</div>
                <div class="data-col-large">{alert.description}</div>
                <div class="data-col-medium"> {
                  (alert.status == 'Open') ? 
                  <select>
                    <option selected>Open</option>
                    <option>In Progress</option>
                    <option>Closed</option>
                  </select> 
                  :
                  <select>
                  <option>Open</option>
                  <option selected>In Progress</option>
                  <option>Closed</option>
                </select> 

                } </div>
                <div class="data-col">{alert.location}</div>
                <div class="data-col">
                  <a href="javascript:update(5);" class="btn-gradient blue mini">Update</a>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Alerts;
