import styled from 'styled-components';

export const WrapperProyectos = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  && .linkProyectos{
    color: ${({ theme }) => theme.textProject};
    font-size: 2rem;
    font-weight: 300;
  }

  && .linkProyectos.active{
    color: var(--main-clr);
    font-size: 2rem;
    font-weight: 700;
  }
`;