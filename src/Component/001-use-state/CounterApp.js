import React, { useState } from 'react'

export const CounterApp = () => {
  const [counter,setCounter] = useState({counter1: 10, counter2:20});
  const {counter1, counter2} = counter;

  return (
      <>
    <div className="container bg-success">
        <h1 className="text-center pt-2">Counter1: {counter1} </h1>
        <hr/>
        <button className="btn btn-dark" onClick={()=>{setCounter({...counter,counter1:counter1+1})}}>Mas</button>
        <button className="btn btn-dark" onClick={()=>{setCounter({...counter,counter1:counter1-1, })}}>Menos</button>
    </div>

    <div className="container bg-black text-success">
        <h1 className="text-center pt-2">Counter2: {counter2} </h1>
        <hr/>
        <button className="btn btn-success" onClick={()=>{setCounter({...counter, counter2:counter2+1})}}>Mas</button>
        <button className="btn btn-success" onClick={()=>{setCounter({...counter, counter2:counter2-1})}}>Menos</button>
    </div>
    </>
  )
}
