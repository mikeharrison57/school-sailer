import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BeforeFavoriteIcon from '../assets/before-favorite-icon.png';
import FavoriteIcon from '../assets/favorite-icon.png';
import University from '../assets/university.gif';
import './SchoolCard.css'

const SchoolCard = ({ school, addFavoriteSchools, costPerYear, favoriteSchools }) => {

  const submitFavorites = () => {
    addFavoriteSchools(school);
  }

  return (
    <article className='school-card'>
      <header className='card-header'>
        <img
          className='favorite-button' 
          onClick={() => submitFavorites()}
          src={favoriteSchools ? BeforeFavoriteIcon : FavoriteIcon} 
          alt='before-favorite-icon' 
        />
        <img className='school-gif' src={University} />
      </header>
      <h3>Name: {school.name}</h3>
      <p>City: {school.city}, {school.state}</p>
      {costPerYear ? <p>Average Cost of Attendance Per Year: ${costPerYear}</p> : <p>Average Cost of Attendance Per Year: Currently Unavailable</p>}
      <a className='website' href={school.school_url}>Website</a>
      <div>
        <Link to={`${school.state}/${school.name}`}>
          <button className='more-info'>See More Info</button>
        </Link>
      </div>
    </article>
  )
}

export default SchoolCard;

SchoolCard.propTypes = {
  school: PropTypes.object.isRequired,
  costPerYear: PropTypes.number,
  addFavoriteSchools: PropTypes.func,
  favoriteSchools: PropTypes.array
};
