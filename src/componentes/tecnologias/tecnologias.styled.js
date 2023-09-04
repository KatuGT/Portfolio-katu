import styled from "styled-components";
import { Titulo } from "../tituloSecciones/tituloSecciones";

export const WrapperTecnologias = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperLogos = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 4em;
  @media screen and (min-width: 700px){
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const WrapperTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const WrapperTechText = styled.div`
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

export const Logo = styled.img`
  height: 75px;
  width: 75px;
  object-fit: contain;
`;

export const InfoExtra = styled.p`
  text-align: center;
  margin-top: 0;
  color: ${({ theme }) => theme.text};
`;

export const NuevoTituloSeccion = styled(Titulo)`
  margin-bottom: 0.5em;
`;
