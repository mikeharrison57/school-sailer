import React, { useEffect, useState } from 'react';
import { fetchIndividualSchool } from '../api-call';
import './SchoolDetailPage.css';

const SchoolDetailPage = ({ schoolName, lists }) => {

  const [individualSchool, setSchool] = useState({});
  const [error, setError] = useState();

  const getSchool = () => {
    fetchIndividualSchool(schoolName)
    .then(data => {
      setSchool([ 
        ...individualSchool,
        ...data.results
      ])
    })
  }
  
  useEffect(() => {
    getSchool();
    clearList()
  }, [schoolName])

  const clearList = () => {
    setSchool({})
  }

  return (
    <>
    {/* {list && */}
      <section className='school-detail-content'>
        {console.log(individualSchool.school.city)}
        <header className='school-header'>
          <h2>{schoolName}</h2>
          {/* <img></img> */}
          {/* <p>{`${individualSchool.school.city}, ${individualSchool.school.state}`}</p> */}
          {/* <a href={individualSchool.school.school_url}>{individualSchool.school.school_url}</a> */}
        </header>
        <section className='primary-info'>
          <article className='degree-categories'>
            {/* <img></img> */}
            <ul>
              <li>Degree Categories:</li>
            </ul>
          </article>
          <article className='cost-info'>
            {/* <img></img> */}
            <ul>
              <li>Cost Info:</li>
            </ul>
          </article>
          <article className='stats'>
            <ul>
              <li>Stats:</li>
            </ul>
          </article>
        </section>
      </section>
      
    </>
  )
}

// - Additional info includes, but isn't limited to: 
// total cost, degrees/programs, retention rate, 
// book costs, cost calculator, and website.

export default SchoolDetailPage;