import styled from "styled-components";
import TituloSecciones from "./TituloSecciones";
import ImgRollflixMobile from "../imagenes/pr-rollflixMobile.jpg";
import ImgRollflix from "../imagenes/pr-rollflix.jpg";
import ImgMoviePopMobile from "../imagenes/pr-moviepopMobile.jpg";
import ImgMoviePop from "../imagenes/pr-moviepop.jpg";
import ImgCVMobile from "../imagenes/pr-cvMobile.jpg";
import ImgCV from "../imagenes/pr-cv.jpg";

const WrapperProyectos = styled.section`
  width: 70%;
  margin: 0 auto;
`;

const Proyecto = styled.div`
  text-align: center;
  margin-bottom: 9em;
  height: 500px;
  @media screen and (min-width: 900px) {
    display: grid;
    place-items: center;
    gap: 2em;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
`;

const InfoProyecto = styled.div`
  display: flex;
  flex-direction: column;
`;
const TituloProyecto = styled.h3`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 0;
  color: var(--main-clr);
`;

const DescProyecto = styled.p`
  margin-top: 0.2em;
  margin-bottom: 0.4em;
`;

const LinkImagenes = styled.a`
  position: relative;
  height: 500px;
`;

const ImgProyectoMobile = styled.img`
  border-radius: 1em;
  position: relative;
  box-shadow: 0px 0px 0 4px var(--main-clr), 20px 15px 50px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 500px) {
    display: none;
  }

  @media screen and (min-width: 900px) {
    display: block;
    height: 80%;
    width: auto;
    position: absolute;
    top: 40%;
  }

  &.right {
    @media screen and (min-width: 900px) {
      right: -20%;
    }
  }

  &.left {
    @media screen and (min-width: 900px) {
      left: 80%;
    }
  }
`;

const ImgProyecto = styled.img`
  height: 100%;
`;

const Proyectos = () => {
  return (
    <section id="proyectos">
      <TituloSecciones>Proyectos</TituloSecciones>
      <WrapperProyectos>
        <Proyecto>
          <InfoProyecto>
            <TituloProyecto>Rollflix</TituloProyecto>
            <DescProyecto>
              Clon de Netflix, fue mi proyecto final en el curso FullStack
              (MERN) de RollingCode School.
            </DescProyecto>
          </InfoProyecto>
          <LinkImagenes
            href="https://effortless-centaur-f31ca1.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImgProyectoMobile src={ImgRollflixMobile} className="left" />
            <ImgProyecto src={ImgRollflix} />
          </LinkImagenes>
        </Proyecto>
        <Proyecto>
          <LinkImagenes
            href="https://incandescent-taffy-ad42eb.netlify.app/peliculas"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImgProyectoMobile src={ImgMoviePopMobile} className="right" />
            <ImgProyecto src={ImgMoviePop} />
          </LinkImagenes>
          <InfoProyecto>
            <TituloProyecto>MoviePop</TituloProyecto>
            <DescProyecto>
              Otra página de películas, lo hice como parte de una entrevista.
            </DescProyecto>
          </InfoProyecto>
        </Proyecto>
        <Proyecto>
          <InfoProyecto>
            <TituloProyecto>CV Falso</TituloProyecto>
            <DescProyecto>
              Realizado para un concurso durante mi cursado ( el cual gane
              &#128512; ), por lo que algo de la información que verán ahí es
              ficticia.
            </DescProyecto>
          </InfoProyecto>
          <LinkImagenes
            href="https://vigorous-darwin-6aa540.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImgProyectoMobile src={ImgCVMobile}  className="left" />
            <ImgProyecto src={ImgCV} />
          </LinkImagenes>
        </Proyecto>
      </WrapperProyectos>
    </section>
  );
};

export default Proyectos;
