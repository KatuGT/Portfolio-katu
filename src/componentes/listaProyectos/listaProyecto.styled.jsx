import styled from "styled-components";
import { keyframes } from "styled-components";

export const WrapperListaProyectos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 4rem;
  @media screen and (min-width: 600px) {
    gap: 4rem;
    max-width: 900px;
  }
`;

const ArrowMovement = keyframes`
  100% { transform: translateY(8px)}
`;

export const VerMasWrapper = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const ArrowIcon = styled.i`
  color: #fff;
  font-size: 1.5rem;
  animation-name: ${ArrowMovement};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const VerMasText = styled.span`
  font-size: 20px;
  color: #fff;
`;


export const ProyectosSecundarios = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: all .5s linear;
  padding-bottom: ${props => props.show ? '4rem' : '0'};
  height: ${props => props.show ? '100%' : '0'};
  opacity: ${props => props.show ? '100%' : '0'};
  overflow: ${props => props.show ? 'visible' : 'hidden'};

  @media screen and (min-width: 600px) {
    gap: 4rem;
    max-width: 900px;
  }
`;


export const VerMasCheckbox = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  display: none;
`;