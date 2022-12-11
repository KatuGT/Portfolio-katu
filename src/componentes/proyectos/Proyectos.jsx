import { useTranslation } from 'react-i18next';
import {
  InputTipoProyecto,
  LabelSpan,
  LabelTipoProyecto,
  MainWrapperPruectos,
  WrapperListaProductos,
  WrapperProyectos,
  WrapperTipoProyecto,
} from './proyectos.styled';
import ProyectosEnGrupo from '../listaProyectos/ProyectosEnGrupo';
import ProyectosIndividuales from '../listaProyectos/ProyectosIndividuales';
import { useState } from 'react';
import Divisor from '../divisor/Divisor';

const Proyectos = () => {
  const { t } = useTranslation(['projects']);

  const [tipoProyecto, setTipoProyecto] = useState('');

  return (
    <>
      <Divisor />
      <MainWrapperPruectos id='proyectos'>
        <WrapperTipoProyecto>
          <LabelTipoProyecto className='linkProyectos'>
            <InputTipoProyecto
              type='radio'
              name='tipoProyecto'
              value='proyectosIndivivuales'
              onClick={(e) => setTipoProyecto(e.target.value)}
            />
            <LabelSpan>{t('personalProjects')}</LabelSpan>
          </LabelTipoProyecto>
          <LabelTipoProyecto className='linkProyectos'>
            <InputTipoProyecto
              type='radio'
              name='tipoProyecto'
              value='proyectoGrupales'
              defaultChecked
              onClick={(e) => setTipoProyecto(e.target.value)}
            />
            <LabelSpan>{t('groupProjects')}</LabelSpan>
          </LabelTipoProyecto>
        </WrapperTipoProyecto>
        <WrapperProyectos showProject={tipoProyecto}>
          <WrapperListaProductos>
            <ProyectosIndividuales />
          </WrapperListaProductos>
          <WrapperListaProductos hide='left'>
            <ProyectosEnGrupo />
          </WrapperListaProductos>
        </WrapperProyectos>
      </MainWrapperPruectos>
    </>
  );
};

export default Proyectos;
