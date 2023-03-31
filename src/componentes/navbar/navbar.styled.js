import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30000;
  scroll-behavior: smooth;
  background-color: #000;
`;

export const NavBar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  @media screen and (min-width: 950px) {
    justify-content: space-between;
    margin: 0 2rem;
  }
`;

export const LogoContainer = styled.a`
  color: #fff;
  cursor: pointer;
  font-size: 2em;
  font-weight: bolder;
  text-decoration: none;
  @media screen and (min-width: 950px) {
    margin: 0;
  }
`;

export const MenuIconMobil = styled.div`
  color: var(--main-clr);
  font-size: 1.5em;
  cursor: pointer;
  padding: 0.8em 1em;

  @media screen and (min-width: 950px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: ${({ open }) => (open ? "0" : "-100%")};
  background-color: var(--main-clr);
  transition: left 0.5s ease-out;
  z-index: 20000;

  @media screen and (min-width: 950px) {
    position: relative;
    display: flex;
    color: var(--main-clr);
    left: 0;
    background-color: transparent;
    width: auto;
    font-weight: 100;
  }
`;

export const MenuItem = styled.li`
  font-weight: 700;
  scroll-behavior: smooth;
  text-align: center;
  cursor: pointer;
  color: #fff;
  
  && a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;
    text-decoration: none;
    font-size: 1.5em;
    color: inherit;

    &:hover,
    &.active {
      background-color: #000;
      color: var(--main-clr);
      font-weight: bold;
    }
    
    @media screen and (min-width: 600px) {
      width: initial;
      font-size: 1.3em;
      font-weight: normal;
      padding: 0.99em 0.5em;
    }
  }
  &.firstChild > a{
   padding-left: 0;
  }
`;

export const SwitchWrapper = styled.div`
  position: relative;
  display: flex;
`;
export const SwitchLabel = styled.label`
  display: flex;
  height: 2em;
  width: 5em;
  border-radius: 2em;
  background-color: var(--main-clr);
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
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

  &::after {
    content: "${({ theme }) => theme.icon}";
    font-family: "Font Awesome 5 Free";
    font-size: 1.7em;
    top: ${({ isChecked }) => (isChecked.current.checked ? ".07em" : "0")};
    left: ${({ isChecked }) => (isChecked.current.checked ? ".37em" : ".25em")};
    position: absolute;
    cursor: pointer;
    transition: transform 0.2s ease;
    font-weight: 900;
  }
`;
export const SwitchInput = styled.input`
  display: none;
  &[type="checkbox"]:checked + ${SwitchLabel}::before {
    background-color: var(--main-clr);
    transform: translateX(100%);
  }
  &[type="checkbox"]:checked + ${SwitchLabel}::after {
    transform: translateX(135%) rotate(0.5turn);
  }
`;

export const SwitchLenguaje = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const SwitchLenguajeMobile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  text-align: center;
  width: 100%;
  background-color: #000;
  @media screen and (min-width: 950px) {
    display: none;
  }
`;

export const InputLenguaje = styled.input`
  display: none;
`;

export const Lenguaje = styled.label`
  position: relative;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const TextLenguaje = styled.p`
  position: relative;
  display: flex;
  gap: 0.8rem;
  font-weight: 300;
  color: #fff;
  &&:hover,
  ${InputLenguaje}:checked + && {
    font-weight: 700;
    color: var(--main-clr);
  }
`;
