import React from "react";

export default function UnoptimizedChild({ count }) {
    console.log('UnoptimizedChild telah di-render')
    return <p>Count (Unoptimized): {count}</p>
}