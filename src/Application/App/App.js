import React, { Component } from 'react';
import { fetchSchoolsInfo } from '../api-call';
import Navbar from '../Navbar/Navbar';
import StateSelectionForm from '../StateForm/StateSelectionForm';
import SchoolContainer from '../SchoolContainer/SchoolContainer'
import './App.css';

class App extends Component {
  state = {
    lists: [],
    error: false
  }

  getSchoolsByState = (state) => {
    fetchSchoolsInfo(state)
      .then(data => {
        this.setState({ lists: data.results })
      })
      .catch((error) => {
        console.log(error)
        this.setState({ error: true })
      })
  }
  
  render() {
    return (
      <main className="App">
          <Navbar />
          <StateSelectionForm getSchoolsByState = {this.getSchoolsByState} />
          <SchoolContainer lists={this.state.lists} />
      </main>
    );
  }
}

export default App;
