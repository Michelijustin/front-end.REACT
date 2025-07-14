import login from "../../assets/img/login7.png"
import { Link } from 'react-router-dom';
import './login.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Login_empresa() {
  return (
    <>
    <Header />
    <main className="main">
          <div className="login">
            <form className="col col-md-12">
              <img src={login} className="img_login mx-auto d-block" height="170" width="170"/>
              <h1 className="h3 mb-3 fw-normal text-center">Entrar</h1>
              <div className="form-floating">
                <input type="" className="form-control" id="floatingInput" placeholder="Empresa"/>
                <label htmlFor="floatingInput">Empresa</label>
              </div>
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="your-email@gmail.com" />
                <label htmlFor="floatingInput">E-mail</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              <div className="esqueceu_lembrar">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">Lembrar-me</label>
                  </div>
                  <a href="#" className="esqueceu">Esqueceu sua Senha?</a>
              </div>
              <button className="entrar">Entrar</button>
              <div className="cadastro">
                  <Link to="/cadastro" className="cadastrar">Ainda não tem uma cadastro? <strong>Cadastre-se</strong></Link>
              </div>
            </form>
          </div>
        </main>
    <Footer />
    </>
  )
}