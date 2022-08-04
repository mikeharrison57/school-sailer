import React from 'react';

const SchoolCard = ({ school, costPerYear }) => {
  // const averageCostPerYear =

  return (
    <article>
      <img></img>
      <h3>Name: {school.name} </h3>
      <p>City: {school.city}, {school.state} </p>
      {costPerYear && <p>Average Cost of Attendance Per Year: ${costPerYear}</p>}
      <a href={school.school_url}>Website</a>
    </article>
  )
}

export default SchoolCard;