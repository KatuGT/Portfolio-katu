import { Outlet, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { WrapperProyectos, WrapperTipoProyecto } from './proyectos.styled';

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
