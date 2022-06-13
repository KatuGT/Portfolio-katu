import styled from "styled-components";
import TituloSecciones from "./TituloSecciones";
import ImgRollflixMobile from "../imagenes/pr-rollflixMobile.webp";
import ImgRollflix from "../imagenes/pr-rollflix.webp";
import ImgMoviePopMobile from "../imagenes/pr-moviepopMobile.webp";
import ImgMoviePop from "../imagenes/pr-moviepop.webp";
import ImgCVMobile from "../imagenes/pr-cvMobile.webp";
import ImgCV from "../imagenes/pr-cv.webp";

const WrapperProyectos = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1400px) {
    width: 90%;
  }

  @media screen and (min-width: 1500px) {
    width: 85%;
  }

  @media screen and (min-width: 1600px) {
    width: 80%;
  }

  @media screen and (min-width: 1800px) {
    width: 65%;
  }
`;

const Proyecto = styled.div`
  text-align: center;
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    margin-bottom: 9em;
    width: 80%;
  }

  @media screen and (min-width: 900px) {
    width: 100%;
    height: 500px;
    display: grid;
    place-items: center;
    gap: 2em;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    &:nth-child(even) {
      grid-template-columns: 2fr 1fr;
    }
  }

  @media screen and (min-width: 900px) {
    height: 500px;
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
  margin-bottom: 0.5em;
  @media screen and (min-width: 900px) {
    &.order-dos {
      order: 2;
    }
  }
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

const VerEnGithub = styled.a`
  color: inherit;
  text-decoration: none;
  margin-bottom: 0.3em;
`;

const LinkImagenes = styled.a`
  position: relative;
  @media screen and (min-width: 700px) {
    height: 500px;
  }
`;

const ImgProyectoMobile = styled.img`
  border-radius: 1em;
  position: relative;
  width: 100%;
  box-shadow: 0px 0px 0 4px var(--main-clr), 20px 15px 50px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 700px) {
    display: none;
  }
  @media screen and (min-width: 1300px) {
    display: block;
    height: 80%;
    width: auto;
    position: absolute;
    top: 40%;
  }

  &.right {
    @media screen and (min-width: 700px) {
      right: 80%;
    }
  }

  &.left {
    @media screen and (min-width: 700px) {
      left: 80%;
    }
  }
`;

const ImgProyecto = styled.img`
  display: none;
  @media screen and (min-width: 700px) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
  }

  @media screen and (min-width: 900px) {
  }
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
            <VerEnGithub
              href="https://github.com/KatuGT/Proyecto-Final-FrontEnd"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> Front-end
            </VerEnGithub>
            <VerEnGithub
              href="https://github.com/KatuGT/Proyecto-Final-BackEnd"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> Back-end
            </VerEnGithub>
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
          <InfoProyecto className="order-dos">
            <TituloProyecto>MoviePop</TituloProyecto>
            <DescProyecto>
              Otra página de películas, lo hice como parte de una entrevista. La
              data la consumi de la api TVmaze.
            </DescProyecto>
            <VerEnGithub
              href="https://github.com/KatuGT/MoviePop-front"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> Front-end
            </VerEnGithub>
            <VerEnGithub
              href="https://github.com/KatuGT/MoviePop-back"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> Back-end
            </VerEnGithub>
          </InfoProyecto>
          <LinkImagenes
            href="https://incandescent-taffy-ad42eb.netlify.app/peliculas"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImgProyectoMobile src={ImgMoviePopMobile} className="right" />
            <ImgProyecto src={ImgMoviePop} />
          </LinkImagenes>
        </Proyecto>
        <Proyecto>
          <InfoProyecto>
            <TituloProyecto>CV Falso</TituloProyecto>
            <DescProyecto>
              Realizado para un concurso durante mi cursado ( el cual gane
              &#128512; ), por lo que algo de la información que verán ahí es
              ficticia.
            </DescProyecto>
            <VerEnGithub
              href="https://github.com/KatuGT/CV-CINTIA-MARTINEZ"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> Front-end
            </VerEnGithub>
          </InfoProyecto>
          <LinkImagenes
            href="https://vigorous-darwin-6aa540.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImgProyectoMobile src={ImgCVMobile} className="left" />
            <ImgProyecto src={ImgCV} />
          </LinkImagenes>
        </Proyecto>
      </WrapperProyectos>
    </section>
  );
};

export default Proyectos;
