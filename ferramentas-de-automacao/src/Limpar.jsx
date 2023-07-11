import React from 'react'
import { GlobalCOntext } from './GlobalContext';

const Limpar = () => {
  const {limparDados} = React.useContext(GlobalCOntext);
  return (
    <button onClick={limparDados}>Limpar</button>
  )
}

export default Limpar