import { createBrowserRouter } from 'react-router-dom';
import Inicio from '../components/Main/Inicio';
import Quienes from '../components/Main/Quienes';
import Blog from '../components/Main/Blog';
import Contact from '../components/Main/Contact';
import Socias from '../components/Main/Socias';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
  },
  {
    path: '/quienes',
    element: <Quienes />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  { path: '/socias', element: <Socias /> }
]);

export default AppRouter;