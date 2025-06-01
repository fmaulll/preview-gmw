import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { GiWoodBeam } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './gmwLogo.avif';

const HeaderWrapper = styled.div`
  width: 100%;
  background: var(--background-dark);
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  text-decoration: none;
  z-index: 1001;

  img {
    height: 40px;
    width: auto;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 250px;
    background: var(--background-dark);
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    transition: right 0.3s ease-in-out;
    box-shadow: ${props => props.isOpen ? '-5px 0 15px rgba(0,0,0,0.3)' : 'none'};
  }
`;

const NavLink = styled(Link)`
  color: var(--text-light);
  text-decoration: none;
  font-size: 16px;
  opacity: 0.8;
  transition: all 0.2s;
  
  &:hover {
    opacity: 1;
    color: var(--accent-color);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 10px 0;
  }
`;

const ContactButton = styled(Link)`
  background: var(--primary-color);
  color: var(--text-light);
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    padding: 15px 20px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/" onClick={closeMenu}>
          <img src={logo} alt="GMW Logo" />
        </Logo>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? FaTimes({ size: 24 }) : FaBars({ size: 24 })}
        </MenuButton>
        <Nav isOpen={isMenuOpen}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/about-us" onClick={closeMenu}>About Us</NavLink>
          <ContactButton to="/contact" onClick={closeMenu}>Contact Us</ContactButton>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header; 