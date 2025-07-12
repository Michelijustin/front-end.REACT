import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cadastro_vagas() {
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-start min-vh-100 pt-5" style={{marginBottom: '40px'}}>
        <div className="card shadow p-4" style={{ width: '100%', maxWidth: '600px' }}>
          <h2 className="mb-4 text-center">Cadastro de Vagas</h2>
          <form method="POST">
            <div className="mb-3">
              <label htmlFor="tipo_vinculo" className="form-label">Tipo de Vínculo:</label>
              <select id="tipo_vinculo" name="tipo_vinculo" className="form-select">
                <option value="CLT">CLT</option>
                <option value="PJ">PJ</option>
                <option value="Estágio">Estágio</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="jornada" className="form-label">Jornada:</label>
              <input type="text" id="jornada" name="jornada" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="turno" className="form-label">Turno:</label>
              <select id="turno" name="turno" className="form-select">
                <option value="Matutino">Matutino</option>
                <option value="Vespertino">Vespertino</option>
                <option value="Noturno">Noturno</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="cargo" className="form-label">Cargo:</label>
              <input type="text" id="cargo" name="cargo" required className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="beneficios" className="form-label">Benefícios:</label>
              <input type="text" id="beneficios" name="beneficios" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="remuneracao" className="form-label">Remuneração:</label>
              <input type="text" id="remuneracao" name="remuneracao" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="localizacao" className="form-label">Localização:</label>
              <input type="text" id="localizacao" name="localizacao" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="requisitos" className="form-label">Requisitos:</label>
              <input type="text" id="requisitos" name="requisitos" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">Descrição:</label>
              <input type="text" id="descricao" name="descricao" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="email_recrutador" className="form-label">E-mail do Recrutador:</label>
              <input type="email" id="email_recrutador" name="email_recrutador" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="limite_inscricao" className="form-label">Limite de Inscrição:</label>
              <input type="date" id="limite_inscricao" name="limite_inscricao" className="form-control" />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">Cadastrar Vaga</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}