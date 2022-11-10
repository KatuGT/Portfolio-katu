import styled from 'styled-components';

export const MainWrapperPruectos = styled.section`
  width: 100%;
  margin: 0 auto;
`;

export const WrapperProyectos = styled.section`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  transition: 1s ease;
  translate: -200%;
  translate: ${(props) =>
    props.showProject === 'proyectosIndivivuales' ? '-200%' : '0'};
  @media screen and (min-width: 1400px) {
    width: 90%;
  }

  @media screen and (min-width: 1500px) {
    width: 85%;
  }

  @media screen and (min-width: 1600px) {
    width: 80%;
  }

  @media screen and (min-width: 1800px) {
    width: 65%;
  }
`;

export const WrapperTipoProyecto = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  && .linkProyectos {
    color: ${({ theme }) => theme.textProject};
    font-size: 2rem;
    font-weight: 300;
  }

  && .linkProyectos.active {
    color: var(--main-clr);
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const LabelTipoProyecto = styled.label`
  cursor: pointer;
`;

export const InputTipoProyecto = styled.input`
  display: none;
`;

export const LabelSpan = styled.span`
  ${InputTipoProyecto}:checked + && {
    color: var(--main-clr);
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const WrapperListaProductos = styled.div`
  translate: ${(props) => (props.hide === 'left' ? '-100%' : '200%')};
`;
