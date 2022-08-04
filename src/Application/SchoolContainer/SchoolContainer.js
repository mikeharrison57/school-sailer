import React from 'react';
import SchoolCard from '../SchoolCard/SchoolCard'

const SchoolContainer = ({ lists }) => {

  const schoolCards = lists.map((list) => {
    console.log(list.latest.school)
    return (
      <SchoolCard key={list.id} school={list.latest.school} />
    )
  })
  
  return (
    <section>
      {schoolCards}
    </section>

  )
}

export default SchoolContainer;