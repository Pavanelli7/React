import React from "react";

const App = () => {
  const [carrinho, setcarrinho] = React.useState(0);
  const [notificacao, setNotificacaco] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setcarrinho(carrinho + 1);
    setNotificacaco('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacaco(null)
    }, 1000);
  }
  
  return (
    <>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </>
  )
};
export default App
