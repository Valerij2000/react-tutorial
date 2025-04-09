import React, { useState, useEffect } from "react";

/**
 * ?info:
 * This component demonstrates the use of useEffect hook.
 * useEffect hook is used to perform side effects in functional components.
 * It takes two arguments: the effect function and an array of dependencies.
 * Examples:
 *  - updating the document title
 *  - fetching data from an API
 *  - cleaning up resources (e.g., closing a subscription)
 *  - subscribing to events (e.g., listening to window resize)
 *  - optimizing performance (e.g., using memoization)
 *  - updating the DOM (e.g., rendering a chart)
 *  - managing state (e.g., updating state based on props)
 *
 *  useEffect(() => {}) //? runs after every render
 *
 *  useEffect(() => {), [])) //? runs only once when component mounts
 *
 *  useEffect(() => {}, [value]); //? updated only when dependency changes
 */

function EffectComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  const COLORS = ["red", "blue", "green", "yellow", "purple"];

  //* (1)
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }); // ? runs every re-render (e.g., updating the document title)

  //* (2)
  // useEffect(() => {
  // document.title = `My counter program`;
  // }, []); // ? runs only once when component mounts (i.e., useEffect runs only once when component mounts)

  //* (3)
  useEffect(() => {
    console.log(`You clicked`);
    document.title = `You clicked ${count} times`;
  }, [count]); //? runs only when count changes (i.e., useEffect runs only when count changes)

  const handleIncrementCounts = () => {
    setCount(count + 1);
  };

  const handleDecrementCounts = () => {
    setCount(count - 1);
  };

  const handleChangeColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    setColor(COLORS[randomIndex]);
  };

  return (
    <div className="center m-3">
      <p>count = {count}</p>
      <div className="d-inline-flex p-2 bd-highlight gap-3">
        <button className="btn btn-primary" onClick={handleIncrementCounts}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={handleDecrementCounts}>
          Decrement
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleChangeColor}
          style={{ background: color, color: "white", border: "none" }}
        >
          Change color
        </button>
      </div>
    </div>
  );
}

export default EffectComponent;
