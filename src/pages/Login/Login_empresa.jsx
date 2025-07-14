import login from "../../assets/img/login7.png"
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Aqui você pode validar os dados do login, por exemplo.
    // Simulando login com sucesso:
    const loginSucesso = true;

    if (loginSucesso) {
      navigate('/empresa_vagas'); // redireciona para a página de vagas
    } else {
      alert('Login inválido');
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="login">
          <form className="col col-md-12" onSubmit={handleLogin}>
            <img src={login} className="img_login mx-auto d-block" height="170" width="170"/>
            <h1 className="h3 mb-3 fw-normal text-center">Entrar</h1>

            <div className="form-floating">
              <input type="text" className="form-control" id="empresa" placeholder="Empresa" />
              <label htmlFor="empresa">Empresa</label>
            </div>

            <div className="form-floating">
              <input type="email" className="form-control" id="email" placeholder="your-email@gmail.com" />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="form-floating">
              <input type="password" className="form-control" id="senha" placeholder="Senha" />
              <label htmlFor="senha">Senha</label>
            </div>

            <div className="esqueceu_lembrar">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Lembrar-me</label>
              </div>
              <a href="#" className="esqueceu">Esqueceu sua Senha?</a>
            </div>

            <button className="entrar" type="submit">Entrar</button>

            <div className="cadastro">
              <Link to="/cadastro" className="cadastrar">
                Ainda não tem um cadastro? <strong>Cadastre-se</strong>
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
