import Header from '../components/Header';
import Footer from '../components/Footer';
import login from "../assets/img/imagem-login.jpg"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
        <Header />
          <main>
                <div className="container p-5">
                    <div className="row justify-content-center">
                        <form className="col col-md-5">
                            <img src={login} className="img_login" height="200" width="200"></img>
                            <h1 className="h3 mb-3 fw-normal"> Login</h1>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="your-email@gmail.com"/>
                                <label for="floatingInput">E-mail</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="senha"/>
                                <label for="floatingInput">Senha</label>
                            </div>
                            <div className="form-check text-start my-3">
                                <input type="checkbox" className="form-check-input" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">Lembrar-me</label>
                            </div>
                            <a href="#" className="link-primary">Esqueci a Senha</a><br></br>
                            <Link to="/cadastro" className="link-primary">Cadastrar</Link>
                            <button className="btn btn-primary w-100 py-2">Entrar</button>
                        </form>
                
                    </div>
                </div>
            </main>
        <Footer />
    </>
  );
}