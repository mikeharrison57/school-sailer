import React, { Component } from 'react';
import { fetchSchoolsInfo } from '../api-call';
import StateSelectionForm from '../StateForm/StateSelectionForm'
import './App.css';

class App extends Component {
  state = {
    schools: [],
    error: false
  }

  getSchoolsByState = (state) => {
    fetchSchoolsInfo(state)
      .then(data => {
        console.log(data.results)
        this.setState({ schools: data.results })
      })
      .catch((error) => {
        console.log(error)
        this.setState({ error: true })
      })
  }

  render() {
    return (
      <main className="App">
        <h1>School Sailor</h1>
        <section>
          <StateSelectionForm getSchoolsByState = {this.getSchoolsByState} />
        </section>
      </main>
    );
  }
}

export default App;
