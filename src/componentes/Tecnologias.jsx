import styled from "styled-components";
import TituloSecciones from "./TituloSecciones";
import LogoHTML from "../assets/imagenes/logo-html-small.webp";
import LogoCSS from "../assets/imagenes/logo-css3-small.webp";
import LogoJS from "../assets/imagenes/logo-js-small.webp";
import LogoBoots from "../assets/imagenes/logo-bootstrap-small.webp";
import LogoReact from "../assets/imagenes/logo-react-small.webp";
import LogoStyled from "../assets/imagenes/logo-styledcomp-small.webp";
import LogoVS from "../assets/imagenes/logo-vscode-small.webp";
import LogoFigma from "../assets/imagenes/logo-figma-small.webp";
import LogoPS from "../assets/imagenes/logo-ps-small.webp";
import LogoAI from "../assets/imagenes/logo-ai-small.webp";
import { useTranslation } from 'react-i18next';

const WrapperTecnologias = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const WrapperLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  justify-content: center;
  margin-bottom: 4em;

  @media screen and (min-width: 566px) {
    width: 450px;
  }
`;

const Logo = styled.img`
  height: 75px;
  width: 75px;
  object-fit: contain;
`;

const InfoExtra = styled.p`
  text-align: center;
  margin-top: 0;
  color: ${({theme}) => theme.text};

`;

const NuevoTituloSeccion = styled(TituloSecciones)`
  margin-bottom: 0.5em;
`

const Tecnologias = () => {
  const  { t } = useTranslation(['tools'])

  return (
    <WrapperTecnologias id="tecno">
      <TituloSecciones>{t('toolsAndTech')}</TituloSecciones>
      <WrapperLogos>
        <Logo src={LogoHTML} alt="Logo HTML" />
        <Logo src={LogoCSS} alt="Logo CSS" />
        <Logo src={LogoJS} alt="Logo Javascript" />
        <Logo src={LogoBoots} alt="Logo Bootstrap" />
        <Logo src={LogoReact} alt="Logo React" />
        <Logo src={LogoStyled} alt="Logo styled Components" />
        <Logo src={LogoVS} alt="Logo VisualStudio Code" />
        <Logo src={LogoFigma} alt="Logo Figma" />
        <Logo src={LogoPS} alt="Logo Photoshop" />
        <Logo src={LogoAI} alt="Logo Illustrator" />
      </WrapperLogos>
      <NuevoTituloSeccion>{t('extraInfo')}</NuevoTituloSeccion>
      <InfoExtra>
      {t('scrumEnglish')}
      </InfoExtra>
    </WrapperTecnologias>
  );
};

export default Tecnologias;
