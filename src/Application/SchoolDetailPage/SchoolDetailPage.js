import React, { useEffect, useState } from 'react';
import { fetchIndividualSchool } from '../api-call';
import './SchoolDetailPage.css';

const SchoolDetailPage = ({ schoolName, lists }) => {

  const [individualSchool, setSchool] = useState({});
  // const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const getSchool = async () => {
    fetchIndividualSchool(schoolName)
      .then((data) => {
        console.log(data.results[0])
        setSchool({
          ...data.results[0],
          ...individualSchool
        })
      })
    }
  
  useEffect(() => {
    getSchool();
  }, [schoolName])

  // const schoolCosts = {
  //   totalAvgPerYear: individualSchool.latest.cost.avg_net_price.overall,
  // }

  if (!individualSchool.school) {
    return (
      <h2>LOADING...</h2>
    )
  } else {
    return (
      <>
        <section className='school-detail-content'>
          {console.log(individualSchool.latest.cost.roomboard.oncampus)}
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
              <p>Average Costs:</p>
              <ul>
                {individualSchool.latest.cost.tuition.in_state ? <li>Tuition: ${individualSchool.latest.cost.tuition.in_state}</li> 
                : <li>Tuition: Currently Unavailable</li>}
                {individualSchool.latest.cost.booksupply ? <li>Books: ${individualSchool.latest.cost.booksupply}</li> 
                : <li>Books: Currently Unavailable</li>}
                 {individualSchool.latest.cost.roomboard.oncampus? <li>Campus Housing: ${individualSchool.latest.cost.roomboard.oncampus}</li> 
                : <li>Campus Housing: Currently Unavailable</li>}
              </ul>
            </article>
            <article className='stats'>
              <p>Statistics:</p>
              <ul>
                <li>Graduation Rate:</li>
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