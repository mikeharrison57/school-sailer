import React from 'react';
import PropTypes from 'prop-types';
import './SchoolCard.css'

const SchoolCard = ({ school, costPerYear }) => {
  return (
    <article className='school-card'>
      <img></img>
      <h3>Name: {school.name} </h3>
      <p>City: {school.city}, {school.state} </p>
      {costPerYear && <p>Average Cost of Attendance Per Year: ${costPerYear}</p>}
      <a href={school.school_url}>Website</a>
    </article>
  )
}

export default SchoolCard;

SchoolCard.propTypes = {
  school: PropTypes.object.isRequired,
  costPerYear: PropTypes.number
};
