import React, { useState } from 'react';
import SchoolCard from '../SchoolCard/SchoolCard';

const FavoriteSchools = ({ favoriteSchools }) => {

  // const [favorites, setFavorites] = 
  const returnFavoriteSchoolCards = () => {
    const favoriteSchoolCards = favoriteSchools.map((list) => {
      return (
        <SchoolCard 
          key={Math.random()} 
          school={list.latest.school}
          costPerYear={list.latest.cost.attendance.academic_year}
        />
      )
    })
    return favoriteSchoolCards
  }

  return (
    <section>
      {returnFavoriteSchoolCards()}
    </section>
  )


}


export default FavoriteSchools;