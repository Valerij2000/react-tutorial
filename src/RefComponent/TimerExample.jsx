import { useRef } from "react";

/**
 * 
 * @returns 2. Storing mutable values without triggering a re-render
Unlike useState, changing a ref.current value does NOT cause a re-render. Super useful for tracking things like:

timers

scroll positions

previous values

interaction counters

whether a component is mounted

useRef(0) starts at zero

countRef.current holds the count

But no re-render happens, even when you click
 */

function TimerExample() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Clicked", countRef.current, "times");
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default TimerExample;
