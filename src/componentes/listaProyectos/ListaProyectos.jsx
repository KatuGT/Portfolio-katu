import { useState } from "react";
import ImgSizeMatch from "../../assets/imagenes/pr-sizeMatch.webp";
import ImgSizeMatchMobile from "../../assets/imagenes/pr-sizeMatchMobile.webp";
import ImgSinFronteras1 from "../../assets/imagenes/SinFronterasImg1.webp";
import ImgSinFronteras2 from "../../assets/imagenes/SinFronterasImg2.webp";
import ImgSinFronteras3 from "../../assets/imagenes/SinFronterasImg3.webp";
import imgPayfriend1 from "../../assets/imagenes/PayfriendImg1.webp";
import imgPayfriend2 from "../../assets/imagenes/PayfriendImg2.webp";
import imgPayfriend3 from "../../assets/imagenes/PayfriendImg3.webp";
import ImgCardMobile from "../../assets/imagenes/pr-interactiveCardMovile.webp";
import ImgCard from "../../assets/imagenes/pr-interactiveCard.webp";
import ImgDishDetective1 from "../../assets/imagenes/DishDetectiveImg1.webp";
import ImgDishDetective2 from "../../assets/imagenes/DishDetectiveImg2.webp";
import ImgDishDetective3 from "../../assets/imagenes/DishDetectiveImg3.webp";
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
  const { t } = useTranslation(["projectsDesc", "projects"]);
  const [verMas, setVerMas] = useState(false);

  return (
    <>
      <WrapperListaProyectos>
        <div>
          <ProyectoTemplate
            titulo="Size Match"
            descripcion={t("sizeMatch.desc")}
            githubFront="https://github.com/KatuGT/sizematch"
            githubBack="https://github.com/KatuGT/sizematch"
            imgMobile={ImgSizeMatchMobile}
            altMobile="Caputa de pantalla de celular sitio SizeMatch"
            imgDesktop={ImgSizeMatch}
            altDesktop="Caputa de pantalla de escritorio sitio SizeMatch"
            linkDeploy="https://sizematch.net/"
            imgPsition="right"
            esGrupal={false}
            orderDos={"order-dos"}
            isOdd={true}
            tipoProyectoTexto={t("sizeMatch.typeText")}
          />
          <ProyectoMobileTemplate
            titulo="Payfriend"
            descripcion={t("payFriend.desc")}
            githubFront="https://github.com/No-Country/s8-15-t-reactnative"
            imgUno={imgPayfriend1}
            altImgUno="Captura de pantalla de inicio"
            imgDos={imgPayfriend2}
            altImgDos="Captura de pantalla de comprobande te pago"
            imgTres={imgPayfriend3}
            altImgTres="Captura de pantalla de transferencia de cryptomonedas"
            imgPsition="left"
            esGrupal={true}
            isOdd={true}
            tipoProyectoTexto={t("payFriend.typeText")}
          />
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
            imgPsition="right"
            orderDos="order-dos"
            esGrupal={true}
            isOdd={true}
            tipoProyectoTexto={t("sinFronteras.typeText")}
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
            imgPsition="left"
            tipoProyectoTexto={t("interactiveCard.typeText")}
            isOdd={false}
          />
          <ProyectoMobileTemplate
            titulo="Dish Detective"
            descripcion={t("dishDetective.desc")}
            githubFront="https://github.com/No-Country/s10-21-react-native"
            imgUno={ImgDishDetective1}
            altImgUno="Captura de pantalla inicio"
            imgDos={ImgDishDetective2}
            altImgDos="Captura de pantalla seleccionando imagen para receta"
            imgTres={ImgDishDetective3}
            altImgTres="Captura de pantalla de detalles de receta elegida"
            imgPsition="right"
            orderDos="order-dos"
            esGrupal={true}
            isOdd={false}
            tipoProyectoTexto={t("dishDetective.typeText")}
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
            imgPsition="left"
            tipoProyectoTexto={t("atlas.typeText")}
            isOdd={false}
          />
        </ProyectosSecundarios>
        <VerMasWrapper>
          <VerMasText>
            {!verMas ? t("projects:showMore") : t("projects:showLess")}
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
