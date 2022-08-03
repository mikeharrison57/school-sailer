import React, { useState } from 'react';

const StateSelectionForm = () => {

  const [name, setName] = useState('')
  const [state, setState] = useState('')

  // const stateOptions =

  return (
    <form className='state-form'>
      <input
        type='text'
        placeHolder='Name'
        onChange={event => setName(event.target.value)}
        required
      />
      <select onChange={event => setName(event.target.value)} required>

       
      
      </select>
    </form>
  )

}

export default StateSelectionForm;