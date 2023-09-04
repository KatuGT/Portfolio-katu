import styled from "styled-components";

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
`;

export const WrapperTipoProyecto = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LabelSpan = styled.p`
  margin-bottom: 2rem;
  color: var(--main-clr);
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  cursor: context-menu;
`;
