import { useState } from "react";

/**
 * Updater function
 *
 *  A function that receives the previous state and props as arguments and returns a new state.
 *  e,g setMonth(m => m + 1)
 *  Used with multiple state updates in a single function and asynchronous updates.
 *  It's a good practice to use the updater function to update the state.
 *
 */

function MyComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function decrement() {
    // setCount(count - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
    // setCount((c) => (c = 0));
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default MyComponent;
