import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Laboratorios from './pages/Laboratorios';
import CasosDeEstudio from './pages/CasosDeEstudio';
import Talleres from './pages/Talleres';
import './index.css';

export default function App() {
  return (
    <BrowserRouter basename="/">
      <header className="site-header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/laboratorios">Laboratorios</NavLink>
          <NavLink to="/casos-de-estudio">Casos de Estudio</NavLink>
          <NavLink to="/talleres">Talleres</NavLink>
        </nav>
      </header>
      <main className="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/laboratorios" element={<Laboratorios />} />
          <Route path="/casos-de-estudio" element={<CasosDeEstudio />} />
          <Route path="/talleres" element={<Talleres />} />
        </Routes>
      </main>
      <footer className="site-footer"></footer>
    </BrowserRouter>
  );
}
