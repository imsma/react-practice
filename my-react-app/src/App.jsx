// useMemo in React:
// useMemo is a React hook that memorizes the output of a function
// and returns the cached result when the same inputs occur again.
// This can help in optimizing the performance of the application.

import { useState } from "react";

function App() {
  // in following code expensiveFunction will be excecuted
  // on every rener of the component
  // When we toggle the dark mode, the component re-renders,
  // and the expensiveFunction is called again.
  // Howver we only need to run the expensiveFunction when the number changes.
  // We can use useMemo to optimize this.
  //

  const [number, setNummber] = useState(0);
  const [dark, setDark] = useState(false);

  const calculation = expensiveFunction(number);
  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <div style={cssStyle}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNummber(e.target.valueAsNumber)}
        />
        <h2>Calculation: {calculation}</h2>
        <button onClick={() => setDark(!dark)}>Toggle</button>
      </div>
    </>
  );
}

function expensiveFunction(number) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

export default App;
