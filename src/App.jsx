import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vagas from './pages/Vagas';
import Empresa from './pages/Empresa';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}