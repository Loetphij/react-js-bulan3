import useCounter from "./useCounter";
import useToggle from "./useToggle";

export default function useCounterWithToggle() {
    const counter = useCounter(0)
    const [isActive, toggle] = useToggle(false)

    const safeIncrement = () => {
        if (isActive) counter.increment();
    };

    const safeDecrement = () => {
        if (isActive) counter.decrement();
    };

    const safeReset = () => counter.reset();

    return {
        count: counter.count,
        increment: safeIncrement,
        decrement: safeDecrement,
        reset: safeReset,
        isActive,
        toggle,
    };
}