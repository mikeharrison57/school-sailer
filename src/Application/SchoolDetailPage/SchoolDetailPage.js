import React, { useEffect, useState } from 'react';
import './SchoolDetailPage.css';

const SchoolDetailPage = ({ schoolName, lists }) => {

  const [list, setList] = useState({});

  const getSchool = () => {
    const selectedList = lists.find(list => list.latest.school.name === schoolName);
    const updatedList = {...selectedList};
    setList( list => ({
      ...list,
      ...updatedList
    }));
  }
  
  useEffect(() => {
    getSchool();
    // clearList()
  }, [lists, schoolName])

  // const clearList = () => {
  //   setList({})
  // }

  return (
    <>
    {/* {list && */}
      <section className='school-detail-content'>
        {/* {console.log(list.school.city)} */}
        <header className='school-header'>
          <h2>{schoolName}</h2>
          {/* <img></img> */}
          {/* <p>{`${list.school.city}, ${list.school.state}`}</p> */}
          {/* <a href={list.school.school_url}>{list.school.school_url}</a> */}
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