import React from 'react';
import foto from './img/foto.jpg';
import './App.css';
import { ReactComponent } from './img/dog.svg';

const App = () => {
  return (
    <div>
      <p className='fundo'></p>
      <ReactComponent />
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default App;