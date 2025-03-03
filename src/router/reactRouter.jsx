import { Route, Routes, Navigate } from 'react-router-dom';
import Inicio from '../components/Main/Inicio';
import Quienes from '../components/Main/Quienes';
import Blog from '../components/Main/Blog';
import Contact from '../components/Main/Contact';
import Socias from '../components/Main/Socias';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<Quienes />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/socias" element={<Socias />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;