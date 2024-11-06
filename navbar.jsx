// Navbar.js
import React from 'react';
import styled from 'styled-components';

// Estilo do contêiner principal da Navbar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333; /* Cor de fundo da Navbar */
  color: #fff;
`;

// Estilo para o logo
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Estilo da lista de navegação
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

// Estilo para os links de navegação
const NavLink = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #ddd; /* Cor ao passar o mouse */
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <NavLinks>
        <NavLink><a href="#home">Home</a></NavLink>
        <NavLink><a href="#about">About</a></NavLink>
        <NavLink><a href="#services">Services</a></NavLink>
        <NavLink><a href="#contact">Contact</a></NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
