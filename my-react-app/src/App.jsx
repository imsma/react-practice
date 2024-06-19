// React.js useCallback Hook:
// The useCallback hook is a hook that will return a memoized version of the callback function
// that only changes if one of the dependencies has changed.

import { useState } from "react";
import PrintTable from "./PrintTable";

function App() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const cssStyle = {
    backgroundColor: darkTheme ? "#333" : "#FFF",
    color: darkTheme ? "#FFF" : "#333",
  };

  const calculateTable = () => {
    console.log("calculating Table");
    return [
      number * 1,
      number,
      number * 3,
      number * 4,
      number * 5,
      number * 6,
      number * 7,
      number * 8,
      number * 9,
      number * 10,
    ];
  };

  return (
    <>
      <div style={cssStyle}>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.valueAsNumber);
          }}
        />
        <PrintTable calculateTable={calculateTable} />
        <button onClick={() => setDarkTheme(!darkTheme)}>Toggle</button>
      </div>
    </>
  );
}

export default App;
