import "./cadastro.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Cadastro() {
  return (
    <>
      <Header />
      <div className="html_cadastro body_cadastro">
        <div
          className="container d-flex justify-content-center align-items-start min-vh-100 pt-5"
          style={{ marginBottom: "40px" }}
        >
          <div
            className="card shadow p-4"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <h1 className="mb-4 text-center">Cadastro</h1>
            <form method="POST">
              {/* Primeiro nome */}
              <div className="mb-3">
                <label htmlFor="validationDefault01" className="form-label">
                  Primeiro Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  required
                />
              </div>

              {/* Último nome */}
              <div className="mb-3">
                <label htmlFor="validationDefault02" className="form-label">
                  Último Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  required
                />
              </div>

              {/* Data de nascimento / CPF */}
              <div className="mb-3">
                <label htmlFor="validationDefaultCpf" className="form-label">
                  Data Nasc:
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    Nº:
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultCpf"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>

              {/* Telefone */}
              <div className="mb-3">
                <label htmlFor="validationDefaultTel" className="form-label">
                  Telefone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultTel"
                  required
                />
              </div>

              {/* Etnia */}
              <div className="mb-3">
                <label htmlFor="validationDefault04" className="form-label">
                  Etnia
                </label>
                <select
                  className="form-select"
                  id="validationDefault04"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Branco</option>
                  <option>Pardo</option>
                  <option>Amarelo</option>
                  <option>Indígena</option>
                  <option>Negro</option>
                </select>
              </div>

              {/* País de origem */}
              <div className="mb-3">
                <label htmlFor="validationDefault03" className="form-label">
                  País de Origem
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  required
                />
              </div>

              {/* Cidade */}
              <div className="mb-3">
                <label
                  htmlFor="validationDefault03Cidade"
                  className="form-label"
                >
                  Cidade
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03Cidade"
                  required
                />
              </div>

              {/* Estado */}
              <div className="mb-3">
                <label htmlFor="validationDefaultEstado" className="form-label">
                  Estado Onde Vive
                </label>
                <select
                  className="form-select"
                  id="validationDefaultEstado"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>SP</option>
                  <option>RJ</option>
                  <option>SC</option>
                  <option>PR</option>
                  <option>CE</option>
                  <option>PE</option>
                  <option>MG</option>
                  <option>AM</option>
                  <option>BA</option>
                  <option>MT</option>
                  <option>PA</option>
                </select>
              </div>

              {/* CEP */}
              <div className="mb-3">
                <label htmlFor="validationDefault05" className="form-label">
                  CEP
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend4">
                    Nº:
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault05"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="validationDefaultEmail" className="form-label">
                  Digite seu E-mail:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationDefaultEmail"
                  required
                />
              </div>

              {/* Senha */}
              <div className="mb-3">
                <label htmlFor="validationDefaultSenha" className="form-label">
                  Senha:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationDefaultSenha"
                  required
                />
                <span id="passwordHelpInline" className="form-text">
                  Deve conter de 8 a 20 caracteres.
                </span>
              </div>

              {/* Termo de uso */}
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="invalidCheck2"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck2">
                    Concordo com o Termo e Condições
                  </label>
                </div>
              </div>

              {/* Botão */}
              <div className="mb-3">
                <button className="btn btn-primary" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
