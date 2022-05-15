import styled from "styled-components";
import TituloSecciones from "./TituloSecciones";
import LogoHTML from "../imagenes/logo-html.png";
import LogoCSS from "../imagenes/logo-css3.png";
import LogoJS from "../imagenes/logo-js.png";
import LogoBoots from "../imagenes/logo-bootstrap.png";
import LogoReact from "../imagenes/logo-react.png";
import LogoStyled from "../imagenes/logo-styledcomp.png";
import LogoVS from "../imagenes/logo-vscode.png";
import LogoFigma from "../imagenes/logo-figma.svg";
import LogoPS from "../imagenes/logo-ps.png";
import LogoAI from "../imagenes/logo-ai.png";

const WrapperTecnologias = styled.div``;

const WrapperLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  justify-content: space-around;
  margin-bottom: 4em;
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

const Tecnologias = () => {
  return (
    <WrapperTecnologias>
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
      <TituloSecciones>Info extra</TituloSecciones>
      <InfoExtra>
        Poseo experiencia trabajando con la metodología ágil SCRUM y mi nivel de
        inglés es A2.
      </InfoExtra>
    </WrapperTecnologias>
  );
};

export default Tecnologias;
