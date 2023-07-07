import React from 'react'

const Modal = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <>
        Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
      </>
    );
  return null;
};

export default Modal