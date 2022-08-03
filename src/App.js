import React, { Component } from 'react';
import { fetchSchoolsInfo } from './api-call';
import './App.css';

class App extends Component {
  state = {
    schools: []
  }

  componentDidMount() {
    fetchSchoolsInfo()
      .then((data) => {
        this.setState({schools: data.results})
      })
  }

  render() {
    return (
      <div className="App">
        <h1>School Sailor</h1>
      </div>
    );
  }
}

export default App;
