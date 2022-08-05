import React, { useState } from 'react';

const SchoolDetailPage = ({ listId }) => {
  console.log(listId)
  return (
    <section className='school-detail-page'>
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