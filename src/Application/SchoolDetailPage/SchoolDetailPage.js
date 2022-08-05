import React, { useEffect, useState } from 'react';

const SchoolDetailPage = ({ schoolName, lists }) => {

  const [school, setSchool] = useState({});

  const getSchool = () => {
    const selectedSchool = lists.find(list => list.latest.school.name === schoolName);
    const updatedSchool = {...selectedSchool};
    setSchool( school => ({
      ...school,
      ...updatedSchool
    }));
  }

  useEffect(() => {
    getSchool();
  }, [lists, schoolName])

  
  return (
    <section className='school-detail-page'>
      {console.log(school)}
      <header className='school-header'>
        <h2>School Name:</h2>
        {/* <img></img> */}
        <p>City:</p>
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
  )
}

// - Additional info includes, but isn't limited to: 
// total cost, degrees/programs, retention rate, 
// book costs, cost calculator, and website.

export default SchoolDetailPage;