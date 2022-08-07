// import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BeforeFavoriteIcon from '../assets/before-favorite-icon.png';
import FavoriteIcon from '../assets/favorite-icon.png';
import './SchoolCard.css'

const SchoolCard = ({ school, addFavoriteSchools, favorite, costPerYear }) => {

  // const[toggle, setToggle] = useState(false);

  const submitFavorites = () => {
    if (!favorite) {
      favorite = true;  
      addFavoriteSchools(school);
    }
}

  return (
    <article className='school-card'>
      <header>
        <img 
          onClick={() => submitFavorites()}
          src={BeforeFavoriteIcon} 
          alt='before-favorite-icon' 
        />
      </header>
      <h3>Name: {school.name}</h3>
      <p>City: {school.city}, {school.state}</p>
      {costPerYear ? <p>Average Cost of Attendance Per Year: ${costPerYear}</p> : <p>Average Cost of Attendance Per Year: Currently Unavailable</p>}
      {/* <a href={school.school_url}>Website</a> */}
      <Link to={`${school.state}/${school.name}`}>
        <button className='more-info'>See More Info</button>
      </Link>
    </article>
  )
}

export default SchoolCard;

SchoolCard.propTypes = {
  school: PropTypes.object.isRequired,
  costPerYear: PropTypes.number,
  addFavoriteSchools: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired
};
