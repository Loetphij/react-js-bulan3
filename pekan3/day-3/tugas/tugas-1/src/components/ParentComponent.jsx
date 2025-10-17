import React, { useState } from "react"
import UnoptimizedChild from "./UnoptimizedChild"
import OptimizedChild from "./OptimizedChild"

export default function ParentComponent() {
  const [parentCount, setParentCount] = useState(0)
  const [otherState, setOtherState] = useState(0)

  console.log("👑 Parent Component di-render")

  return (
    <div className="parent">
      <h2>Demo React.memo tanpa Math.random()</h2>
      <p>Parent Count: {parentCount}</p>
      <p>Other State: {otherState}</p>

      <button onClick={() => setParentCount(parentCount + 1)}>
        + Tambah Parent Count
      </button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State
      </button>

      <hr />

      <UnoptimizedChild count={parentCount + otherState} />
      <OptimizedChild count={parentCount} />
    </div>
  )
}
