import styled from "styled-components";

const WrapperSobreMi = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperTituloRedes = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: default;
`;
const Katu = styled.h1`
  font-size: 3em;
  margin-bottom: 0;
  span {
    color: transparent;
    -webkit-text-stroke: 0.8px var(--main-clr);
    position: relative;
  }

  span::after {
    content: "Katu";
    position: absolute;
    -webkit-text-stroke: 0;
    color: #000;
    left: 5%;
    top: -5%;
    z-index: -100;
  }
`;
const FrontEnd = styled.h2`
  margin-top: 0;
  color: var(--main-clr);
  font-size: 2em;
  font-weight: 400;
`;

const Redes = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2em;
  margin: 1em;
  i {
    margin-bottom: 1em;
    color: transparent;
    -webkit-text-stroke: 0.8px var(--main-clr);
    position: relative;
  }

  .fa-github::after {
    content: "\f09b";
    position: absolute;
    -webkit-text-stroke: 0;
    color: #000;
    left: 15%;
    top: 10%;
    z-index: -100;
    clip-path: circle(140.7% at 100% 100%);
    transition: clip-path 1s ease;
  }

  .fa-github:hover::after {
    clip-path: circle(0% at 100% 100%);
  }

  .fa-linkedin-in::after {
    content: "\f0e1";
    position: absolute;
    -webkit-text-stroke: 0;
    color: #000;
    right: 20%;
    top: -10%;
    z-index: -100;
    clip-path: circle(140.7% at 100% 100%);
    transition: clip-path 1s ease;
  }

  .fa-linkedin-in:hover::after {
    clip-path: circle(0% at 100% 100%);
  }

  .fa-github:hover,
  .fa-linkedin-in:hover {
    color: #000;
  }
`;

const Presentacion = styled.p`
  text-align: center;
  width: 100%;
  font-size: 1.2em;
  margin: 0;
`;

const SobreMi = () => {
  return (
    <WrapperSobreMi>
      <WrapperTituloRedes>
        <Titulo>
          <Katu>
            Hola, soy <span>Katu</span>{" "}
          </Katu>
          <FrontEnd>Front-end developer</FrontEnd>
        </Titulo>
        <Redes>
          <a
            href="https://github.com/KatuGT"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/cintiajimenamartinez/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </Redes>
      </WrapperTituloRedes>
      <Presentacion>
        Ese es mi apodo, mi nombre es Cintia Jimena Martínez, vivo en Tucumán,
        Argentina y actualmente me encuentro en la búsqueda de mi primera
        experiencia profesional como desarrolladora front-end.
      </Presentacion>
    </WrapperSobreMi>
  );
};

export default SobreMi;
