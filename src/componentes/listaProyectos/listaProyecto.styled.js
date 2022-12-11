import styled from 'styled-components';

export const WrapperListaProyectos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 4rem;
  @media screen and (min-width: 600px) {
    gap: 9rem;
    width: 100%;
  }
`;
