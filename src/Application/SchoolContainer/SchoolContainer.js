import React, { useState, useEffect } from 'react';
import { fetchSchoolsInfo } from '../utils/api-call';
import PropTypes from 'prop-types';
import SchoolCard from '../SchoolCard/SchoolCard';
import Error from '../Error/Error';
import './SchoolContainer.css';

const SchoolContainer = ({ usState, lists, getFavoriteSchools }) => {

  const [stateInfo, setStateInfo] = useState([]);
  const [favoriteSchoolsContainer, setFavoriteSchools] = useState([]);
  const [error, setError] = useState(false);

  const maintainStateInfo = async () => {
    fetchSchoolsInfo(usState)
      .then(data => {
        setStateInfo([ 
          ...data.results,
          ...stateInfo
        ])
      })
      .catch((error) => {
        console.log(error)
        setError(true)
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
      {...foundFavoriteSchool},
      ...favoriteSchoolsContainer
    ])
    getFavoriteSchools(favoriteSchoolsContainer);
  }

  const returnSchoolCards = () => {
    const schoolCards = stateInfo.map((list) => {
      if(!list.latest.school.isFavorited) {
        list.latest.school.isFavorited = false
      }
      return (
        <SchoolCard 
          key={Math.random()} 
          school={list.latest.school}
          addFavoriteSchools={addFavoriteSchools}
          favoriteSchools={favoriteSchoolsContainer}
          costPerYear={list.latest.cost.attendance.academic_year}
        />
      )
    })
    return schoolCards
  }

  if (error) {
    return <Error />
  } else {
    return (
      <section className='school-container'>
        {console.log('favoriteSchholsContainer, line 66', favoriteSchoolsContainer)}
        {stateInfo.length? returnSchoolCards() : <h2>LOADING...</h2>}
      </section>
    )
  }
}

export default SchoolContainer;

SchoolContainer.propTypes = {
  usState: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  getFavoriteSchols: PropTypes.func
};