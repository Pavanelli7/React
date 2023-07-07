import React from 'react'
import Titulo from './Titulo'

const Produtos = () => {
  // Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];


  return (
    <>
    <section>
      <Titulo texto= 'Produtos' />
      {produtos.map(({nome, propriedades}) => (
        <div style={{border: '1px solid', margin: '1rem 0'}}>
          <h3 key={nome}>{nome}</h3>
          <ul>
          {propriedades.map(propiedade => 
                <li key={propiedade}>{propiedade}</li>
              )}
          </ul>
        </div>
      ))}
    </section>
    </>
  )
}

export default Produtos