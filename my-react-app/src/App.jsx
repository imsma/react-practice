// React.js useCallback Hook:
// The useCallback hook is a hook that will return a memoized version of the callback function
// that only changes if one of the dependencies has changed.

import { useCallback, useState } from "react";
import PrintTable from "./PrintTable";

function App() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const cssStyle = {
    backgroundColor: darkTheme ? "#333" : "#FFF",
    color: darkTheme ? "#FFF" : "#333",
  };

  const calculateTable = useCallback(
    (val) => {
      const newNumber = number + val;
      return [
        newNumber * 1,
        newNumber * 2,
        newNumber * 3,
        newNumber * 4,
        newNumber * 5,
        newNumber * 6,
        newNumber * 7,
        newNumber * 8,
        newNumber * 9,
        newNumber * 10,
      ];
    },
    [number]
  );

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
