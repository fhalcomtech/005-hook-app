import React, { useLayoutEffect, useRef, useState } from 'react'
import {useCounter} from "../../hooks/useCounter";
import {useFetch} from "../../hooks/useFetch";

export const Layout = () => {
    const {counter, less, more, reset} = useCounter({initial: 1, increment: 1});
    const refSpamQuote = useRef();
    const {data, loading, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${(counter<1 || counter > 10)?reset():counter}`);
    const {quote} = !loading && data[0];
    const [size, setSize] = useState({width:0, height:0});
    const {width, height} = size;
    useLayoutEffect(() => {
      const {width, height} = refSpamQuote.current.getBoundingClientRect();
      setSize({width, height});
      console.log('Cambio el tamaño: ', width, height);
      return () => {console.log('useLayoutFinalizado');};
    }, [quote]);

  return (
      <>
          <div className="container">
              <h1><span className="badge bg-primary">Layout</span></h1>
          </div>
          <div className="container card-container">
                  <div className="card">
                      <div className="card-body">
                          <p className="card-text"><span className="badge bg-secondary" ref={refSpamQuote}>{(counter%2 === 0)?'1234':'4567'}</span></p>
                          <p className="card-text"><span className="badge bg-secondary">Ancho: {width} Alto: {height}</span></p>
                      </div>
                  </div>
                  <div className="container pt-4">
                    <button className="btn btn-danger" name="btn-prev" onClick={()=>{less()}}>prev</button>
                    <button className="btn btn-primary"  name="btn-next" onClick={()=>{more()}}>next</button>
                  </div>
              </div>
      </>
  )
}