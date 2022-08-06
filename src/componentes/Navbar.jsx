import { useState, useRef } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30000;
  scroll-behavior: smooth;
`;

const NavBar = styled.nav`
  background-color: #000;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 800px) {
    justify-content: space-around;
  }
`;

const LogoContainer = styled.a`
  color: #fff;
  margin-left: 1em;
  cursor: pointer;
  font-size: 2em;
  font-weight: bolder;
  text-decoration: none;
  @media screen and (min-width: 800px) {
    margin: 0;
  }
`;

const MenuIconMobil = styled.div`
  color: var(--main-clr);
  font-size: 1.5em;
  cursor: pointer;
  padding: 0.8em 1em;

  @media screen and (min-width: 800px) {
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
  left: ${({ open }) => (open ? '0' : '-100%')};
  background-color: var(--main-clr);
  transition: left .5s ease-out;
  z-index: 20000;

  @media screen and (min-width: 800px) {
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
  scroll-behavior: smooth;
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
const SwitchWrapper = styled.div`
position: relative;
margin-right: 2em;
`;
const SwitchLabel = styled.label`
  display: flex;
  height: 2em;
  width: 5em;
  border-radius: 2em;
  background-color: var(--main-clr);
  position: relative;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    height: 2.5em;
    width: 2.5em;
    top: -0.25em;
    background-color: var(--main-clr);
    border-radius: 100vh;
    transition: transform 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;

  }

  &::after{
    content:'${({theme}) => theme.icon}';
    font-family: "Font Awesome 5 Free";
    font-size: 1.7em;
    top:${({isChecked}) => (isChecked.current.checked ? '.07em' : '0')};
    left: ${({isChecked}) => (isChecked.current.checked ? '.37em' : '.25em')} ;
    position: absolute;
    cursor: pointer;
    transition: transform 0.2s ease;
    font-weight: 900;
  }

  

`;
const SwitchInput = styled.input`
  display: none;
  &[type='checkbox']:checked + ${SwitchLabel}::before {
    background-color: var(--main-clr);
    transform: translateX(100%);
  }
  &[type='checkbox']:checked + ${SwitchLabel}::after {
    transform: translateX(135%) rotate(0.5turn);
    
  }
`;

const Navbar = (props) => {
  const [ShowMenu, setShowMenu] = useState(false);

  const changeTheme = (e) => {
    let target = e.target.checked;

    if (!target) {
      props.setTheme('dark');
    } else {
      props.setTheme('light');
    }
  };

  let isChecked = useRef(false)

  let navElement = useRef('')
  let navHeight = navElement.current.offsetHeight;
  document.documentElement.style.setProperty('--navigation-height', navHeight + 'px')
  return (
    <Header ref={navElement}>
      <NavBar >
        <LogoContainer href='#sobreMi'>Katu</LogoContainer>
        
        <MenuIconMobil onClick={() => setShowMenu(!ShowMenu)}>
          <i
            className={!ShowMenu ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}
          ></i>
        </MenuIconMobil>
        <Menu open={ShowMenu}>
          <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
            <MenuLink href='#sobreMi'>Sobre mi</MenuLink>
          </MenuItem>

          <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
            <MenuLink href='#tecno'>Tecnologias</MenuLink>
          </MenuItem>

          <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
            <MenuLink href='#proyectos'>Proyectos</MenuLink>
          </MenuItem>
        </Menu>
        <SwitchWrapper>
          <SwitchInput
            type='checkbox'
            id='switch'
            ref={isChecked}
            onChange={(e) => changeTheme(e)}
          />
          <SwitchLabel htmlFor='switch' 
          isChecked ={ isChecked }
            ></SwitchLabel>
        </SwitchWrapper>
      </NavBar>
    </Header>
  );
};

export default Navbar;
