import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { states } from './state-arrays';
import { Link } from 'react-router-dom';
import './StateSelectionForm.css';

const StateSelectionForm = ({ getSchoolsByState }) => {

  const [state, setState] = useState('');
  
  const selectState = () => {
    const stateOptions = states.map((state) => {
      const splitStates = state.split(':')
      return (
        <option key={Math.random()} value={splitStates[1]}>{splitStates[0]}</option>
      )
    })
    return stateOptions
    }

  const submitStateInput = () => {
    if (!state) {
      alert('Please select a valid state!')
    }
    getSchoolsByState(state);
  }
  
  return (
    <section className='form-section'>
        <form className='state-form'>
          <select value={state} onChange={event => setState(event.target.value)} required>
            <option value=''>--Please Select A State--</option>
            {selectState()}
          </select>
          <Link to={`/${state}`}>
            <button className='state-button' onClick={() => submitStateInput()}>SUBMIT</button>
          </Link>
        </form>
    </section>
  )
}

export default StateSelectionForm;

StateSelectionForm.propTypes = {
  getSchoolsByState: PropTypes.func.isRequired
};