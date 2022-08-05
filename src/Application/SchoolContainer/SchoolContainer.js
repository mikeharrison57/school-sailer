import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchSchoolsInfo } from '../api-call';
import SchoolCard from '../SchoolCard/SchoolCard'
import './SchoolContainer.css'

const SchoolContainer = ({ usState, lists }) => {

  const [stateInfo, setStateInfo] = useState([]);
  // const [error, setError] = useState('');

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

  const returnSchoolCards = () => {
    const schoolCards = stateInfo.map((list) => {
      return (
        <SchoolCard 
          key={Math.random()} 
          school={list.latest.school} 
          costPerYear={list.latest.cost.avg_net_price.overall}
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
  usState: PropTypes.string.isRequired
};