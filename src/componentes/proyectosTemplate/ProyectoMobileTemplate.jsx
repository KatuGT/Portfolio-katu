import {
  DescProyecto,
  ImgProyectoMobileOnly,
  InfoProyecto,
  Proyecto,
  TituloProyecto,
  VerEnGithub,
  WrapperImagenesMobile,
} from "./proyectosTemplate.styled";

const ProyectoMobileTemplate = ({
  titulo,
  descripcion,
  githubFront,
  githubBack,
  imgUno,
  altImgUno,
  imgDos,
  altImgDos,
  imgTres,
  altImgTres,
  linkDeploy,
  orderDos,
  linkApk,
}) => {
  return (
    <Proyecto>
      <InfoProyecto className={orderDos}>
        <TituloProyecto>{titulo}</TituloProyecto>
        <DescProyecto>{descripcion}</DescProyecto>
        <VerEnGithub
          href={githubFront}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i> Monorepo
        </VerEnGithub>
        <VerEnGithub href={linkApk} rel="noopener noreferrer" target="_blank">
          <i class="fa-solid fa-file-arrow-down"></i> Descarga archivo .apk
        </VerEnGithub>
        {githubBack && (
          <VerEnGithub
            href={githubBack}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i> Back-end
          </VerEnGithub>
        )}
      </InfoProyecto>
      <WrapperImagenesMobile
        href={linkDeploy}
        rel="noopener noreferrer"
        target="_blank"
      >
        <ImgProyectoMobileOnly
          src={imgUno}
          alt={altImgUno}
          className="mainImg"
        />
        <ImgProyectoMobileOnly
          src={imgDos}
          alt={altImgDos}
          className="secondaryImg"
        />
        <ImgProyectoMobileOnly
          src={imgTres}
          alt={altImgTres}
          className="thirdImg"
        />
      </WrapperImagenesMobile>
    </Proyecto>
  );
};

export default ProyectoMobileTemplate;
