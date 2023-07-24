import React from "react";

const Header = () => {
  console.log('Renderizou');
  return (
    <nav >
      <h1>Header</h1>
    </nav>
  );
};

export default React.memo(Header);