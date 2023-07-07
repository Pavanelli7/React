import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Form from "./Form/Form";
import Home from "./Home";
import Produtos from "./Produtos";



const App = () => {
  let Pagina = Home;
  const {pathname} = window.location;

  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  )
};
export default App
