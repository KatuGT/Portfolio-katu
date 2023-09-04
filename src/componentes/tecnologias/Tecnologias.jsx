import LogoHTML from "../../assets/imagenes/logo-html-small.webp";
import LogoCSS from "../../assets/imagenes/logo-css3-small.webp";
import LogoJS from "../../assets/imagenes/logo-js-small.webp";
import LogoTS from "../../assets/imagenes/logo-ts-small.webp";
import LogoBoots from "../../assets/imagenes/logo-bootstrap-small.webp";
import LogoTailwind from "../../assets/imagenes/logo-tailwind-small.webp";
import LogoReact from "../../assets/imagenes/logo-react-small.webp";
import LogoNext from "../../assets/imagenes/logo-next-small.webp";
import LogoReactNative from "../../assets/imagenes/logo-reactNative-small.webp";
import LogoStyled from "../../assets/imagenes/logo-styledcomp-small.webp";
import LogoVS from "../../assets/imagenes/logo-vscode-small.webp";
import LogoFigma from "../../assets/imagenes/logo-figma-small.webp";
import LogoPS from "../../assets/imagenes/logo-ps-small.webp";
import LogoAI from "../../assets/imagenes/logo-ai-small.webp";
import LogoSASS from "../../assets/imagenes/logo-sass-small.webp";
import LogoRedux from "../../assets/imagenes/logo-redux-small.webp";
import { useTranslation } from "react-i18next";
import {
  InfoExtra,
  Logo,
  NuevoTituloSeccion,
  WrapperLogos,
  WrapperTech,
  WrapperTechText,
  WrapperTecnologias,
} from "./tecnologias.styled";
import { Titulo } from "../tituloSecciones/tituloSecciones";
import Divisor from "../divisor/Divisor";

const Tecnologias = () => {
  const { t } = useTranslation(["tools"]);

  return (
    <>
      <Divisor />
      <WrapperTecnologias id="tecno">
        <Titulo>{t("toolsAndTech")}</Titulo>
        <WrapperLogos>
          <WrapperTech>
            <Logo src={LogoHTML} alt="Logo HTML" />
            <WrapperTechText>HTML 5</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoCSS} alt="Logo CSS" />
            <WrapperTechText>CSS</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoJS} alt="Logo Javascript" />
            <WrapperTechText>JavaScript</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoTS} alt="Logo TypeScript" />
            <WrapperTechText>TypeScript</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoBoots} alt="Logo Bootstrap" />
            <WrapperTechText>Bootstrap</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoTailwind} alt="Logo Tailwind css" />
            <WrapperTechText>Tailwind</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoNext} alt="Logo Next" />
            <WrapperTechText>Next JS</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoReact} alt="Logo React" />
            <WrapperTechText>React JS</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoReactNative} alt="Logo React Native" />
            <WrapperTechText>React Native</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoStyled} alt="Logo styled Components" />
            <WrapperTechText>Styled Components</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoVS} alt="Logo VisualStudio Code" />
            <WrapperTechText>VS Code</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoFigma} alt="Logo Figma" />
            <WrapperTechText>Figma</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoPS} alt="Logo Photoshop" />
            <WrapperTechText>Photoshop</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoAI} alt="Logo Illustrator" />
            <WrapperTechText>Illustrator</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoSASS} alt="Logo SASS" />
            <WrapperTechText>SASS</WrapperTechText>
          </WrapperTech>

          <WrapperTech>
            <Logo src={LogoRedux} alt="Logo Redux" />
            <WrapperTechText>Redux Toolkit</WrapperTechText>
          </WrapperTech>
        </WrapperLogos>
        <NuevoTituloSeccion>{t("extraInfo")}</NuevoTituloSeccion>
        <InfoExtra>{t("scrumEnglish")}</InfoExtra>
      </WrapperTecnologias>
    </>
  );
};

export default Tecnologias;
