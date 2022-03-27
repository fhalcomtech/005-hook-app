import { useState } from "react";

export const useCounter = ({initial = 0, increment=1}) => {
 const [counter, setCounter] = useState(initial);
 const more = () => (setCounter(counter+increment));
 const less = () => (setCounter(counter-increment));
 const reset = () => (setCounter(initial));
 return ({counter,more,less,reset});
}
