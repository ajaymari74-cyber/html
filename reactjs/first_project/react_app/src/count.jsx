import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    let hi = () => {
        setCount(count + 1);
    };
    return (
        <>
            <h1>I'm Counter</h1>
         
            <button onClick={hi}>click me ({count})</button>
        </>
    );
}



export default Counter;
