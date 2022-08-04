import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { states } from './state-arrays';
import { NavLink } from 'react-router-dom';
import './StateSelectionForm.css';

const StateSelectionForm = ({ getSchoolsByState }) => {

  const [name, setName] = useState('')
  const [state, setState] = useState('')
  console.log(state, 'state, form line 23')

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
    // event.preventDefault();
    getSchoolsByState(state);
  }

  // const clearInput = () => {
  //   setName('');
  // }

  // useEffect((event) => {
  //   submitStateInput(event)
  // }, [state])

  return (
    <section className='form-section'>
        <form className='state-form'>
          <input
            type='text'
            placeholder='Name'
            onChange={event => setName(event.target.value)}
            required
          />
          <select value={state} onChange={event => setState(event.target.value)} required>
            {selectState()}
          </select>
          <NavLink to={`/${state}`}>
                <button onClick={() => submitStateInput()}>SUBMIT</button>
          </NavLink>
        </form>
        {name && state ? <p>{`Welcome ${name}! Set sail on a school adventure today ⛵️`}</p> : <p></p>}
    </section>
  )
}

export default StateSelectionForm;

StateSelectionForm.propTypes = {
  getSchoolsByState: PropTypes.func.isRequired
};