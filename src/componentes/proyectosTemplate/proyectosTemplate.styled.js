import styled from "styled-components";

export const Proyecto = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
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
    &:nth-child(${props => props.isOdd ? 'odd' : 'even'}) {
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

export const InfoProyecto = styled.div`
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
export const TituloProyecto = styled.h3`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 0;
  color: ${({ theme }) => theme.subText};
`;

export const TipoProyecto = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 0.2rem;
  color: var(--main-clr-dark);
`;

export const DescProyecto = styled.p`
  margin-top: 0.2em;
  margin-bottom: 0.4em;
  text-align: left;
`;

export const VerEnGithub = styled.a`
  color: inherit;
  text-decoration: none;
  margin-bottom: 0.3em;
`;

export const LinkImagenes = styled.a`
  position: relative;
  @media screen and (min-width: 700px) {
    height: 400px;
  }
`;

export const WrapperImagenesMobile = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  @media screen and (min-width: 700px) {
  }
`;

export const ImgProyectoMobileOnly = styled.img`
  position: relative;
  width: 0;
  flex-grow: 1;
  object-fit: cover;
  object-position: top center;
  transition: width ease 1s;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  &&:hover {
    width: 200px;
  }
`;

export const ImgProyectoMobile = styled.img`
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

export const ImgProyecto = styled.img`
  display: none;
  @media screen and (min-width: 700px) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
  }
`;
