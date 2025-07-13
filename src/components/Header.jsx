import { Link } from 'react-router-dom';
import logo from '../assets/img/trabalho-gimp.png'

export default function Header() {
  return (
     <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="Logo" width="80" height="70"></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Quem somos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vagas">Vagas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/empresa">Empresa</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/login" className="btn btn-dark">Entrar</Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}