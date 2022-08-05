import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './componentes/Navbar';
import SobreMi from './componentes/SobreMi';
import Divisor from './componentes/Divisor';
import Tecnologias from './componentes/Tecnologias';
import Main from './componentes/Main';
import Proyectos from './componentes/Proyectos';
import Footer from './componentes/Footer';
import Themes from './componentes/Themes';

const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
  }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={Themes['dark']}>
        <MyGlobalStyle />
        <div className='App'>
          <Navbar />
          <Main>
            <SobreMi />
            <Divisor />
            <Tecnologias />
            <Divisor />
            <Proyectos />
          </Main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
