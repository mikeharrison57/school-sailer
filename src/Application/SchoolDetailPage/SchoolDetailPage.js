import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchIndividualSchool } from '../utils/api-call';
import University from '../assets/university.gif';
import Books from '../assets/books.gif';
import MathIcon from '../assets/math.gif';
import Science from '../assets/science.gif';
import Geography from '../assets/geography.gif';
import MoneyBag from '../assets/money-bag.gif';
import Error from '../Error/Error'
import './SchoolDetailPage.css';

const SchoolDetailPage = ({ schoolName }) => {

  const [individualSchool, setSchool] = useState({});
  const [error, setError] = useState(false);
  
  const getSchool = async () => {
    fetchIndividualSchool(schoolName)
      .then((data) => {
        setSchool({
          ...data.results[0],
          ...individualSchool
        })
      })
      .catch((error) => {
        console.log(error)
        setError(true)
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
        <li className='programs-offered' key={Math.random()}>{program}</li>
      )
    })
    return listedSchoolPrograms
  }

  if (error) {
    return <Error />
  } else {
    return (
      <>
        {!individualSchool.school ?  <h2>LOADING...</h2> : 
        <section className='school-detail-content'>
          <header className='school-header'>
            <img className='school-gif' src={University} />
            <h2>{schoolName}</h2>
            <p>City: {`${individualSchool.school.city}, ${individualSchool.school.state}`}</p>
            <a href={individualSchool.school.school_url}>{individualSchool.school.school_url}</a>
          </header>
          <section className='primary-info'>
            <article className='degree-categories'>
                <div className='program-heading-container'>
                  <p className='program-heading'>Programs Offered</p>
                  <img className='major-icons' src={MathIcon} />
                  <img className='major-icons' src={Science} />
                  <img className='major-icons' src={Geography} />
                  <img className='major-icons' src={Books} />
                </div>
              <ul>
                {getSchoolPrograms()}
              </ul>
            </article>
            <article className='cost-info'>
              <div className='cost-header'>
                <p>Average Costs</p>
                <img className='money-bag' src={MoneyBag} />
              </div>
              <ul>
                {individualSchool.latest.cost.tuition.in_state ? <li>Tuition: ${individualSchool.latest.cost.tuition.in_state}</li> 
                : <li>Tuition: Currently Unavailable</li>}
                {individualSchool.latest.cost.booksupply ? <li>Books: ${individualSchool.latest.cost.booksupply}</li> 
                : <li>Books: Currently Unavailable</li>}
                 {individualSchool.latest.cost.roomboard.oncampus? <li>Campus Housing: ${individualSchool.latest.cost.roomboard.oncampus}</li> 
                : <li>Campus Housing: Currently Unavailable</li>}
              </ul>
            </article>
          </section>
        </section>}
      </>
    )
  }
}

export default SchoolDetailPage;

SchoolDetailPage.propTypes = {
  schoolName: PropTypes.string.isRequired
};