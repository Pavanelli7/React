import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
      Ativar
    </Button>
  );
};

export default App;
