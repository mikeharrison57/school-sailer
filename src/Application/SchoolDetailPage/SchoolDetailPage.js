import React, { useEffect, useState } from 'react';
import { fetchIndividualSchool } from '../api-call';
import './SchoolDetailPage.css';

const SchoolDetailPage = ({ schoolName, lists }) => {

  const [individualSchool, setSchool] = useState({});
  // const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const getSchool = async () => {
    const resp = await fetchIndividualSchool(schoolName)
      .then((data) => {
        console.log(data.results[0])
        setSchool({
          ...data.results[0],
          ...individualSchool
        })
      })
    // console.log(resp.results)
    console.log('setstate', 'line 18')
  }
  
  //   fetchIndividualSchool(schoolName)
  //   .then(data => {
  //     setSchool({ 
  //       ...individualSchool,
  //       ...data.results[0]
  //     })
  //   })

  useEffect(() => {
    getSchool();
    // clearList()
  }, [schoolName], [])

  // useEffect(() => {
  //   getSchool();
  // }, [])
  if (!individualSchool.school) {
    return (
      <h2>LOADING...</h2>
    )
  } else {
    return (
      <>
      {/* {individualSchool === undefined ? <h2>LOADING...</h2> : */}
        <section className='school-detail-content'>
          {console.log(individualSchool.school)}
          <header className='school-header'>
            <h2>{schoolName}</h2>
            {/* <img></img> */}
            <p>{`${individualSchool.school.city}, ${individualSchool.school.state}`}</p>
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
        {/* } */}
      </>
    )
  }
}

// - Additional info includes, but isn't limited to: 
// total cost, degrees/programs, retention rate, 
// book costs, cost calculator, and website.

export default SchoolDetailPage;