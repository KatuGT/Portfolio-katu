import styled from "styled-components";
import TituloSecciones from "./TituloSecciones";
import LogoHTML from "../imagenes/logo-html.webp";
import LogoCSS from "../imagenes/logo-css3.webp";
import LogoJS from "../imagenes/logo-js.webp";
import LogoBoots from "../imagenes/logo-bootstrap.webp";
import LogoReact from "../imagenes/logo-react.webp";
import LogoStyled from "../imagenes/logo-styledcomp.webp";
import LogoVS from "../imagenes/logo-vscode.webp";
import LogoFigma from "../imagenes/logo-figma.webp";
import LogoPS from "../imagenes/logo-ps.webp";
import LogoAI from "../imagenes/logo-ai.webp";

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
`;

const NuevoTituloSeccion = styled(TituloSecciones)`
  margin-bottom: 0.5em;
`

const Tecnologias = () => {
  return (
    <WrapperTecnologias id="tecno">
      <TituloSecciones>Herramientas y Tecnologias</TituloSecciones>
      <WrapperLogos>
        <Logo src={LogoHTML} />
        <Logo src={LogoCSS} />
        <Logo src={LogoJS} />
        <Logo src={LogoBoots} />
        <Logo src={LogoReact} />
        <Logo src={LogoStyled} />
        <Logo src={LogoVS} />
        <Logo src={LogoFigma} />
        <Logo src={LogoPS} />
        <Logo src={LogoAI} />
      </WrapperLogos>
      <NuevoTituloSeccion>Info extra</NuevoTituloSeccion>
      <InfoExtra>
        Poseo experiencia trabajando con la metodología ágil SCRUM y mi nivel de
        inglés es A2.
      </InfoExtra>
    </WrapperTecnologias>
  );
};

export default Tecnologias;
