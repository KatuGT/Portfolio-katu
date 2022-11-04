import { createBrowserRouter } from 'react-router-dom';
import Proyectos from './componentes/Proyectos';
import ProyectosEnGrupo from './componentes/ProyectosEnGrupo';
import ProyectosIndividuales from './componentes/ProyectosIndividuales';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Proyectos />,
    children: [
        {
          index: true,
          element: <ProyectosIndividuales />,
        },
        {
            path: "en-grupo",
            element: <ProyectosEnGrupo />,
          },
      ],
  },
]);
export default Router;
