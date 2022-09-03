import React, { useState, useEffect } from 'react';
import { fetchSchoolsInfo } from '../utils/api-call';
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import StateSelectionForm from '../StateForm/StateSelectionForm';
import SchoolContainer from '../SchoolContainer/SchoolContainer'
import FavoriteSchools from '../FavoriteSchools/FavoriteSchools';
import SchoolDetailPage from '../SchoolDetailPage/SchoolDetailPage'
import Error from '../Error/Error'
import './App.css';

const App = () => {

const [lists, setLists] = useState([]);
const [favoriteSchools, setFavoriteSchools] = useState([]);
const [error, setError] = useState(false);

  const getSchoolsByState = async state => {
    fetchSchoolsInfo(state)
      .then(data => {
        setLists([...lists, ...data.results])
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })
  }

  const getFavoriteSchools = foundSchool => {
    setFavoriteSchools([...favoriteSchools, {...foundSchool}])
  }

  useEffect(() => {
    getSchoolsByState();
  }, [])
  
  return (
    <>
    {error ? <Error /> :
      <main className="App">
          <Navbar />
          <StateSelectionForm getSchoolsByState = {getSchoolsByState} /> 
          <Switch>
            <Route exact path='/:state' render={(match) => {
              return (
                <SchoolContainer 
                  usState={match.match.params.state} 
                  lists={lists}
                  getFavoriteSchools={getFavoriteSchools}
                  favoriteSchools={favoriteSchools}
                />
              )
            }}/>
            <Route exact path="/state/chosen/favorites" render={() => {
                return (
                  <FavoriteSchools 
                    favoriteSchools={favoriteSchools}
                  />
                ) 
              }}/>
            <Route exact path="/:state/:schoolName" render={(match) => {
                return (
                  <SchoolDetailPage 
                    schoolName={match.match.params.schoolName} 
                    lists={lists} 
                  />
                ) 
              }}/>
              <Route exact path="/state/chosen/:state/:schoolName" render={(match) => {
                return (
                  <SchoolDetailPage 
                    schoolName={match.match.params.schoolName} 
                    lists={lists}              
                  />
                ) 
              }}/>
          </Switch>
      </main> } 
    </>
  );
}

export default App;
