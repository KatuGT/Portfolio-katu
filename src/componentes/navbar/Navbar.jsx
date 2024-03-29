import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Header,
  InputLenguaje,
  Lenguaje,
  Menu,
  MenuIconMobil,
  MenuItem,
  NavBar,
  SwitchInput,
  SwitchLabel,
  SwitchLenguaje,
  SwitchLenguajeMobile,
  SwitchWrapper,
  TextLenguaje,
} from "./navbar.styled";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const [ShowMenu, setShowMenu] = useState(false);

  const changeTheme = (e) => {
    let target = e.target.checked;

    if (!target) {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  let isChecked = useRef(false);

  const { t, i18n } = useTranslation(["header"]);

  const currentLanguege = localStorage.getItem("i18nextLng");

  const handleLenguaje = (e) => {
    const lenguaje = e.target.value;
    i18n.changeLanguage(lenguaje);
  };
  return (
    <Header>
      <NavBar>
        <MenuIconMobil onClick={() => setShowMenu(!ShowMenu)}>
          <i
            className={!ShowMenu ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
          ></i>
        </MenuIconMobil>
        <Menu open={ShowMenu}>
          <MenuItem>
            <SwitchLenguajeMobile>
              <Lenguaje>
                <InputLenguaje
                  type="radio"
                  name="lenguaje"
                  value="es"
                  defaultChecked={currentLanguege === "es"}
                  onClick={(e) => {
                    handleLenguaje(e);
                  }}
                />
                <TextLenguaje>Español</TextLenguaje>
              </Lenguaje>
              <Lenguaje>
                <InputLenguaje
                  type="radio"
                  name="lenguaje"
                  value="en"
                  defaultChecked={currentLanguege === "en"}
                  onClick={(e) => {
                    handleLenguaje(e);
                  }}
                />
                <TextLenguaje>English</TextLenguaje>
              </Lenguaje>
            </SwitchLenguajeMobile>
          </MenuItem>
          <MenuItem
            className="firstChild"
            onClick={() => setShowMenu(!ShowMenu)}
          >
            <Link
              to="sobreMi"
              spy={true}
              smooth={true}
              offset={-150}
              duration={100}
            >
              {t("aboutMe")}
            </Link>
          </MenuItem>
          <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
            <Link
              to="proyectos"
              spy={true}
              smooth={true}
              offset={-150}
              duration={100}
            >
              {t("projects")}
            </Link>
          </MenuItem>
          <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
            <Link
              to="tecno"
              spy={true}
              smooth={true}
              offset={-150}
              duration={100}
            >
              {t("toolsAndTech")}
            </Link>
          </MenuItem>
          <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
            <Link
              to="contacto"
              spy={true}
              smooth={true}
              offset={-150}
              duration={100}
            >
              {t("contact")}
            </Link>
          </MenuItem>
        </Menu>
        <SwitchLenguaje>
          <SwitchWrapper>
            <SwitchInput
              type="checkbox"
              id="switch"
              ref={isChecked}
              onChange={(e) => changeTheme(e)}
            />
            <SwitchLabel htmlFor="switch" isChecked={isChecked}></SwitchLabel>
          </SwitchWrapper>
          <Lenguaje>
            <InputLenguaje
              type="radio"
              name="lenguaje"
              value="es"
              defaultChecked={currentLanguege === "es"}
              onClick={(e) => {
                handleLenguaje(e);
              }}
            />
            <TextLenguaje>Español</TextLenguaje>
          </Lenguaje>
          <Lenguaje>
            <InputLenguaje
              type="radio"
              name="lenguaje"
              value="en"
              defaultChecked={currentLanguege === "en"}
              onClick={(e) => {
                handleLenguaje(e);
              }}
            />
            <TextLenguaje>English</TextLenguaje>
          </Lenguaje>
        </SwitchLenguaje>
      </NavBar>
    </Header>
  );
};

export default Navbar;
