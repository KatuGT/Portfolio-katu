import styled from 'styled-components';

const Proyecto = styled.div`
  text-align: center;
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    margin-bottom: 9em;
    width: 80%;
  }

  @media screen and (min-width: 900px) {
    width: 100%;
    height: 500px;
    display: grid;
    place-items: center;
    gap: 2em;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    &:nth-child(even) {
      grid-template-columns: 2fr 1fr;
    }
  }

  @media screen and (min-width: 900px) {
    height: 500px;
    display: grid;
    place-items: center;
    gap: 2em;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
`;

const InfoProyecto = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 900px) {
    &.order-dos {
      order: 2;
    }
  }
`;
const TituloProyecto = styled.h3`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 0;
  color: ${({ theme }) => theme.subText};
`;

const DescProyecto = styled.p`
  margin-top: 0.2em;
  margin-bottom: 0.4em;
`;

const VerEnGithub = styled.a`
  color: inherit;
  text-decoration: none;
  margin-bottom: 0.3em;
`;

const LinkImagenes = styled.a`
  position: relative;
  @media screen and (min-width: 700px) {
    height: 500px;
  }
`;

const ImgProyectoMobile = styled.img`
  border-radius: 1em;
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0 4px var(--main-clr), 20px 15px 50px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 700px) {
    display: none;
  }
  @media screen and (min-width: 1300px) {
    display: block;
    height: 80%;
    width: auto;
    position: absolute;
    top: 40%;
  }

  &.right {
    @media screen and (min-width: 700px) {
      right: 80%;
    }
  }

  &.left {
    @media screen and (min-width: 700px) {
      left: 80%;
    }
  }
`;

const ImgProyecto = styled.img`
  display: none;
  @media screen and (min-width: 700px) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
  }

  @media screen and (min-width: 900px) {
  }
`;

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
