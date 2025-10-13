import React, { useState } from "react";

function CounterStateSharing() {
const [count, setCount] = useState(0)

const increment = () => setCount(prev => prev + 1)
const decrement = () => setCount(prev => prev - 1)

return (
    <div style={{ textAlign: "center", padding: "20px" }}>
        <p style={{textAlign: "left"}}>3. State Sharing</p>
        <h2>Counter dengan State Sharing</h2>
        <CounterControls onIncrement={increment} onDecrement={decrement} />
        <CounterDisplay count={count} />
    </div>
)
}

function CounterControls({ onIncrement, onDecrement }) {
return (
    <div>
    <button onClick={onDecrement} style={{ marginRight: "10px" }}>
        -
    </button>
    <button onClick={onIncrement}>+</button>
    </div>
)
}

function CounterDisplay({ count }) {
return (
    <p style={{ marginTop: "10px" }}>
    Count: {count}
    </p>
)
}

export default CounterStateSharing
