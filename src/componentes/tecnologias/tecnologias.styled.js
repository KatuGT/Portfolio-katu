import styled from "styled-components";
import { Titulo } from '../tituloSecciones/tituloSecciones';

export const WrapperTecnologias = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const WrapperLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  margin-bottom: 4em;

  @media screen and (min-width: 566px) {
    width: 450px;
  }
`;

export const Logo = styled.img`
  height: 75px;
  width: 75px;
  object-fit: contain;
`;

export const InfoExtra = styled.p`
  text-align: center;
  margin-top: 0;
  color: ${({theme}) => theme.text};

`;

export const NuevoTituloSeccion = styled(Titulo)`
  margin-bottom: 0.5em;
`
