import React, { Component } from "react";
import { connect } from "react-redux";
import { createTutorial } from "../actions/tutorials";

class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangeService = this.onChangeService.bind(this);
    this.onChangeSeverity = this.onChangeSeverity.bind(this);
    this.onChangeBase = this.onChangeBase.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeEventtype = this.onChangeEventtype.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      source: "server-001",
      location: "San Francisco, US",
      description: "CPU Usage is high - 95%",
      service: "checkout",
      eventtype: "event",
      status: "Open",
      base: "cpu",
      severity: "Critical",
      published: false,
      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeSource(e) {
    this.setState({
      source: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangeSeverity(e) {
    this.setState({
      severity: e.target.value,
    });
  }

  onChangeService(e) {
    this.setState({
      service: e.target.value,
    });
  }

  onChangeBase(e) {
    this.setState({
      base: e.target.value,
    });
  }

  onChangeEventtype(e) {
    this.setState({
      eventtype: e.target.value,
    });
  }

  saveTutorial() {
    const { description, source, service, severity, location, base, eventtype } = this.state;

    this.props
      .createTutorial(description, source, service, severity, location, base, eventtype)
      .then((data) => {
        this.setState({
          source: data.source,
          severity: data.severity,
          description: data.description,
          location: data.location,
          eventtype: data.eventtype,
          base: data.base,
          service: data.service,

          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      source: "",
      service: "",
      location: "",
      eventtype: "",
      base: "",
      severity: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="send-event">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <table>
              <tr height="50px">
                <td width="10%">Source</td><td width="2%">&nbsp;</td>
                <td width="33%">
                  <input type="text" className="form-control" id="source" required value={this.state.source}
                    onChange={this.onChangeSource} name="source" />
                </td>
                <td width="10%">&nbsp;</td><td width="10%">Decsription</td><td width="2%">&nbsp;</td>
                <td width="33%">
                  <input type="text" className="form-control" id="description" required value={this.state.description}
                    onChange={this.onChangeDescription} name="description" />
                </td>
              </tr>

              <tr height="50px">
                <td width="10%">Service</td><td width="2%">&nbsp;</td>
                <td width="33%">
                  <input type="text" className="form-control" id="service" required value={this.state.service}
                    onChange={this.onChangeService} name="service" />
                </td>
                <td width="10%">&nbsp;</td><td width="10%">Base</td><td width="2%">&nbsp;</td>
                <td width="33%">
                  <input type="text" className="form-control" id="base" required value={this.state.base}
                    onChange={this.onChangeBase} name="base" />
                </td>
              </tr>

              <tr height="50px">
                <td width="10%">Severity</td><td width="2%">&nbsp;</td>
                <td width="33%">
                  <input type="text" className="form-control" id="severity" required value={this.state.severity}
                    onChange={this.onChangeSeverity} name="severity" />
                </td>
                <td width="10%">&nbsp;</td><td width="10%">Location</td><td width="2%">&nbsp;</td>
                <td width="33%">
                  <input type="text" className="form-control" id="location" required value={this.state.location}
                    onChange={this.onChangeLocation} name="location" />
                </td>
              </tr>
              
              <tr height="50px">
                <td width="10%">Event Type</td><td width="2%">&nbsp;</td>
                <td width="33%">
                  <input type="text" className="form-control" id="eventtype" required value={this.state.eventtype}
                    onChange={this.onChangeEventtype} name="eventtype" />
                </td>
                <td>&nbsp;</td>
              </tr>
            </table>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createTutorial })(AddTutorial);
