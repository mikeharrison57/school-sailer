import React from 'react';
import PropTypes from 'prop-types';
import './SchoolCard.css'
import { Link } from 'react-router-dom';

const SchoolCard = ({ school, costPerYear }) => {
  return (
    <Link to={`${school.state}/${school.name}`}>
      <article className='school-card'>
        <img></img>
        <h3>Name: {school.name} </h3>
        <p>City: {school.city}, {school.state} </p>
        {costPerYear && <p>Average Cost of Attendance Per Year: ${costPerYear}</p>}
        {/* <a href={school.school_url}>Website</a> */}
      </article>
    </Link>
  )
}

export default SchoolCard;

SchoolCard.propTypes = {
  school: PropTypes.object.isRequired,
  costPerYear: PropTypes.number
};
