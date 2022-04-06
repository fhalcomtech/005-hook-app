import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
    const {counter, more} = useCounter({initial:0, increment:5});
    const [show,setShow] = useState(true);
  return (
      <div>

    <h1>Counter: <Small  value={counter}/></h1>
    <button
    className='btn btn-outline-warning'
    onClick={more}>
        more
        </button>
  
   <button
   className={`btn btn-outline-${show?'dark':'danger'}`}
   onClick={()=>{setShow(!show);}}>
       show/hide
       </button>

  </div>
  )
}
