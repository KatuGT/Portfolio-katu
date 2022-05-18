import styled from "styled-components";
import TituloSecciones from "./TituloSecciones";
import ImgRollflixMobile from "../imagenes/pr-rollflixMobile.jpg";
import ImgMoviePopMobile from "../imagenes/pr-moviepopMobile.jpg";
import ImgCVMobile from "../imagenes/pr-cvMobile.jpg";

const WrapperProyectos = styled.section``;

const Proyecto = styled.div`
  text-align: center;
  margin-bottom: 4em;
`;
const TituloProyecto = styled.h3`
  font-weight: bold;
  margin-bottom: 0;
  color: var(--main-clr);
`;

const DescProyecto = styled.p`
  margin-top: 0;
`;

const ImgProyecto = styled.img`
  width: 80%;
`;

const Proyectos = () => {
  return (
    <>
      <TituloSecciones>Proyectos</TituloSecciones>
      <WrapperProyectos>
        <Proyecto>
          <TituloProyecto>Rollflix</TituloProyecto>
          <DescProyecto>
            Clone de Netflix, fue mi proyecto final en el curso FullStack (MERN)
            de RollingCode School.
          </DescProyecto>
          <a
            href="https://effortless-centaur-f31ca1.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImgProyecto src={ImgRollflixMobile} />
          </a>
        </Proyecto>
        <Proyecto>
          <TituloProyecto>MoviePop</TituloProyecto>
          <DescProyecto>Otra pagina de peliculas, lo hice como parte de una entrevista</DescProyecto>
          <a
            href="https://incandescent-taffy-ad42eb.netlify.app/peliculas"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImgProyecto src={ImgMoviePopMobile} />
          </a>
        </Proyecto>
        <Proyecto>
          <TituloProyecto>CV Falso</TituloProyecto>

          <DescProyecto>
            Realizado para un concurso durante mi cursado ( el cual gane :) ),
            por lo que algo de la información que verán ahí es ficticia.)
          </DescProyecto>
          <a
            href="https://vigorous-darwin-6aa540.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImgProyecto src={ImgCVMobile} />
          </a>
        </Proyecto>
      </WrapperProyectos>
    </>
  );
};

export default Proyectos;
