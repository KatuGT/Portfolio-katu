import {
  DescProyecto,
  ImgProyecto,
  ImgProyectoMobile,
  InfoProyecto,
  LinkImagenes,
  Proyecto,
  TipoProyecto,
  TituloProyecto,
  VerEnGithub,
} from "./proyectosTemplate.styled";

const ProyectoTemplate = ({
  titulo,
  descripcion,
  githubFront,
  githubBack,
  imgMobile,
  altMobile,
  imgDesktop,
  altDesktop,
  linkDeploy,
  orderDos,
  imgPsition,
  esGrupal,
  tipoProyectoTexto,
  isOdd
}) => {
  return (
    <Proyecto isOdd={isOdd}>
      <InfoProyecto className={orderDos}>
        <TituloProyecto>{titulo}</TituloProyecto>
        <TipoProyecto>
          {esGrupal ? (
            <i class="fa-solid fa-people-group"></i>
          ) : (
            <i class="fa-solid fa-person"></i>
          )}
          <small>{tipoProyectoTexto}</small>
        </TipoProyecto>
        <DescProyecto>{descripcion}</DescProyecto>
        <VerEnGithub
          href={githubFront}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i> Front-end
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
      <LinkImagenes href={linkDeploy} rel="noopener noreferrer" target="_blank">
        <ImgProyectoMobile
          src={imgMobile}
          alt={altMobile}
          className={imgPsition}
        />
        <ImgProyecto src={imgDesktop} alt={altDesktop} />
      </LinkImagenes>
    </Proyecto>
  );
};

export default ProyectoTemplate;
