import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = ({increment = 1}) => {
  const{counter, more, less, reset} = useCounter({initian:100, increment});
  return (

    <>
        <h1>
            CounterWithCustomHook
        </h1>
        <div className="container bg-dark text-white">
            <h3>Counter: {counter}</h3>
            <button className="btn btn-success m-3" onClick={()=>{more(increment)}}>More</button>
            <button className="btn btn-secondary m-3" onClick={()=>{reset(increment)}}>Reset</button>
            <button className="btn btn-danger m-3" onClick={()=>{less(increment)}}>Lesson</button>
        </div>
    </>
  )
}
