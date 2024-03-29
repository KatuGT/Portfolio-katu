import { Suspense } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './componentes/navbar/Navbar';
import SobreMi from './componentes/sobreMi/SobreMi';
import Tecnologias from './componentes/tecnologias/Tecnologias';
import Main from './componentes/main/Main';
import Footer from './componentes/footer/Footer';
import Themes from './componentes/Themes';
import { useState } from 'react';
import Proyectos from './componentes/proyectos/Proyectos';
import ContactForm from './componentes/contactForm/contactForm';

const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    transition: background-color ease 0.5s;
  }
`;

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={Themes[theme]}>
        <MyGlobalStyle />
        <div className='App'>
          <Navbar setTheme={setTheme} theme={theme} />
          <Main>
            <SobreMi />
            <Proyectos/>
            <Tecnologias />
            <ContactForm/>
          </Main>
          <Footer />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
