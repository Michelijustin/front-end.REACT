import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Vagas from './pages/Vagas/Vagas';
import Empresa from './pages/Empresa/Empresa';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Cadastro_vagas from './pages/Cadastro/Cadastro_vagas';
import Login_empresa from './pages/Login/login_empresa';
// import EmpresaVagas from './pages/EmpresaVagas';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro_vagas" element={<Cadastro_vagas/>} />
        <Route path="/login_empresa" element={<Login_empresa/>} />
        {/* <Route path="/empresa_vagas" element={<EmpresaVagas/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}