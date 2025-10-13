import React, { useReducer } from "react";

function counterReducer(state, action) {
    switch (action.type) {
        case 'tambah':
            return { count: state.count + 1}
        case 'kurang':
            return { count: state.count - 1}
        case 'reset':
            return { count: 0 }
        default:
            throw new Error()
    }
}

function CounterWithReducer() {
    const [counterState, dispatch] = useReducer(counterReducer, {count: 0})

    return (
        <>
            <h2>Counter dengan useReducer</h2>
            <p>Count: {counterState.count}</p>
            <button onClick={() => dispatch({ type: 'tambah'})}>Tambah</button>
            <button onClick={() => dispatch({ type: 'kurang'})}>Kurang</button>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
        </>
    )
}

export default CounterWithReducer