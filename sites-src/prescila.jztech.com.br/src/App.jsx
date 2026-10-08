import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Site from './site/Site';

// Página única. Os endereços antigos continuam valendo: /palestras e /feedbacks caem na seção de empresas;
// /links vai para a página de links nova (/bio/, arquivo estático em public/bio).
const ParaBio = () => { useEffect(() => { location.replace('/bio/'); }, []); return null; };
const Secao = ({ id }) => { useEffect(() => { history.replaceState(null, '', '/#' + id); }, [id]); return <Site />; };

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/links" element={<ParaBio />} />
        <Route path="/palestras" element={<Secao id="empresas" />} />
        <Route path="/feedbacks" element={<Secao id="empresas" />} />
        <Route path="*" element={<Site />} />
      </Routes>
    </Router>
  );
}
