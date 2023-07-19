import React from "react";
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou de página');
  }, [location]);

  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> |{" "}
      <NavLink to="sobre">Sobre</NavLink> |{" "}
      <NavLink to="login">Login</NavLink> |{" "}
    </nav>
  );
};

export default Header;