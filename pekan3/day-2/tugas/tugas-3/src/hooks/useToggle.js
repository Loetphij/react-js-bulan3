import {useState} from 'react'

export default function useToggle() {
    const [value, setValue] = useState(0)
    const toggle = () => setValue((prev) => !prev)
    
    return [value, toggle]
}