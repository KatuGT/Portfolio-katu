import styled from 'styled-components';
import TituloSecciones from './TituloSecciones';
import ImgRollflixMobile from '../imagenes/pr-rollflixMobile.webp';
import ImgRollflix from '../imagenes/pr-rollflix.webp';
import ImgMoviePopMobile from '../imagenes/pr-moviepopMobile.webp';
import ImgMoviePop from '../imagenes/pr-moviepop.webp';
import ImgAtlasMobile from '../imagenes/pr-atlasMobile.webp';
import ImgAtlas from '../imagenes/pr-atlas.webp';
import ProyectoTemplate from './ProyectoTemplate';

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

const Proyectos = () => {
  return (
    <section id='proyectos'>
      <TituloSecciones>Proyectos</TituloSecciones>
      <WrapperProyectos>
        <ProyectoTemplate
          titulo='Rollflix'
          descripcion='Clon de Netflix, fue mi proyecto final en el curso FullStack
          (MERN) de RollingCode School.'
          githubFront='https://github.com/KatuGT/Proyecto-Final-FrontEnd'
          githubBack='https://github.com/KatuGT/Proyecto-Final-BackEnd'
          imgMobile={ImgRollflixMobile}
          altMobile='Caputa de pantalla de celular sitio Rollflix'
          imgDesktop={ImgRollflix}
          altDesktop='Caputa de pantalla de escritorio sitio Rollflix'
          linkDeploy='https://effortless-centaur-f31ca1.netlify.app/'
          imgPsition='left'
        />
        <ProyectoTemplate
          titulo='MoviePop'
          descripcion=' Otra página de películas, lo hice como parte de una entrevista. La
          data la consumi de la api TVmaze.'
          githubFront='https://github.com/KatuGT/MoviePop-front'
          githubBackt='https://github.com/KatuGT/MoviePop-back'
          imgMobile={ImgMoviePopMobile}
          altMobile='Caputa de pantalla de celular sitio MoviePop'
          imgDesktop={ImgMoviePop}
          altDesktop='Caputa de pantalla de escritorio sitio MoviePop'
          linkDeploy='https://incandescent-taffy-ad42eb.netlify.app/peliculas'
          imgPsition='right'
          orderDos='order-dos'
        />
        <ProyectoTemplate
          titulo='Atlas'
          descripcion='Proyecto realizado para challange usando la Rest API themoviedb'
          githubFront='https://github.com/KatuGT/atlas-cine'
          imgMobile={ImgAtlasMobile}
          altMobile='Caputa de pantalla de celular sitio MoviePop'
          imgDesktop={ImgAtlas}
          altDesktop='Caputa de pantalla de escritorio sitio Atlas'
          linkDeploy='https://helpful-fenglisu-56d94c.netlify.app/'
          imgPsition='left'
        />
      </WrapperProyectos>
    </section>
  );
};

export default Proyectos;
