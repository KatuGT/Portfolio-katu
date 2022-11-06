import styled from "styled-components";

export const WrapperSobreMi = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  color: ${({ theme }) => theme.text};
`;

export const WrapperTituloRedes = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: default;
`;
export const Katu = styled.h1`
  font-size: 3em;
  margin-bottom: 0;
  span {
    color: transparent;
    -webkit-text-stroke: 0.8px var(--main-clr);
    position: relative;
  }
  span::after {
    content: "Katu";
    position: absolute;
    -webkit-text-stroke: 0;
  color: ${({ theme }) => theme.text};
    left: 5%;
    top: -5%;
    z-index: -100;
    clip-path: circle(170% at 0% 0%);
    transition: clip-path 0.3s ease;
  }

  span:hover {
    color: ${({ theme }) => theme.text};
  }

  span:hover::after {
    clip-path: circle(0% at 100% 100%);
  }

  @media screen and (min-width: 800px) {
    font-size: 5em;
  }
`;
export const FrontEnd = styled.h2`
  margin-top: 0;
  color: var(--main-clr);
  font-size: 2em;
  font-weight: 400;
  @media screen and (min-width: 800px) {
    font-size: 3em;
  }
`;

export const Redes = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2em;
  margin: 1em;

  i {
    margin-right: 0.5em;
    color: transparent;
    -webkit-text-stroke: 0.8px var(--main-clr);
    position: relative;
  }
  /* Estilos a iconos redes */
  .fa-github::after,
  .fa-linkedin-in::after,
  .fa-file::after {
    position: absolute;
    -webkit-text-stroke: 0;
    color: ${({ theme }) => theme.text};
    z-index: -100;
    clip-path: circle(140.7% at 100% 100%);
    transition: clip-path 1s ease;
  }

  .fa-linkedin-in::after {
    content: "\f0e1";
    right: 20%;
    top: -10%;
  }

  .fa-github::after {
    content: "\f09b";
    left: 15%;
    top: 10%;
  }

  .fa-file::after {
    content: "\f15b";
    right: 20%;
    top: 10%;
  }

  p {
    margin: 0;
    font-size: 0.8em;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 1em;

  &:hover .fa-linkedin-in::after,
  &:hover .fa-github::after,
  &:hover .fa-file::after {
    clip-path: circle(0% at 100% 100%);
  }

  &:hover .fa-linkedin-in,
  &:hover .fa-github,
  &:hover .fa-file {
    color: ${({ theme }) => theme.text};
  }
`;

export const Presentacion = styled.p`
  text-align: center;
  width: min(100%, 500px);
  font-size: 1.2em;
  margin: 0;
`;
