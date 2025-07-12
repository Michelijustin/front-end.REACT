import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './vagas.css'

export default function Vagas() {
  return (
    <>
        <Header />
            <main>
                <div className="container vagas">
                    <h1>O emprego dos seus sonhos está esperando por você...</h1>
                
                    <div className="vaga">
                        <h2>Jovem Aprendiz Administrativo</h2>
                        <p>Oportunidade para desenvolver habilidades administrativas em um ambiente corporativo.</p>
                        <a href="#">Candidatar-se</a>
                    </div>
                
                    <div className="vaga">
                        <h2>Jovem Aprendiz Atendimento</h2>
                        <p>Aprenda e atue no atendimento ao cliente e suporte em diversas áreas.</p>
                        <a href="#">Candidatar-se</a>
                    </div>
                
                    <div className="vaga">
                        <h2>Jovem Aprendiz Logística</h2>
                        <p>Trabalhe no setor de logística, auxiliando no controle de estoque e distribuição.</p>
                        <a href="#">Candidatar-se</a>
                    </div>
                </div>
            </main>
        <Footer />
    </>
  );
}