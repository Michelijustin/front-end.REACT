import Header from '../components/Header';
import Footer from '../components/Footer';
import './home.css'
import trabalho from "../assets/img/img-p.png"
import equipe from "../assets/img/equipe.png"
import empatia from "../assets/img/empatia.png"
import conquista from "../assets/img/conquista (1).png"
import compromisso from "../assets/img/compromisso.png"
import mulher from "../assets/img/negp.png"

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <div className="cor">
        <div className="container quem-somos">
            <div className="row">
                <h1>Quem somos?</h1>
            </div>
        </div>
        <div className="container comeco">
            <div className="row align-items-center">
                <p className="col-md-6">Somos uma plataforma dedicada a conectar jovens imigrantes de 16 a 22 anos a oportunidades de emprego no Brasil.</p>
                <div class="col-md-6">
                  <img src={trabalho} alt="" className="img-comeco"></img>
                </div>
            </div>
        </div>
      </div>

      <div className="container missao">
          <div className="row">
              <h2>Nossa Missão</h2>
              <p>Facilitar a inserção de jovens imigrantes no mercado de trabalho, conectando talentos a empresas que acreditam na força da diversidade e no potencial dos jovens que buscam uma nova oportunidade.</p>
          </div>
      </div>

      <div className="container valores">
          <div className="row justify-content-between">
              <h2>Nossos Valores</h2>
              <div className="topicos-valores col-md-6">
                <div className="icones">
                  <img src={equipe} alt=""></img>
                  <h4>Inclusão</h4>
                </div>
                <p>Acreditamos que todos os jovens imigrantes merecem acesso a oportunidades justas, independentemente de sua nacionalidade, cultura ou trajetória.Trabalhamos para eliminar barreiras no mercado de trabalho e garantir que cada talento seja reconhecido. </p>
              </div>
              <div className="topicos-valores col-md-6">
                <div className="icones">
                  <img src={empatia} alt=""></img>
                  <h4>Empatia</h4>
                </div>
                <p>Sabemos que recomeçar em um novo país pode ser desafiador. Por isso, nos dedicamos a criar um ambiente acolhedor, onde os jovens imigrantes encontram não apenas oportunidades, mas também apoio e compreensão para superar obstáculos.</p>
              </div>
              <div className="topicos-valores col-md-6">
                <div className="icones">
                  <img src={conquista} alt=""></img>
                  <h4>Oportunidade</h4>
                </div>
                <p> Nosso compromisso é abrir portas para aqueles que estão iniciando suas carreiras. Conectamos jovens a empregadores dispostos a investir em seu futuro, ajudando a transformar desafios em possibilidades reais de crescimento.</p>
              </div>
              <div className="topicos-valores col-md-6">
                <div className="icones">
                  <img src={compromisso} alt=""></img>
                  <h4>Compromisso</h4>
                </div>
                <p> Mais do que um site de empregos, somos uma ponte para o futuro de jovens imigrantes. Trabalhamos diariamente para construir conexões entre talentos e empresas, promovendo inclusão e desenvolvimento profissional sustentável.</p>
              </div>
          </div>
      </div>

      <div className="container comentario">
        <div className="row align-items-">
          <h2 className="col-md-12">O que dizem sobre nós ?</h2>
          <div className="col-md-6">
            <img src={mulher} alt=""></img>
          </div>
          <div className="col-md-6">
            <p>"Deixar meu país aos 18 anos foi assustador. Cheguei ao Brasil sem contatos e com dificuldades para encontrar um emprego. Foi então que descobri essa plataforma, que me abriu portas e me conectou a uma oportunidade como jovem aprendiz. Graças a esse trabalho, consegui estabilidade, continuei meus estudos e recuperei a esperança em um futuro melhor. Hoje, sei que meu esforço vale a pena e que não estou sozinho nessa jornada.</p>
            <p>Obrigada ConectaTrabajo!"</p>
            <span>— Mohamed A., imigrante senegalês,
              jovem aprendiz na área administrativa
            </span>
          </div>
         </div>
      </div>
      
    </main>
      <Footer />
    </>
  );
}