import React, { useState, useEffect } from 'react';
import { fetchSchoolsInfo } from '../utils/api-call';
import PropTypes from 'prop-types';
import SchoolCard from '../SchoolCard/SchoolCard';
import Error from '../Error/Error';
import './SchoolContainer.css';

const SchoolContainer = ({ usState, lists, getFavoriteSchools, favoriteSchools }) => {

  const [stateInfo, setStateInfo] = useState([]);
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

  const addFavoriteSchools = foundSchool => {
    const foundFavoriteSchool = stateInfo.find(list => list.latest.school === foundSchool);
    getFavoriteSchools(foundFavoriteSchool);
     
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
          costPerYear={list.latest.cost.attendance.academic_year}
          favoriteSchools={favoriteSchools}
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
        {stateInfo.length? returnSchoolCards() : <h2 style={{textAlign: 'center'}}>LOADING...</h2>}
      </section>
    )
  }
}

export default SchoolContainer;

SchoolContainer.propTypes = {
  usState: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  getFavoriteSchols: PropTypes.func,
  favoriteSchools: PropTypes.array
};