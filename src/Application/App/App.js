import React, { Component } from 'react';
import { fetchSchoolsInfo } from '../api-call';
import Navbar from '../Navbar/Navbar';
import StateSelectionForm from '../StateForm/StateSelectionForm';
import SchoolContainer from '../SchoolContainer/SchoolContainer'
// import FavoriteSchools from '../FavoriteSchools/FavoriteSchools';
import SchoolDetailPage from '../SchoolDetailPage/SchoolDetailPage'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    lists: [],
    favorites: [],
    favorite: false,
    error: false
  }

  getSchoolsByState = state => {
    fetchSchoolsInfo(state)
      .then(data => {
        this.setState({ 
            lists: data.results
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
        {/* {console.log(this.state.favorites)} */}
          <Navbar />
          <StateSelectionForm getSchoolsByState = {this.getSchoolsByState} />
          <Route exact path='/:state' render={(match) => {
            return (
              <SchoolContainer 
                usState={match.match.params.state} 
                lists={this.state.lists} 
                favorite={this.state.favorite}
                addFavoriteSchools={this.addFavoriteSchools}
              />
            )
           }}/>
          <Route path="/:state/:schoolName" render={(match) => {
            return <SchoolDetailPage schoolName={match.match.params.schoolName} lists={this.state.lists} />
          }}/>
      </main>
    );
  }
}

export default App;
