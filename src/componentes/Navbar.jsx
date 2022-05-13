import { useState } from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  background-color: black;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 600px){
  justify-content: space-around;

  }
`;

const LogoContainer = styled.h2`
  color: #c3c3c3;
  margin-left: 1em;
  @media screen and (min-width: 600px){
    margin: 0;
  }
`;

const MenuIconMobil = styled.div`
  color: var(--main-clr);
  font-size: 1.5em;
  cursor: pointer;
  padding: 0.8em 1em;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const Menu = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: ${({ open }) => (open ? "0" : "-100%")};
  background-color: var(--main-clr);
  transition: left 1s ease;

  @media screen and (min-width: 600px) {
    position: relative;
    display: flex;
    color: var(--main-clr);
    left: 0;
    background-color: transparent;
    width: auto;
    font-weight: 100;
  }
`;

const MenuItem = styled.li`
  font-weight: 700;
`;

const MenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  text-decoration: none;
  font-size: 1.5em;
  color: inherit;
  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media screen and (min-width: 600px) {
    width: initial;
    font-size: 1.3em;
    font-weight: normal;
    padding: 0.99em 0.5em;
  }
`;

const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);

  return (
    <NavBar>
      <LogoContainer>Katu</LogoContainer>
      <MenuIconMobil onClick={() => setShowMenu(!ShowMenu)}>
        <i className={!ShowMenu ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
      </MenuIconMobil>
      <Menu open={ShowMenu}>
        <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
          <MenuLink href="/">Sobre mi</MenuLink>
        </MenuItem>

        <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
          <MenuLink href="/">Tecnologias</MenuLink>
        </MenuItem>

        <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
          <MenuLink href="/">Proyectos</MenuLink>
        </MenuItem>
      </Menu>
    </NavBar>
  );
};

export default Navbar;
