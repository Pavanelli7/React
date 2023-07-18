import React from 'react';
import Card from 'react-bootstrap/Card';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <Card bg="dark" text='white'>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2.500,00</Card.Title>
        <Card.Text>Esse é um notebook com 1tb, 16gb ram e placa de vídeo de 16gb.</Card.Text>
      </Card.Body>
    </Card >
  );
};

export default App;
