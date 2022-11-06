import ProyectoTemplate from './ProyectoTemplate';
import ImgCardMobile from '../assets/imagenes/pr-interactiveCardMovile.webp';
import ImgCard from '../assets/imagenes/pr-interactiveCard.webp';
import ImgMoviePopMobile from '../assets/imagenes/pr-moviepopMobile.webp';
import ImgMoviePop from '../assets/imagenes/pr-moviepop.webp';
import ImgAtlasMobile from '../assets/imagenes/pr-atlasMobile.webp';
import ImgAtlas from '../assets/imagenes/pr-atlas.webp';
import { useTranslation } from 'react-i18next';

const ProyectosIndividuales = () => {
  const  { t } = useTranslation(['personalProjects'])

  return (
    <>
      <ProyectoTemplate
        titulo='Interactive Card'
        descripcion={t('interactiveCard.desc')}
        githubFront='https://github.com/KatuGT/interactive-card-challange'
        imgMobile={ImgCardMobile}
        altMobile='Caputa de pantalla de celular sitio Interactive Card'
        imgDesktop={ImgCard}
        altDesktop='Caputa de pantalla de escritorio sitio Interactive Card'
        linkDeploy='https://interactive-card-challange.vercel.app/'
        imgPsition='left'
      />
      <ProyectoTemplate
        titulo='MoviePop'
        descripcion={t('moviePop.desc')}
        githubFront='https://github.com/KatuGT/MoviePop-front'
        githubBack='https://github.com/KatuGT/MoviePop-back'
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
        descripcion={t('atlas.desc')}
        githubFront='https://github.com/KatuGT/atlas-cine'
        imgMobile={ImgAtlasMobile}
        altMobile='Caputa de pantalla de celular sitio MoviePop'
        imgDesktop={ImgAtlas}
        altDesktop='Caputa de pantalla de escritorio sitio Atlas'
        linkDeploy='https://helpful-fenglisu-56d94c.netlify.app/'
        imgPsition='left'
      />
    </>
  );
};

export default ProyectosIndividuales;
