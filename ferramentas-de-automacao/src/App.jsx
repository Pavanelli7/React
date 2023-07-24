import React from "react";
// import Contato from "./Components/Contato";
const Contato = React.lazy(() => import('./Components/Contato'));

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <div>
      <h1>Meu App</h1>
      {ativo && (
        <React.Suspense fallback={<div>Carrgeando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Ativar</button>
    </div>
  );
};

export default App;