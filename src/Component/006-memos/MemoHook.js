import React, {useMemo, useState} from 'react'
import { useCounter } from '../../hooks/useCounter'

const MemoHook = () => {
    const {counter, more} = useCounter({initial:500, increment:5});
    const [show,setShow] = useState(true);

    const procesoPesado = (iterations) =>
    {
        for(let i = 0; i < iterations ; i++) console.log('Corriendo Proceso Pesado...');
        return `${iterations} iterations has been made`;
    }

    const procesoPesadoMemo = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>

            <h2>Counter: {counter}</h2>
            <p>{procesoPesadoMemo}</p>
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


export default MemoHook;