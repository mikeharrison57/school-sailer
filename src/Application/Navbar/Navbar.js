import React from 'react';
import './Navbar.css'

const NavBar = () => {
  return (
    <header className='navbar'>
      <article>
        <h1>School Sailor</h1>
      </article>
      <article>
        <button>HOME</button>
        <button>FAVORITES</button>
      </article>
    </header>
  )
}

export default NavBar;