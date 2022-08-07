import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchSchoolsInfo } from '../api-call';
import SchoolCard from '../SchoolCard/SchoolCard'
import { Route } from 'react-router-dom'
import './SchoolContainer.css'

const SchoolContainer = ({ usState, lists, favorite, getFavoriteSchols }) => {

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

  return (
    <section className='school-container'>
      {returnSchoolCards()}
    </section>
  )
}

export default SchoolContainer;

SchoolContainer.propTypes = {
  usState: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  favorite: PropTypes.bool.isRequired,
  getFavoriteSchols: PropTypes.func.isRequired
};