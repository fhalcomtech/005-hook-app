import React, {useEffect} from "react";

export const Message = ({text}) => {
    useEffect(() => {
        return () => {
            console.log('good level');
        };
    }, []);

    return (<>
        <h1>Que mas {text}</h1>
    </>);
}