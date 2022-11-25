import { DescProyecto, ImgProyecto, ImgProyectoMobile, InfoProyecto, LinkImagenes, Proyecto, TituloProyecto, VerEnGithub } from './proyectosTemplate.styled';

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
}) => {
  return (    
      <Proyecto>
        <InfoProyecto className={orderDos}>
          <TituloProyecto>{titulo}</TituloProyecto>
          <DescProyecto>{descripcion}</DescProyecto>
          <VerEnGithub href={githubFront} rel='noopener noreferrer' target='_blank'>
            <i className='fa-brands fa-github'></i> Front-end
          </VerEnGithub>
          {githubBack && (
            <VerEnGithub href={githubBack} rel='noopener noreferrer' target='_blank'>
              <i className='fa-brands fa-github'></i> Back-end
            </VerEnGithub>
          )}
        </InfoProyecto>
        <LinkImagenes
          href={linkDeploy}
          rel='noopener noreferrer'
          target='_blank'
        >
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
