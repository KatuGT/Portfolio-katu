import { useState } from "react";
import ImgSizeMatch from "../../assets/imagenes/pr-sizeMatch.webp";
import ImgSizeMatchMobile from "../../assets/imagenes/pr-sizeMatchMobile.webp";
import ImgSinFronteras1 from "../../assets/imagenes/SinFronterasImg1.webp";
import ImgSinFronteras2 from "../../assets/imagenes/SinFronterasImg2.webp";
import ImgSinFronteras3 from "../../assets/imagenes/SinFronterasImg3.webp";
import imgPayfriend1 from "../../assets/imagenes/PayfriendImg1.webp";
import imgPayfriend2 from "../../assets/imagenes/PayfriendImg2.webp";
import imgPayfriend3 from "../../assets/imagenes/PayfriendImg3.webp";
import ImgDishDetective1 from "../../assets/imagenes/DishDetectiveImg1.webp";
import ImgDishDetective2 from "../../assets/imagenes/DishDetectiveImg2.webp";
import ImgDishDetective3 from "../../assets/imagenes/DishDetectiveImg3.webp";
import ImgBertoliMobile from "../../assets/imagenes/pr-bertoliMobile.webp";
import ImgBertoli from "../../assets/imagenes/pr-bertoli.webp";
import ImgChimpaMobile from "../../assets/imagenes/pr-chimpaMobile.webp";
import ImgChimpa from "../../assets/imagenes/pr-chimpa.webp";

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
            titulo="Chimpancé digital"
            descripcion={t("chimpance.desc")}
            imgMobile={ImgChimpaMobile}
            altMobile="Caputa de pantalla de celular sitio Chimpance Digital"
            imgDesktop={ImgChimpa}
            altDesktop="Caputa de pantalla de escritorio sitio Chimpance Digital"
            linkDeploy="https://agenciaweb.chimpance.digital/"
            imgPsition="left"
            esGrupal={false}
            isOdd={false}
            tipoProyectoTexto={t("chimpance.typeText")}
          />

          <ProyectoTemplate
            titulo="Bertoli Varrone"
            descripcion={t("bertoli.desc")}
            imgMobile={ImgBertoliMobile}
            altMobile="Caputa de pantalla de celular sitio Bertoli Varrone"
            imgDesktop={ImgBertoli}
            altDesktop="Caputa de pantalla de escritorio sitio Bertoli Varrone"
            linkDeploy="https://bv-ecom-fe.vercel.app/"
            imgPsition="right"
            esGrupal={true}
            orderDos={"order-dos"}
            isOdd={false}
            tipoProyectoTexto={t("bertoli.typeText")}
          />

          <ProyectoTemplate
            titulo="Size Match"
            descripcion={t("sizeMatch.desc")}
            githubFront="https://github.com/KatuGT/sizematch"
            githubBack="https://github.com/KatuGT/sizematch"
            imgMobile={ImgSizeMatchMobile}
            altMobile="Caputa de pantalla de celular sitio SizeMatch"
            imgDesktop={ImgSizeMatch}
            altDesktop="Caputa de pantalla de escritorio sitio SizeMatch"
            linkDeploy="https://sizematch.vercel.app/"
            imgPsition="left"
            esGrupal={false}
            isOdd={false}
            tipoProyectoTexto={t("sizeMatch.typeText")}
          />
        </div>

        <ProyectosSecundarios show={verMas}>
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
            tipoProyectoTexto={t("payFriend.typeText")}
            esGrupal={true}
            imgPsition="left"
            orderDos="order-dos"
            isOdd={true}
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
            tipoProyectoTexto={t("sinFronteras.typeText")}
            imgPsition="left"
            esGrupal={true}
            isOdd={true}
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
            tipoProyectoTexto={t("dishDetective.typeText")}
            esGrupal={true}
            imgPsition="left"
            orderDos="order-dos"
            isOdd={true}
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
