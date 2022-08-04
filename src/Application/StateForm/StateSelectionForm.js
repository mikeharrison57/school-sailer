import React, { useState } from 'react';
import { stateArrays } from './state-arrays';

const StateSelectionForm = ({ getSchoolsByState }) => {

  const [name, setName] = useState('')
  const [state, setState] = useState('')

  const selectState = () => {
    const stateOptions = stateArrays[1].stateAbbs.map((stateAbb) => {
      return (
        <option value={stateAbb}>{stateAbb}</option>
      )
    })
    return stateOptions
    }

  const submitStateInput = event => {
    event.preventDefault();
    getSchoolsByState(state);
  }

  return (
    <section>
    <form className='state-form' onSubmit={event => submitStateInput(event)}>
      <input
        type='text'
        // placeHolder='Name'
        onChange={event => setName(event.target.value)}
        required
      />
      <select onChange={event => setState(event.target.value)} required>
        {selectState()}
      </select>
      <button type='submit'>SUBMIT</button>
    </form>
      <p>{`Welcome ${name}! Set sail on a school adventure today ⛵️`}</p>
    </section>
  )

}

export default StateSelectionForm;