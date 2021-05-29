import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
} from "../actions/tutorials";
import { Link } from "react-router-dom";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

class Incidents extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);

    this.state = {
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      rowData: [],
      columnDefs: [
        { headerName: 'Source', field: 'source' },
        { headerName: 'Description', field: 'description' },
        { headerName: 'Service', field: 'service' },
        { headerName: 'Severity', field: 'severity' },
        { headerName: 'Location', field: 'location', editable: true },
        { headerName: 'Base', field: 'base' }
      ],
    };
  }

  componentDidMount() {
    this.state.rowData = this.props.retrieveTutorials()
    fetch('http://localhost:8787/krims/alerts')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
  }
  // componentDidMount() {
  // this.props.retrieveTutorials().then(rowData => this.setState({ rowData }));
  // }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    this.props
      .deleteAllTutorials()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findTutorialsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, currentTutorial, currentIndex } = this.state;
    const { alerts } = this.props;

    return (
      <div className="list row">
        <div className="col-md-6">
          <div className="ag-theme-alpine"
            style={{ height: 400, width: 1000 }}>
            <AgGridReact enableSorting={true} columnDefs={this.state.columnDefs} rowData={this.state.rowData}>
            </AgGridReact>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tutorials: state.tutorials,
  };
};

export default connect(mapStateToProps, {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
})(Incidents);
