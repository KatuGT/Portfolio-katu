import Navbar from "./componentes/Navbar";
import SobreMi from "./componentes/SobreMi";
import Divisor from "./componentes/Divisor";
import Tecnologias from "./componentes/Tecnologias";
import Main from "./componentes/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <SobreMi />
        <Divisor />
        <Tecnologias />
      </Main>
    </div>
  );
}

export default App;
