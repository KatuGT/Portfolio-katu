import { useState } from "react";
import ImgZonaInmo from "../../assets/imagenes/pr-zonaInmo.webp";
import ImgZonaInmoMobile from "../../assets/imagenes/pr-zonaInmoMobile.webp";
import imgAgroMobile from "../../assets/imagenes/pr-chimpaAgroMobile.webp";
import imgAapreMobile from "../../assets/imagenes/pr-aapreMobile.webp";
import imgRepowerMobile from "../../assets/imagenes/pr-repowerMobile.webp";

import imgPayfriend1 from "../../assets/imagenes/PayfriendImg1.webp";
import imgPayfriend2 from "../../assets/imagenes/PayfriendImg2.webp";
import imgPayfriend3 from "../../assets/imagenes/PayfriendImg3.webp";
import imgAgro from "../../assets/imagenes/pr-chimpaAgro.webp";
import imgAapre from "../../assets/imagenes/pr-aapre.webp";
import imgRepower from "../../assets/imagenes/pr-repower.webp";
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
            titulo="Aapresid - asociate"
            descripcion={t("aapresid.desc")}
            imgMobile={imgAapreMobile}
            altMobile="Caputa de pantalla de celular sitio Aapresid"
            imgDesktop={imgAapre}
            altDesktop="Caputa de pantalla de escritorio sitio Aapresid"
            linkDeploy="https://www.aapresid.org.ar/es/asociate"
            imgPsition="left"
            esGrupal={true}
            isOdd={false}
            tipoProyectoTexto={t("aapresid.typeText")}
          />

          <ProyectoTemplate
            titulo="RepowerLab"
            descripcion={t("repower.desc")}
            imgMobile={imgRepowerMobile}
            altMobile="Caputa de pantalla de celular sitio RepowerLab"
            imgDesktop={imgRepower}
            altDesktop="Caputa de pantalla de escritorio sitio Zona Inmo"
            linkDeploy="https://repowerlab.com/"
            imgPsition="right"
            esGrupal={true}
            isOdd={false}
            orderDos={"order-dos"}
            tipoProyectoTexto={t("repower.typeText")}
          />
          <ProyectoTemplate
            titulo="Chimpancé digital - Agencia Web"
            descripcion={t("chimpance.desc")}
            imgMobile={ImgChimpaMobile}
            altMobile="Caputa de pantalla de celular sitio Chimpance Digital"
            imgDesktop={ImgChimpa}
            altDesktop="Caputa de pantalla de escritorio sitio Chimpance Digital"
            linkDeploy="https://www.chimpance.digital/agenciaweb"
            imgPsition="left"
            esGrupal={false}
            isOdd={false}
            tipoProyectoTexto={t("chimpance.typeText")}
          />
          <ProyectoTemplate
            titulo="Chimpancé digital - e Book Agro"
            descripcion={t("ebookAgro.desc")}
            imgMobile={imgAgroMobile}
            altMobile="Caputa de pantalla de celular sitio Zona Inmo"
            imgDesktop={imgAgro}
            altDesktop="Caputa de pantalla de escritorio sitio Zona Inmo"
            linkDeploy="https://www.chimpance.digital/e-book-agro"
            imgPsition="right"
            esGrupal={false}
            isOdd={false}
            orderDos={"order-dos"}
            tipoProyectoTexto={t("ebookAgro.typeText")}
          />
        </div>

        <ProyectosSecundarios show={verMas}>
          <ProyectoTemplate
            titulo="Bertoli Varrone"
            descripcion={t("bertoli.desc")}
            imgMobile={ImgBertoliMobile}
            altMobile="Caputa de pantalla de celular sitio Bertoli Varrone"
            imgDesktop={ImgBertoli}
            altDesktop="Caputa de pantalla de escritorio sitio Bertoli Varrone"
            linkDeploy="https://bv-ecom-fe.vercel.app/"
            imgPsition="left"
            esGrupal={true}
            isOdd={false}
            tipoProyectoTexto={t("bertoli.typeText")}
          />

          <ProyectoTemplate
            titulo="Zona Inmo"
            descripcion={t("zonaInmo.desc")}
            imgMobile={ImgZonaInmoMobile}
            altMobile="Caputa de pantalla de celular sitio Zona Inmo"
            imgDesktop={ImgZonaInmo}
            altDesktop="Caputa de pantalla de escritorio sitio Zona Inmo"
            linkDeploy="https://www.zonainmo.com.py/"
            imgPsition="right"
            orderDos={"order-dos"}
            esGrupal={true}
            isOdd={false}
            tipoProyectoTexto={t("zonaInmo.typeText")}
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
            tipoProyectoTexto={t("payFriend.typeText")}
            esGrupal={true}
            imgPsition="right"
            // orderDos="order-dos"
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
