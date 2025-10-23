interface CounterProps {
    count: number
    handleAdd: () => void
    handleMinus: () => void
    reset: () => void
}

export default function Counter({ count, handleAdd, handleMinus, reset } : CounterProps) {
    return (
        <>
            <div style={{ display: "flex", gap: "15px"}}>
                <p>Count : {count}</p>
                <button onClick={handleAdd}>Tambah</button>
                <button onClick={handleMinus}>Kurang</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}