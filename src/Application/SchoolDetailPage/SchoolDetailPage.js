import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchIndividualSchool } from '../api-call';
import './SchoolDetailPage.css';

const SchoolDetailPage = ({ schoolName }) => {

  const [individualSchool, setSchool] = useState({});
  // const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const getSchool = async () => {
    fetchIndividualSchool(schoolName)
      .then((data) => {
        setSchool({
          ...data.results[0],
          ...individualSchool
        })
      })
    }
  
  useEffect(() => {
    getSchool();
  }, [schoolName])

  const filterSchoolPrograms = () => {
    const filteredPrograms = individualSchool.latest.programs.cip_4_digit.reduce((progArr, program) => {
      if (!progArr.includes(program.title)) {
        progArr.push(program.title)
      }
      return progArr
    }, [])
    return filteredPrograms
  }

  const getSchoolPrograms = () => {
    const listedSchoolPrograms = filterSchoolPrograms().map((program) => {
      return (
        <li>{program}</li>
      )
    })
    return listedSchoolPrograms
  }

  if (!individualSchool.school) {
    return (
      <h2>LOADING...</h2>
    )
  } else {
    return (
      <>
        <section className='school-detail-content'>
          {/* {console.log(individualSchool.latest.programs.cip_4_digit)} */}
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
                <p>Programs Offered:</p>
                {getSchoolPrograms()}
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
                {individualSchool.latest.admissions.admission_rate.overall ? <li>Admission Rate: {individualSchool.latest.admissions.admission_rate.overall * 100} %</li> 
                : <li>Admission Rate: Currently Unavailable</li>}
                {/* <li>Retention Rate:</li> */}
                
              </ul>
            </article>
          </section>
        </section>
        {/* } */}
      </>
    )
  }
}

// retention rate, 
// cost calculator, and website.

export default SchoolDetailPage;

SchoolDetailPage.propTypes = {
  schoolName: PropTypes.string.isRequired
};