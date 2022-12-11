import LogoHTML from '../../assets/imagenes/logo-html-small.webp';
import LogoCSS from '../../assets/imagenes/logo-css3-small.webp';
import LogoJS from '../../assets/imagenes/logo-js-small.webp';
import LogoBoots from '../../assets/imagenes/logo-bootstrap-small.webp';
import LogoReact from '../../assets/imagenes/logo-react-small.webp';
import LogoStyled from '../../assets/imagenes/logo-styledcomp-small.webp';
import LogoVS from '../../assets/imagenes/logo-vscode-small.webp';
import LogoFigma from '../../assets/imagenes/logo-figma-small.webp';
import LogoPS from '../../assets/imagenes/logo-ps-small.webp';
import LogoAI from '../../assets/imagenes/logo-ai-small.webp';
import LogoSASS from '../../assets/imagenes/logo-sass-small.webp';
import LogoRedux from '../../assets/imagenes/logo-redux-small.webp';
import { useTranslation } from 'react-i18next';
import {
  InfoExtra,
  Logo,
  NuevoTituloSeccion,
  WrapperLogos,
  WrapperTecnologias,
} from './tecnologias.styled';
import { Titulo } from '../tituloSecciones/tituloSecciones';
import Divisor from '../divisor/Divisor';

const Tecnologias = () => {
  const { t } = useTranslation(['tools']);

  return (
    <>
      <Divisor />
      <WrapperTecnologias id='tecno'>
        <Titulo>{t('toolsAndTech')}</Titulo>
        <WrapperLogos>
          <Logo src={LogoHTML} alt='Logo HTML' />
          <Logo src={LogoCSS} alt='Logo CSS' />
          <Logo src={LogoJS} alt='Logo Javascript' />
          <Logo src={LogoBoots} alt='Logo Bootstrap' />
          <Logo src={LogoReact} alt='Logo React' />
          <Logo src={LogoStyled} alt='Logo styled Components' />
          <Logo src={LogoVS} alt='Logo VisualStudio Code' />
          <Logo src={LogoFigma} alt='Logo Figma' />
          <Logo src={LogoPS} alt='Logo Photoshop' />
          <Logo src={LogoAI} alt='Logo Illustrator' />
          <Logo src={LogoSASS} alt='Logo Illustrator' />
          <Logo src={LogoRedux} alt='Logo Illustrator' />
        </WrapperLogos>
        <NuevoTituloSeccion>{t('extraInfo')}</NuevoTituloSeccion>
        <InfoExtra>{t('scrumEnglish')}</InfoExtra>
      </WrapperTecnologias>
    </>
  );
};

export default Tecnologias;
