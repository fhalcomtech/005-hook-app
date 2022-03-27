import React, { useState } from 'react'

export const CounterApp = () => {
  const [counterX, setCounter] = useState({counter1:5, counter2:10});
  const {counter1, counter2} = counterX;
  return (
      <>
        <h1>CounterApp</h1>
        <div className='container bg-black text-danger'>
            <h2>Counter1: {counter1}</h2>
            <button className='btn  m-3 btn-danger' onClick={()=>{setCounter({counter1:(counter1+1), ...counter})}}>+</button>
            <button className='btn  m-3 btn-danger' onClick={()=>{setCounter({counter1:(counter1-1), ...counter})}}>-</button>  
        </div>
        <div className='container bg-danger'>
        <h2>Counter2: {counter2}</h2>
        <button className='btn m-3 btn-dark'>+</button>
        <button className='btn m-3 btn-dark'>-</button> 
        </div>
      </>
  )
}
