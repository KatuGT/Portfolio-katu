import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


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

const WrapperTipoProyecto = styled.div`
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

const Proyectos = () => {
  const  { t } = useTranslation(['projects'])

  return (
    <section id='proyectos'>
      <WrapperTipoProyecto>
        <NavLink
          to={'/'}
          className='linkProyectos'
        >
          {t('personalProjects')}
        </NavLink>
        <NavLink
          to={'en-grupo'}
          className='linkProyectos'
        >
          {t('groupProjects')}
        </NavLink>
      </WrapperTipoProyecto>
      <WrapperProyectos>
        <Outlet />
      </WrapperProyectos>
    </section>
  );
};

export default Proyectos;
