import "./cadastro.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    rne: "",
    telefone: "",
    etnia: "",
    paisOrigem: "Brasil",
    cidade: "",
    estado: "",
    cep: "",
    email: "",
    senha: "",
    dataNascimento: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8080/usuarios", formData);
      
      localStorage.setItem("userId", response.data.idUsuario);
      navigate("/perfil");
      
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <div className="html_cadastro body_cadastro">
        <div className="container d-flex justify-content-center align-items-start min-vh-100 pt-5" style={{ marginBottom: "40px" }}>
          <div className="card shadow p-4" style={{ width: "100%", maxWidth: "600px" }}>
            <h1 className="mb-4 text-center">Cadastro</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">
                  Primeiro Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="sobrenome" className="form-label">
                  Sobrenome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sobrenome"
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="dataNascimento" className="form-label">
                  Data Nascimento
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cpf" className="form-label">
                  CPF
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telefone" className="form-label">
                  Telefone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="etnia" className="form-label">
                  Etnia
                </label>
                <select
                  className="form-select"
                  id="etnia"
                  name="etnia"
                  value={formData.etnia}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="BRANCO">Branco</option>
                  <option value="PARDO">Pardo</option>
                  <option value="AMARELO">Amarelo</option>
                  <option value="INDIGENA">Indígena</option>
                  <option value="NEGRO">Negro</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="paisOrigem" className="form-label">
                  País de Origem
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="paisOrigem"
                  name="paisOrigem"
                  value={formData.paisOrigem}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cidade" className="form-label">
                  Cidade
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="estado" className="form-label">
                  Estado Onde Vive
                </label>
                <select
                  className="form-select"
                  id="estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="SP">SP</option>
                  <option value="RJ">RJ</option>
                  <option value="SC">SC</option>
                  <option value="PR">PR</option>
                  <option value="CE">CE</option>
                  <option value="PE">PE</option>
                  <option value="MG">MG</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="MT">MT</option>
                  <option value="PA">PA</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="cep" className="form-label">
                  CEP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Digite seu E-mail:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="senha" className="form-label">
                  Senha:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                />
                <span id="passwordHelpInline" className="form-text">
                  Deve conter de 8 a 20 caracteres.
                </span>
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="termos"
                    required
                  />
                  <label className="form-check-label" htmlFor="termos">
                    Concordo com o Termo e Condições
                  </label>
                </div>
              </div>

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