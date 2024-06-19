import { useReducer } from "react";

const ACTION = {
  INCREASE_COUNT: "INCREASE_COUNT",
  DECREASE_COUNT: "DECREASE_COUNT",
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREASE_COUNT:
      return { count: state.count + 1 };
    case ACTION.DECREASE_COUNT:
      return { count: state.count - 1 };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseCount = () => {
    dispatch({ type: ACTION.INCREASE_COUNT });
  };

  const decreaseCount = () => {
    dispatch({ type: ACTION.DECREASE_COUNT });
  };

  return (
    <>
      <h2>Count = {state.count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  );
}

export default App;
