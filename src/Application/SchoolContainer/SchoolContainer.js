import React from 'react';
import SchoolCard from '../SchoolCard/SchoolCard'

const SchoolContainer = ({ lists }) => {

  const schoolCards = lists.map((list) => {
    console.log(list.latest.cost.avg_net_price.overall)
    return (
      <SchoolCard 
        key={list.id} 
        school={list.latest.school} 
        costPerYear={list.latest.cost.avg_net_price.overall}
      />
    )
  })
  
  return (
    <section>
      {schoolCards}
    </section>

  )
}

export default SchoolContainer;