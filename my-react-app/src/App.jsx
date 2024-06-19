/**
 * useLayoutEffect
 * useLayoutEffect is a hook that is similar to useEffect.
 * The difference is that it fires synchronously after all DOM mutations.
 *
 */

import { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, [toggle]);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Toggle</h1>}
    </>
  );
}

export default App;
