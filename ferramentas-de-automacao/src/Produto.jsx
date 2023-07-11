import React from 'react'
import { GlobalCOntext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalCOntext);
  console.log(global);


  if(global.dados === null) return null;
  return  <div>Produto: {global.dados.map(produto => <li key={produto.id}>{produto.nome}</li>)}</div>
}

export default Produto