import React from 'react'

const Produto = ({ dados }) => {
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo[0]} />
    </>
  )
}

export default Produto