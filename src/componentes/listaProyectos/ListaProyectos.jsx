import { useState } from "react";
import ImgPetSpaceMobile from "../../assets/imagenes/pr-petSpaceMobile.webp";
import ImgPetSpace from "../../assets/imagenes/pr-petSpace.webp";
import ImEstafaMLibre from "../../assets/imagenes/pr-estafaMLibre.webp";
import ImEstafaMLibreMobile from "../../assets/imagenes/pr-estafaMLibreMobile.webp";
import ImgSinFronteras1 from "../../assets/imagenes/SinFronterasImg1.webp";
import ImgSinFronteras2 from "../../assets/imagenes/SinFronterasImg2.webp";
import ImgSinFronteras3 from "../../assets/imagenes/SinFronterasImg3.webp";
import ImgCardMobile from "../../assets/imagenes/pr-interactiveCardMovile.webp";
import ImgCard from "../../assets/imagenes/pr-interactiveCard.webp";
import ImgMoviePopMobile from "../../assets/imagenes/pr-moviepopMobile.webp";
import ImgMoviePop from "../../assets/imagenes/pr-moviepop.webp";
import ImgAtlasMobile from "../../assets/imagenes/pr-atlasMobile.webp";
import ImgAtlas from "../../assets/imagenes/pr-atlas.webp";
import { useTranslation } from "react-i18next";
import {
  ArrowIcon,
  ProyectosSecundarios,
  VerMasCheckbox,
  VerMasText,
  VerMasWrapper,
  WrapperListaProyectos,
} from "./listaProyecto.styled";
import ProyectoTemplate from "../proyectosTemplate/ProyectoTemplate";
import ProyectoMobileTemplate from "../proyectosTemplate/ProyectoMobileTemplate";

const ListaProyectos = () => {
  const { t } = useTranslation(["projectsDesc"]);
  const [verMas, setVerMas] = useState(false);

  return (
    <>
      <WrapperListaProyectos>
        <div>
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
            linkApk="https://expo.dev/artifacts/eas/sTt11ytpqRLC3DrS2dFpHE.apk"
            imgPsition="left"
            esGrupal={true}
            tipoProyectoTexto={t("sinFronteras.typeText")}
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
            esGrupal={true}
            tipoProyectoTexto={t("sinFronteras.typeText")}
            ladoInicial={true}
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
            esGrupal={true}
            tipoProyectoTexto={t("estafaMLibre.typeText")}
          />
        </div>

        <ProyectosSecundarios show={verMas}>
          <ProyectoTemplate
            titulo="Interactive Card"
            descripcion={t("interactiveCard.desc")}
            githubFront="https://github.com/KatuGT/interactive-card-challange"
            imgMobile={ImgCardMobile}
            altMobile="Caputa de pantalla de celular sitio Interactive Card"
            imgDesktop={ImgCard}
            altDesktop="Caputa de pantalla de escritorio sitio Interactive Card"
            linkDeploy="https://interactive-card-challange.vercel.app/"
            imgPsition="right"
            orderDos="order-dos"
            tipoProyectoTexto={t("interactiveCard.typeText")}
            isOdd={true}
          />
          <ProyectoTemplate
            titulo="MoviePop"
            descripcion={t("moviePop.desc")}
            githubFront="https://github.com/KatuGT/MoviePop-front"
            githubBack="https://github.com/KatuGT/MoviePop-back"
            imgMobile={ImgMoviePopMobile}
            altMobile="Caputa de pantalla de celular sitio MoviePop"
            imgDesktop={ImgMoviePop}
            altDesktop="Caputa de pantalla de escritorio sitio MoviePop"
            linkDeploy="https://incandescent-taffy-ad42eb.netlify.app/peliculas"
            imgPsition="left"
            tipoProyectoTexto={t("moviePop.typeText")}
            isOdd={true}
          />
          <ProyectoTemplate
            titulo="Atlas"
            descripcion={t("atlas.desc")}
            githubFront="https://github.com/KatuGT/atlas-cine"
            imgMobile={ImgAtlasMobile}
            altMobile="Caputa de pantalla de celular sitio MoviePop"
            imgDesktop={ImgAtlas}
            altDesktop="Caputa de pantalla de escritorio sitio Atlas"
            linkDeploy="https://helpful-fenglisu-56d94c.netlify.app/"
            imgPsition="right"
            orderDos="order-dos"
            tipoProyectoTexto={t("atlas.typeText")}
            isOdd={true}
          />
        </ProyectosSecundarios>
        <VerMasWrapper>
          <VerMasText>
            {!verMas ? "Ver más proyectos" : "Ver menos proyectos"}
          </VerMasText>
          <VerMasCheckbox
            defaultChecked={verMas}
            onChange={() => setVerMas(!verMas)}
          />
          <ArrowIcon
            className={
              verMas ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
            }
            isExpanded={verMas}
          ></ArrowIcon>
        </VerMasWrapper>
      </WrapperListaProyectos>
    </>
  );
};

export default ListaProyectos;
