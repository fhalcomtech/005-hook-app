import React, {useCallback, useState} from 'react';
import {Small} from "./Small";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const increment =
    useCallback(
        () => {setCounter(c=>c+1);},
        [setCounter]
    );
    
    return (
        <div>
            <h1>UseCallback Counter: {counter}</h1>
            <ShowIncrement increment={increment}/>
        </div>
    );
};

export default CallbackHook;
