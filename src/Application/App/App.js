import React, { Component } from 'react';
import { fetchSchoolsInfo } from '../api-call';
import Navbar from '../Navbar/Navbar';
import StateSelectionForm from '../StateForm/StateSelectionForm';
import SchoolContainer from '../SchoolContainer/SchoolContainer'
import SchoolDetailPage from '../SchoolDetailPage/SchoolDetailPage'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    lists: [],
    error: false,
    usState: 'CO'
  }

  getSchoolsByState = (state) => {
    fetchSchoolsInfo(state)
      .then(data => {
        this.setState({ 
            lists: data.results,
            usState: data.results[0].latest.school.state
         })
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
          <Route exact path='/:state' render={() => {
            return <SchoolContainer lists={this.state.lists} />
           }}/>
          <Route exact path="/:state/:schoolName" render={(match) => {
            return <SchoolDetailPage schoolName={match.match.params.schoolName} lists={this.state.lists} />
          }}/>
      </main>
    );
  }
}

export default App;
