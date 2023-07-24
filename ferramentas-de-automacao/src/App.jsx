import React from "react";
import Exemplo from "./Components/Exemplo";

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'reduzir':
      return state - 1;
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('reduzir')}>-</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
};

export default App;