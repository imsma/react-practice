/**
 * useLayoutEffect
 * useLayoutEffect is a hook that is similar to useEffect.
 * The difference is that it fires synchronously after all DOM mutations.
 *
 * Here is order of execution:
 * 1. React calculates the changes that need to be made to the DOM.
 * 2. useLayoutEffect runs synchronously
 * 3. React prints changes to the DOM
 * 4. useEffect runs asynchronously
 *
 * Most common use case of useLayoutEffect:
 * 1. If you need to measure a DOM node
 * 2. If you need to animate a DOM node
 * 3. If you need to do something with the DOM before React renders
 * 5. If you need to do something with the DOM before the user sees the changes
 * 6. If you need to do something with the DOM before the user interacts with the changes
 *
 */

import { useEffect, useState, useLayoutEffect, useRef } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  // useLayoutEffect will always run first before useEffect.

  useEffect(() => {
    console.log("useEffect");
    // if (textRef.current != null) {
    //   const dimensions = textRef.current.getBoundingClientRect();
    //   console.log(dimensions);
    //   textRef.current.style.paddingTop = `${dimensions.height}px`;
    // }
  }, [toggle]);

  useLayoutEffect(() => {
    // console.log("useLayoutEffect");
    if (textRef.current != null) {
      const dimensions = textRef.current.getBoundingClientRect();
      console.log(dimensions);
      textRef.current.style.paddingTop = `${dimensions.height}px`;
    }
  }, [toggle]);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1 ref={textRef}>Toggle</h1>}
    </>
  );
}

export default App;
