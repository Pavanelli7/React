import React from "react";

const App = () => {
  const [textarea, setTextarea] = React.useState('');

  return (
    <>
      <form>
        <label htmlFor="nome">Nome</label>
        <textarea
          id="nome"
          value={textarea}
          rows={"5"}
          onChange={({ target }) => setTextarea(target.value)}
        />
        {textarea}
      </form>
    </>
  );
};

export default App
