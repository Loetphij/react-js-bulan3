import useCounterWithToggle from "../hooks/useCounterWithToggle";

export default function CounterWithSwitch() {
    const { count , increment, decrement, reset, isActive, toggle } = useCounterWithToggle(0, false)

    return (
        <div className="counter">
            <h2>Counter: {count}</h2>
            <button onClick={increment} disabled={!isActive}>+</button>
            <button onClick={decrement} disabled={!isActive}>-</button>
            <button onClick={reset}>Reset</button>

            <hr />

            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
            <button onClick={toggle}>{isActive ? 'Matikan Counter' : 'Nyalakan Counter'}</button>
        </div>
    )
}