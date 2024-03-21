import React, {useState} from "react";

function Counter() {
    // let count = 7
    const [count, setCount] = useState(7);
    // count: stateVariable (initialized state variable)
    // setCount: setStateVariable (mutator function allowing update in state variable)
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button
                onClick={() => {
                    setCount(count + 1)
                    console.log(count);
                }}>
                Up
            </button>
            <button
                onClick={() => {
                    setCount(count - 1);
                    console.log(count);
                }}>
                Down
            </button>
        </div>
    );
}

export default Counter;
