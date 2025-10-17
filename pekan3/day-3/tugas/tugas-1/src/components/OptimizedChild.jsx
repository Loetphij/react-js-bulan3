import React from "react";

const OptimizedChild = React.memo(function OptimizedChild({ count }) {
    console.log('OptimizedChild telah di-render')
    return <p>Count (Optimized): {count}</p>
})

export default OptimizedChild