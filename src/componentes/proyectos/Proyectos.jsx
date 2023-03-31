import { useTranslation } from 'react-i18next';
import Divisor from '../divisor/Divisor';
import ListaProyectos from '../listaProyectos/ListaProyectos';
import {
  LabelSpan,
  MainWrapperPruectos,
  WrapperProyectos,
  WrapperTipoProyecto
} from './proyectos.styled';

const Proyectos = () => {
  const { t } = useTranslation(['projects']);

  return (
    <>
      <Divisor />
      <MainWrapperPruectos id='proyectos'>
        <WrapperTipoProyecto>
            <LabelSpan>{t('projects')}</LabelSpan>
        </WrapperTipoProyecto>
        <WrapperProyectos>
            <ListaProyectos />
        </WrapperProyectos>
      </MainWrapperPruectos>
    </>
  );
};

export default Proyectos;
