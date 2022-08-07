import React, { useState, useEffect } from 'react';
import { fetchSchoolsInfo } from '../utils/api-call';
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import SchoolCard from '../SchoolCard/SchoolCard'
import Error from '../Error/Error'
import './SchoolContainer.css'

const SchoolContainer = ({ usState, lists, favorite, getFavoriteSchols, fetchError }) => {

  const [stateInfo, setStateInfo] = useState([]);
  const [favoriteSchoolsContainer, setFavoriteSchools] = useState([]);

  const maintainStateInfo = () => {
    fetchSchoolsInfo(usState)
      .then(data => {
        setStateInfo([ 
          ...data.results,
          ...stateInfo
        ])
      })
      .catch((error) => {
        console.log(error)
        fetchError = true
      })
    }

  useEffect(() => {
    maintainStateInfo();
    clearStateInfo();
  }, [usState, lists])

  const clearStateInfo = () => {
    setStateInfo([]);
  }

  const addFavoriteSchools = school => {
    const foundFavoriteSchool = stateInfo.find(list => list.latest.school === school);
    setFavoriteSchools([
      ...favoriteSchoolsContainer,
      {...foundFavoriteSchool}
    ])
    getFavoriteSchols(favoriteSchoolsContainer);
  }

  const returnSchoolCards = () => {
    const schoolCards = stateInfo.map((list) => {
      return (
        <SchoolCard 
          key={Math.random()} 
          school={list.latest.school}
          addFavoriteSchools={addFavoriteSchools}
          costPerYear={list.latest.cost.attendance.academic_year}
          favorite={favorite}
        />
      )
    })
    return schoolCards
  }

  if (fetchError) {
    return <Error />
  } else {
    return (
      <section className='school-container'>
        {stateInfo.length? returnSchoolCards() : <h2>LOADING...</h2>}
      </section>
    )
  }
}

export default SchoolContainer;

SchoolContainer.propTypes = {
  usState: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  favorite: PropTypes.bool.isRequired,
  getFavoriteSchols: PropTypes.func.isRequired,
  error: PropTypes.bool
};