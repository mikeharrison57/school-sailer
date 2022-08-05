import React from 'react';
import PropTypes from 'prop-types';
import SchoolCard from '../SchoolCard/SchoolCard'
import './SchoolContainer.css'

const SchoolContainer = ({ lists }) => {

  const schoolCards = lists.map((list) => {
    return (
      <SchoolCard 
        key={list.id} 
        id={list.id}
        school={list.latest.school} 
        costPerYear={list.latest.cost.avg_net_price.overall}
      />
    )
  })
  
  return (
    <section className='school-container'>
      {schoolCards}
    </section>
  )
}

export default SchoolContainer;

SchoolContainer.propTypes = {
  lists: PropTypes.array.isRequired
};