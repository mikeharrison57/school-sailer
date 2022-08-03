import React, { useState } from 'react';
import stateArrays from './state-arrays';

const StateSelectionForm = () => {

  const [name, setName] = useState('')
  const [state, setState] = useState('')

  const stateOptions = stateArrays.map((stateArray) => {
    return (
      <option value={stateArray[1]}>{stateArray[0]}</option>
    )
  })

  

  return (
    <form className='state-form'>
      <input
        type='text'
        placeHolder='Name'
        onChange={event => setName(event.target.value)}
        required
      />
      <select onChange={event => setState(event.target.value)} required>
        {stateOptions}
      </select>
    </form>
  )

}

export default StateSelectionForm;