import React from 'react'
import {useCounter} from "../../hooks/useCounter";
import {useFetch} from "../../hooks/useFetch";

export const MultipleCustomHook = () => {
    const {counter, less, more, reset} = useCounter({initial: 1, increment: 1});
    const {data, loading, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${(counter<1 || counter > 10)?reset():counter}`);
    const {author, quote, series} = !loading && data[0];
  return (
      <>
          <div className="container">
              <h1><span className="badge bg-primary">MultipleCustomHook</span></h1>
          </div>
          {
              loading ? (<div className="container alert alert-primary">Loading...</div>):( <div className="container card-container">
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title"><span className="badge bg-secondary">{author}</span></h5>
                          <h6 className="card-subtitle mb-2 text-muted"><span className="badge bg-secondary">{series}</span></h6>
                          <p className="card-text">{quote}</p>
                      </div>
                  </div>
                  <div className="container pt-4">
                    <button className="btn btn-danger" name="btn-prev" onClick={()=>{less()}}>prev</button>
                    <button className="btn btn-primary"  name="btn-next" onClick={()=>{more()}}>next</button>
                  </div>
              </div>)
          }
      </>
  )
}