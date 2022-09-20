import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Budget() {
  const { budget } = useContext(AppContext);

  return ( 
    <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
        <span>Budget: £{budget}</span>
    </div>
  )
}

export default Budget