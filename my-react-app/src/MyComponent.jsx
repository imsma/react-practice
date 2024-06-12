import { useState, useEffect } from "react";

/**
 * useEffect is a hook that allows you to perform
 * side effects in function components.
 *
 * useEffect is a function that takes a callback function
 * as its first argument and an array of dependencies as its
 * second argument.
 *
 * The callback function is called after the component is
 * rendered for the first time and after every update.
 *
 * The array of dependencies is used to specify the values
 * that the callback function depends on. If the values in
 * the array change, the callback function is called again.
 *
 * If the array of dependencies is empty, the callback function
 * is called only after the first render.
 *
 * The callback function can return a cleanup function that
 * is called before the component is unmounted.
 *
 * Syntax:
 * useEffect(callback, [dependencies]);
 *
 * Example:
 * 1. Called after every render
 *  useEffect(() => {})
 * 2. Called only after the first render (on mount)
 *  useEffect(() => {}, [])
 * 3. Called after the first render (mount)
 *    and when value1 or value2 changes
 * useEffect(() => {}, [value1, value2])
 *
 */

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  //Called after every render
  //   useEffect(() => {
  //     document.title = `Count: ${count}`;
  //   });

  // only on first render (on mount)
  //   useEffect(() => {
  //     document.title = `Count: ${count}`;
  //   }, []);

  // on first render (mount) + on value change
  useEffect(() => {
    document.title = `Count: ${count} , ${color}`;

    return () => {
      // Some cleanup code
    };
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function toggleColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
}

export default MyComponent;
