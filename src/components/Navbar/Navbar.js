import React from 'react';
import { Link } from 'react-router-dom';
import SailBoat from '../assets/sailboat.png';
import HomeIcon from '../assets/home-icon.png';
import Favorites from '../assets/favorites-navbar.png';
import './Navbar.css'

const NavBar = () => {
  return (
    <header className='navbar'>
      <article className='heading'>
        <img 
          className='sailboat' 
          src={SailBoat} 
          alt='sailboat' 
        />
        <h1>School Sailor</h1>
      </article>
      <article className='user-instruction'>
        <h2>Set sail on a school adventure today ⛵</h2>
        <h3>Pick a state to get started!</h3>
      </article>
      <article className='home-favorites'>
        <Link to='/'>
          <div className='home-container'> 
            <img
              className='home' 
              src={HomeIcon}
            /> 
            <label>Home</label>
          </div>
        </Link>
        <Link to='/state/chosen/favorites'>
          <div className='favorites-container'>
            <img
              className='favorites' 
              src={Favorites}
            />
            <label>Favorites</label>
          </div>
        </Link>
      </article>
    </header>
  )
}

export default NavBar;