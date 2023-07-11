import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({target}) {
    setProduto(target.innerText);
  }

  return (
    <>
      <p>Produto: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </>
  )
};
export default App
