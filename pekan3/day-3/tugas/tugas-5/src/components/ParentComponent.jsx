import React, { useState } from "react"
import FastComponent from "./FastComponents"
import SlowComponent from "./SlowComponents"

export default function ParentComponent() {
    const [count, setCount] = useState(0)
    const [multiplier, setMultiplier] = useState(1) 

    console.log("ParentComponent di-render")

    return (
        <div>
            <h2>Contoh Performance Profiling</h2>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah Counter</button>

            <p>Multiplier: {multiplier}</p>
            <button onClick={() => setMultiplier(multiplier + 1)}>Tambah Multiplier</button>

            <hr />

            <FastComponent />
            <SlowComponent multiplier={multiplier} />
        </div>
    )
}
