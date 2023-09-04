import styled from "styled-components";

export const WrapperLineas = styled.div`
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LineaNegra = styled.div`
  height: 1px;
  width: min(300px, 100%);
  position: relative;
  background-color: black;
  top: 0;
`;

export const LineaVerde = styled.div`
  height: 1px;
  width: min(300px, 100%);
  position: relative;
  top: 2px;
  left: 10px;
  background-color: var(--main-clr);
`;
