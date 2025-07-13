import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo1 from '../../assets/img/logo-buiness.avif'
import logo2 from '../../assets/img/logo-food.jpg'
import logo3 from'../../assets/img/logo-company.jpg'
import logo4 from '../../assets/img/tech-logo.png'
import logo5 from '../../assets/img/creative-logo.jpg'
import logo6 from '../../assets/img/logo-initial.jpg'
import logo7 from '../../assets/img/tech-logo.png'
import logo8 from '../../assets/img/creative-logo.jpg'
import './vagas.css'

export default function Vagas() {
  return (
    <>
      <Header />
      <div className="container vagas">
        <h1>O emprego dos seus sonhos está esperando por você...</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-5">
        <div className="col">
          <div className="card-group">
            <div className="card custom-card">
              <img src={logo1} className="card-img-top" alt="Business Empresa" />
              <div className="card-body">
                <h5 className="card-title">Assistente Adm – Business</h5>
                <p className="card-text">
                  Vaga para adultos a partir de 18 anos com ensino médio completo.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Salário:</strong> R$ 2.200,00 + VT + VR</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-custom-azul">Candidatar-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vaga 2 */}
        <div className="col">
          <div className="card-group">
            <div className="card custom-card">
              <img src={logo2} className="card-img-top" alt="Nature Food Empresa" />
              <div className="card-body">
                <h5 className="card-title">Aux. de Produção – Nature Food</h5>
                <p className="card-text">
                  Oportunidade para adultos e jovens a partir de 18 anos.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Salário:</strong> R$ 1.850,00 + VA + VT</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-custom-azul">Candidatar-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vaga 3 */}
        <div className="col">
          <div className="card-group">
            <div className="card custom-card">
              <img src={logo3} className="card-img-top" alt="company empresa" />
              <div className="card-body">
                <h5 className="card-title">Jovem Aprendiz – Company</h5>
                <p className="card-text">
                  Vaga exclusiva para jovens entre 16 e 21 anos.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Salário:</strong> R$ 980,00 + VT</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-custom-azul">Candidatar-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vaga 4 */}
        <div className="col">
          <div className="card-group">
            <div className="card custom-card">
            <img src={logo4} className="card-img-top" alt="Tech Logo Empresa" />
              <div className="card-body">
                <h5 className="card-title">Suporte Técnico – Tech Logo</h5>
                <p className="card-text">
                  Vaga para adultos com conhecimentos básicos em informática.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Salário:</strong> R$ 2.000,00 + Ajuda de Custo</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-custom-azul">Candidatar-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="row row-cols-1 row-cols-md-4 g-5">
        {/* Vaga 5 */}
        <div className="col">
          <div className="card-group">
            <div className="card custom-card">
              <img src={logo5} className="card-img-top" alt="Nature Food Empresa" />
              <div className="card-body">
                <h5 className="card-title">Designer Gráfico JR – Creative</h5>
                <p className="card-text">
                  Vaga aberta para jovens e adultos com criatividade e noções básicas de design.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Salário:</strong> R$ 1.900,00 + Flexibilidade de horário</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-custom-azul">Candidatar-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vaga 6 */}
        <div className="col">
          <div className="card-group">
            <div className="card custom-card">
              <img src={logo6} className="card-img-top" alt="Initial Logo Empresa" />
              <div className="card-body">
                <h5 className="card-title">Recepcionista – Initial Logo</h5>
                <p className="card-text">
                  Vaga para maiores de 18 anos com boa comunicação.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Salário:</strong> R$ 2.100,00 + VT + VR</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-custom-azul">Candidatar-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vaga 7 */}
        <div className="col">
          <div className="card-group">
            <div className="card custom-card">
              <img src={logo7} className="card-img-top" alt="Initial Logo Empresa" />
              <div className="card-body">
                <h5 className="card-title">Técnico de T.I. Júnior – Tech Logo</h5>
                <p className="card-text">
                  Vaga para jovens e adultos com conhecimento básico em suporte técnico.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Salário:</strong> R$ 2.300,00 + VT + VR + Plano de Saúde</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-custom-azul">Candidatar-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vaga 8 */}
        <div className="col">
          <div className="card-group">
            <div className="card custom-card">
              <img src={logo8} className="card-img-top" alt="Initial Logo Empresa" />
              <div className="card-body">
                <h5 className="card-title">Estágio em Marketing – Creative</h5>
                <p className="card-text">
                  Vaga para estudantes do ensino médio ou superior, ideal para jovens com perfil criativo.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Bolsa:</strong> R$ 1.100,00 + Auxílio Transporte</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-custom-azul">Candidatar-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/*<div class="container vagas">
        <h1>O emprego dos seus sonhos está esperando por você...</h1>
    </div>
      
    <div class="row row-cols-1 row-cols-md-4 g-5">
        <div class="col">
            <div class="card-group">
                <div class="card" style="width: 18rem;">
                    <img src={logo1} class="card-img-top" alt="Business Empresa"></img>
                    <div class="card-body">
                        <h5 class="card-title">Assistente Adm – Business</h5>
                        <p class="card-text">
                        Vaga para adultos a partir de 18 anos com ensino médio completo.
                        <span id="pontos1">...</span><span id="mais1" style="display:none">
                            Atividades: controle de documentos, atendimento ao cliente e suporte ao financeiro. Segunda a sexta-feira, horário comercial.
                        </span>
                        </p>
                        <button onclick="LeiaMais1()" id="btnLeiaMais1">Leia Mais</button>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Salário:</strong> R$ 2.200,00 + VT + VR</li>
                        </ul>
                        <div class="card-body">
                            <button class="btn btn-custom-azul">Candidatar-se</button>
                        </div>
                    </div>
               </div>
           </div>
        </div>*/}

        {/*<div class="col">
            <div class="card-group">
            <div class="card" style="width: 18rem;">
            {/*<img src={logo2} class="card-img-top" alt="Nature Food Empresa"></img>*/}



            {/*} <div class="card-body">
                <h5 class="card-title">Aux. de Produção – Nature Food</h5>
                <p class="card-text">
                Oportunidade para adultos e jovens a partir de 18 anos.
                <span id="pontos2">...</span><span id="mais2" style="display:none">
                    Auxilia na linha de montagem de produtos naturais. Não exige experiência. Turno: tarde/noite.
                </span>
                </p>
                <button onclick="LeiaMais2()" id="btnLeiaMais2">Leia Mais</button>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Salário:</strong> R$ 1.850,00 + VA + VT</li>
            </ul>
            <div class="card-body">
                <button class="btn btn-custom-azul">Candidatar-se</button>
            </div>
            </div>
        </div>
        </div>
        </div>  

        <div class="col">
            <div class="card-group">
            <div class="card" style="width: 18rem;">
            {/*<img src="img/logo-empresa.jpg" class="card-img-top" alt="Company Empresa"></img>*/}


            {/*
            <div class="card-body">
                <h5 class="card-title">Jovem Aprendiz – Company</h5>
                <p class="card-text">
                Vaga exclusiva para jovens entre 16 e 21 anos.
                <span id="pontos3">...</span><span id="mais3" style="display:none">
                    Atuação no setor administrativo. Turno de 4 horas por dia. Não é necessário ter experiência anterior.
                </span>
                </p>
                <button onclick="LeiaMais3()" id="btnLeiaMais3">Leia Mais</button>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Salário:</strong> R$ 980,00 + VT</li>
            </ul>
            <div class="card-body">
                <button class="btn btn-custom-azul">Candidatar-se</button>
            </div>
            </div>
        </div>
        </div>
        </div>

        <div class="col">
            <div class="card-group">
            <div class="card" style="width: 18rem;">
            {/*<img src="img/logotipo-tecnológico.jng" class="card-img-top" alt="Tech Logo Empresa"></img>*/}


            {/*
            <div class="card-body">
                <h5 class="card-title">Suporte Técnico – Tech Logo</h5>
                <p class="card-text">
                Vaga para adultos com conhecimentos básicos em informática.
                <span id="pontos4">...</span><span id="mais4" style="display:none">
                    Atendimento ao usuário, configuração de redes e suporte remoto. Escala 6x1. Treinamento oferecido.
                </span>
                </p>
                <button onclick="LeiaMais4()" id="btnLeiaMais4">Leia Mais</button>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Salário:</strong> R$ 2.000,00 + Ajuda de Custo</li>
            </ul>
            <div class="card-body">
                <button class="btn btn-custom-azul">Candidatar-se</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>

    <div class="row row-cols-1 row-cols-md-4 g-5">
        <div class="col">
            <div class="card-group">
                <div class="card" style="width: 18rem;">
            {/*<img src="img/logotipo-criativo.jpg" class="card-img-top" alt="Creative Agência"></img>*/}


            {/*
            <div class="card-body">
                <h5 class="card-title">Designer Gráfico JR – Creative</h5>
                <p class="card-text">
                Vaga aberta para jovens e adultos com criatividade e noções básicas de design.
                <span id="pontos5">...</span><span id="mais5" style="display:none">
                    Criação de posts, banners e materiais promocionais. Desejável conhecimento em Canva ou Photoshop.
                </span>
                </p>
                <button onclick="LeiaMais5()" id="btnLeiaMais5">Leia Mais</button>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Salário:</strong> R$ 1.900,00 + Flexibilidade de horário</li>
            </ul>
            <div class="card-body">
                <button class="btn btn-custom-azul">Candidatar-se</button>
            </div>
            </div>
        </div>
            </div>
        </div>

        <div class="col">
            <div class="card-group">
                <div class="card" style="width: 18rem;">
            <img src={logo6} class="card-img-top" alt="Initial Logo Empresa"></img>
            <div class="card-body">
                <h5 class="card-title">Recepcionista – Initial Logo</h5>
                <p class="card-text">
                Vaga para maiores de 18 anos com boa comunicação.
                <span id="pontos6">...</span><span id="mais6" style="display:none">
                    Atendimento ao público, organização de agenda e suporte à equipe. Segunda a sexta-feira, das 8h às 17h.
                </span>
                </p>
                <button onclick="LeiaMais6()" id="btnLeiaMais6">Leia Mais</button>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Salário:</strong> R$ 2.100,00 + VT + VR</li>
            </ul>
            <div class="card-body">
            <button class="btn btn-custom-azul">Candidatar-se</button>
            </div>
            </div>
        </div>
        </div>
        </div>

        <div class="col">
        <div class="card-group">
                <div class="card" style="width: 18rem;">
            {/*<img src="img/logotipo-tecnológico.jng" class="card-img-top" alt="TI Júnior Tech Logo"></img>*/}


            {/*
            <div class="card-body">
            <h5 class="card-title">Técnico de T.I. Júnior – Tech Logo</h5>
            <p class="card-text">
                Vaga para jovens e adultos com conhecimento básico em suporte técnico.
                <span id="pontos7">...</span><span id="mais7" style="display:none">
                Auxílio na manutenção de computadores, redes, formatação de sistemas e atendimento interno. Necessário conhecimento básico em Windows e redes locais. Diferencial: inglês básico. Horário comercial, de segunda a sexta.
                </span>
            </p>
            <button onclick="LeiaMais7()" id="btnLeiaMais7">Leia Mais</button>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Salário:</strong> R$ 2.300,00 + VT + VR + Plano de Saúde</li>
            </ul>
            <div class="card-body">
            <button class="btn btn-custom-azul">Candidatar-se</button>
            </div>
        </div>
        </div>
        </div>
        </div>

        <div class="col">
        <div class="card-group">
                <div class="card" style="width: 18rem;">
            {/*<img src="img/logotipo-criativo.jpg" class="card-img-top" alt="Estágio Creative"></img>*/}


            {/*<div class="card-body">
            <h5 class="card-title">Estágio em Marketing – Creative</h5>
            <p class="card-text">
                Vaga para estudantes do ensino médio ou superior, ideal para jovens com perfil criativo.
                <span id="pontos8">...</span><span id="mais8" style="display:none">
                Apoio na criação de conteúdos para redes sociais, edição simples de vídeos e agendamento de postagens. Desejável conhecimento em Canva e redes como Instagram e TikTok. Carga horária de 4 a 6 horas por dia, com flexibilidade de horário.
                </span>
            </p>
            <button onclick="LeiaMais8()" id="btnLeiaMais8">Leia Mais</button>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Bolsa:</strong> R$ 1.100,00 + Auxílio Transporte</li>
            </ul>
            <div class="card-body">
            <button class="btn btn-custom-azul">Candidatar-se</button>
            </div>
        </div>
        </div>
        </div>
        </div>
  </div>*/}

  <Footer />
  </>
  );
}