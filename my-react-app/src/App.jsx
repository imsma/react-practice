import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  return { count: state.count + 1 };
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseCount = () => {
    dispatch();
  };

  const decreaseCount = () => {};

  return (
    <>
      <h2>Count = {state.count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  );
}

export default App;
