import React from "react";
import ImgPetSpaceMobile from "../../assets/imagenes/pr-petSpaceMobile.webp";
import ImgPetSpace from "../../assets/imagenes/pr-petSpace.webp";
import ImEstafaMLibre from "../../assets/imagenes/pr-estafaMLibre.webp";
import ImEstafaMLibreMobile from "../../assets/imagenes/pr-estafaMLibreMobile.webp";
import ImgSinFronteras1 from "../../assets/imagenes/SinFronterasImg1.webp";
import ImgSinFronteras2 from "../../assets/imagenes/SinFronterasImg2.webp";
import ImgSinFronteras3 from "../../assets/imagenes/SinFronterasImg3.webp";
import ImgSinFronteras4 from "../../assets/imagenes/SinFronterasImg4.webp";
import { useTranslation } from "react-i18next";
import { WrapperListaProyectos } from "./listaProyecto.styled";
import ProyectoTemplate from "../proyectosTemplate/ProyectoTemplate";
import ProyectoMobileTemplate from "../proyectosTemplate/ProyectoMobileTemplate";

const ProyectosEnGrupo = () => {
  const { t } = useTranslation(["grupalProjects"]);
  return (
    <WrapperListaProyectos>
      <ProyectoMobileTemplate
        titulo="Sin fronteras"
        descripcion={t("sinFronteras.desc")}
        githubFront="https://github.com/No-Country/s6-06-t-react-native"
        imgUno={ImgSinFronteras1}
        altImgUno="Captura de pantalla borrando info"
        imgDos={ImgSinFronteras2}
        altImgDos="Captura de pantalla de Info profesional"
        imgTres={ImgSinFronteras3}
        altImgTres="Captura de pantalla de registro paso 1"
        imgCuatro={ImgSinFronteras4}
        altImgCuatro="Captura de pantalla de formulario de educación"
        linkApk="https://expo.dev/artifacts/eas/sTt11ytpqRLC3DrS2dFpHE.apk"
        imgPsition="left"
      />
      <ProyectoTemplate
        titulo="Pet Space"
        descripcion={t("petSpace.desc")}
        githubFront="https://github.com/No-Country/C7-G35"
        imgMobile={ImgPetSpaceMobile}
        altMobile="Caputa de pantalla de celular sitio Pet Space"
        imgDesktop={ImgPetSpace}
        altDesktop="Caputa de pantalla de escritorio sitio Pet Space"
        linkDeploy="https://petspace-frontend-nine.vercel.app/"
        imgPsition="right"
        orderDos="order-dos"
      />
      <ProyectoTemplate
        titulo="Estafa MLibre"
        descripcion={t("estafaMLibre.desc")}
        githubFront="https://github.com/agustingu20/estafa-mlibre"
        imgMobile={ImEstafaMLibreMobile}
        altMobile="Caputa de pantalla de celular sitio MoviePop"
        imgDesktop={ImEstafaMLibre}
        altDesktop="Caputa de pantalla de escritorio sitio MoviePop"
        linkDeploy="https://estafa-mlibre.vercel.app/"
        imgPsition="left"
      />
    </WrapperListaProyectos>
  );
};

export default ProyectosEnGrupo;
