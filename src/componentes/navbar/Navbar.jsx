import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Header, InputLenguaje, Lenguaje, LogoContainer, Menu, MenuIconMobil, MenuItem, MenuLink, NavBar, SwitchInput, SwitchLabel, SwitchLenguaje, SwitchLenguajeMobile, SwitchWrapper, TextLenguaje } from './navbar.styled';


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

  let isChecked = useRef(false);

  let navElement = useRef('');
  let navHeight = navElement.current.offsetHeight;
  document.documentElement.style.setProperty(
    '--navigation-height',
    navHeight + 'px'
  );

  const { t, i18n } = useTranslation(['header']);

  const handleLenguaje = (e) => {
    const lenguaje = e.target.value;
    i18n.changeLanguage(lenguaje);
  };
  return (
    <Header ref={navElement}>
      <NavBar>
        <LogoContainer href='#sobreMi'>Katu</LogoContainer>
        <MenuIconMobil onClick={() => setShowMenu(!ShowMenu)}>
          <i
            className={!ShowMenu ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}
          ></i>
        </MenuIconMobil>
        <Menu open={ShowMenu}>
          <MenuItem>
            <SwitchLenguajeMobile>
              <Lenguaje>
                <InputLenguaje
                  type='radio'
                  name='lenguaje'
                  value='es'
                  onClick={(e) => {
                    handleLenguaje(e);
                  }}
                />
                <TextLenguaje>Español</TextLenguaje>
              </Lenguaje>
              <Lenguaje>
                <InputLenguaje
                  type='radio'
                  name='lenguaje'
                  value='en'
                  onClick={(e) => {
                    handleLenguaje(e);
                  }}
                />
                <TextLenguaje>English</TextLenguaje>
              </Lenguaje>
            </SwitchLenguajeMobile>
          </MenuItem>
            <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
              <MenuLink href='#sobreMi'>{t('aboutMe')}</MenuLink>
            </MenuItem>
          <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
            <MenuLink href='#tecno'>{t('toolsAndTech')}</MenuLink>
          </MenuItem>

          <MenuItem onClick={() => setShowMenu(!ShowMenu)}>
            <MenuLink href='#proyectos'>{t('projects')}</MenuLink>
          </MenuItem>
        </Menu>
        <SwitchWrapper>
          <SwitchInput
            type='checkbox'
            id='switch'
            ref={isChecked}
            onChange={(e) => changeTheme(e)}
          />
          <SwitchLabel htmlFor='switch' isChecked={isChecked}></SwitchLabel>
        </SwitchWrapper>
        <SwitchLenguaje>
          <Lenguaje>
            <InputLenguaje
              type='radio'
              name='lenguaje'
              value='es'
              onClick={(e) => {
                handleLenguaje(e);
              }}
            />
            <TextLenguaje>Español</TextLenguaje>
          </Lenguaje>
          <Lenguaje>
            <InputLenguaje
              type='radio'
              name='lenguaje'
              value='en'
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
