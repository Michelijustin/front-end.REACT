import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo from '../../assets/img/trabalho-gimp.png'
import { Link } from 'react-router-dom';
import './empresa.css'
import recrutadora from "../../assets/img/recru.jpg"
import logo1 from "../../assets/img/logo-buiness.avif"
import logo2 from "../../assets/img/logo-company.jpg"
import logo3 from "../../assets/img/logo-food.jpg"
import logo4 from "../../assets/img/tech-logo.png"
import logo5 from "../../assets/img/creative-logo.jpg"
import logo6 from "../../assets/img/logo-initial.jpg"
import diversidade from "../../assets/img/diversidade1.png"
import resiliencia from "../../assets/img/resiliencia.png"
import apoio from "../../assets/img/apoio.png"
import programas from "../../assets/img/programas.png"
import recrutador1 from "../../assets/img/recruta1.jpg"
import recrutador2 from "../../assets/img/pexels-nkhajotia-1486064.jpg"
import comunidade from "../../assets/img/quem-somos.png"

export default function Empresa() {
  return (
    <>
       <Header />
        <main>
            <div className="cor">
                <div className="container comeco">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1>Seja parte da mudança!</h1>
                            <p> Ao contratar jovens imigrantes, sua empresa não apenas ganha profissionais dedicados e motivados, mas também contribui para uma sociedade mais inclusiva e diversa.</p>
                            <Link to="/cadastro_vagas" className="botao_vagas">Anuncie uma vaga!</Link>
                        </div>
                        <div className="col-md-6"><img src={recrutadora} alt=""></img></div>
                    </div>
                </div>
            </div>

            <div className="container empresas">
                <div className="row">
                    <h2>Algumas das empresas que estão conosco neste processo de recrutamento:
                    </h2>
                    <div className="logos">Name
                        <div><img src={logo1} alt=""></img></div>
                        <div><img src={logo2} alt=""></img></div>
                        <div><img src={logo3} alt=""></img></div>
                        <div><img src={logo4} alt=""></img></div>
                        <div><img src={logo5} alt=""></img></div>
                        <div><img src={logo6} alt=""></img></div>
                    </div>
                </div>
            </div>

            <div className="container funciona">
                <div className="row justify-content-between">
                    <h2>Como funciona?</h2>
                    <div className="topicos-valores col-md-6">
                        <div className="icones">
                            <img src={diversidade} alt=""></img>
                            <h4>Diversidade e inovação</h4>
                        </div>
                        <p>Equipes multiculturais trazem novas perspectivas e enriquecem o ambiente de trabalho.</p>
                    </div>
                    <div className="topicos-valores col-md-6">
                        <div className="icones">
                            <img src={resiliencia} alt=""></img>
                            <h4>Compromisso e resiliência</h4>
                        </div>
                        <p>Muitos imigrantes enfrentaram desafios significativos e demonstram grande determinação e vontade de crescer.</p>
                    </div>
                <div className="topicos-valores col-md-6">
                        <div className="icones">
                            <img src={apoio} alt=""></img>
                            <h4>Apoio a políticas de inclusão</h4>
                        </div>
                    <p>Valorize a responsabilidade social da sua empresa ao oferecer oportunidades para quem precisa.</p>
                </div>
                <div className="topicos-valores col-md-6">
                        <div className="icones">
                            <img src={programas} alt=""></img>
                            <h4>Programas de Jovem Aprendiz</h4>
                        </div>
                    <p>Incentivos e benefícios ao contratar jovens em busca de sua primeira experiência profissional.</p>
                </div>
                </div>
            </div>

            <div className="container comentarios">
                <div className="row">
                    <h2>O que dizem sobre a ConectaTrabajo</h2>
                    <div className="comentario-junto">
                        <div className="comentario">
                            <div className="foto-recrutador">
                                <img src={recrutador1} alt=""></img>
                                <p>TechSolutions Ltda. <br></br>
                                    Recrutador: Laura Almeida
                                </p>
                            </div>
                            <p>“Estamos extremamente felizes com a contratação de Ruberto schwartzhaupt. Sua experiência e perspectiva única trouxeram uma nova energia para nossa equipe de TI. A diversidade que ele trouxe para o nosso time tem sido fundamental para a inovação que estamos buscando. Agradecemos ao site por nos conectar com esse talento incrível!”</p>
                        </div>
                        <div className="comentario">
                            <div className="foto-recrutador">
                                <img src={recrutador2} alt=""></img>
                                <p>FinançaPro S/A <br></br>
                                    Recrutador: João Souza
                                </p>
                            </div>
                            <p>“Após conhecer Renan Cadmiel, um dos profissionais que contratamos através do site, podemos afirmar que nossa decisão foi a mais acertada. A experiência internacional e o conhecimento financeiro que ele trouxe superaram nossas expectativas. Estamos muito satisfeitos com o desempenho dele e com o apoio que o site nos deu para encontrar esse talento valioso.”</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cor-fim">
                <div className="container frase-final">
                    <div className="row  justify-content-between align-items-center">
                        <div className="col-md-7 frase-anuncie">
                            <p>Junte-se a nós e faça parte de uma comunidade que valoriza a diversidade, a inclusão e as oportunidades para todos!</p>
                            <Link to="/cadastro_vagas" className="botao_vagas">Anunciar Vaga!</Link>
                        </div>
                        <div className="col-md-5">
                            <img src={comunidade} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </>
  );
}