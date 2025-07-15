import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VagaCard from "../components/VagaCard";

const EmpresaVagas = () => {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    localizacao: "",
    competencias: "",
    modalidade: "REMOTO",
    requisitos: "",
    beneficios: "",
    responsabilidade: "",
    descricaoEmpresa: "",
    descricao: "",
    salario: 0.0,
    areaAtuacao: "",
  });
  const [editingId, setEditingId] = useState(null);

  const fetchVagas = async () => {
  try {
    const response = await axios.get("http://localhost:8080/vagas", {
      timeout: 5000 // 5 segundos de timeout
    });
    setVagas(response.data);
  } catch (err) {
    if (err.code === "ECONNABORTED") {
      setError("Tempo de conexão esgotado. O servidor está lento?");
    } else if (err.code === "ERR_NETWORK") {
      setError("Não foi possível conectar ao servidor. Verifique se o backend está rodando.");
    } else {
      setError("Erro ao carregar vagas: " + err.message);
    }
    console.error("Detalhes do erro:", err);
  } finally {
    setIsLoading(false);
  }
};
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "salario" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Obtenha o ID da empresa do usuário logado
    const empresaId = localStorage.getItem("empresaId");
    
    if (!empresaId) {
      throw new Error("Nenhuma empresa associada ao usuário. Faça login novamente.");
    }

    const vagaData = {
      ...formData,
      dataPublicacao: new Date().toISOString(),
      empresa: { idEmpresa: 1 } // Use um ID que exista no seu banco
    };

    console.log("Dados sendo enviados:", JSON.stringify(vagaData, null, 2));

    if (editingId) {
      const response = await axios.put(`http://localhost:8080/vagas/${editingId}`, vagaData);
      setVagas(vagas.map(v => v.idVaga === editingId ? response.data : v));
    } else {
      const response = await axios.post("http://localhost:8080/vagas", vagaData);
      setVagas([...vagas, response.data]);
    }

    setShowForm(false);
    setEditingId(null);
    resetForm();
  } catch (err) {
    console.error("Erro detalhado:", {
      message: err.message,
      response: err.response?.data,
      status: err.response?.status,
    });
    
    setError(err.response?.data?.message || "Erro ao salvar vaga. Verifique o console para detalhes.");
  }
};

  const handleEdit = (vaga) => {
  if (!vaga) {
    console.error("Nenhuma vaga fornecida para edição");
    return;
  }
  
  console.log("Editando vaga:", vaga); // Log para depuração
  
  setFormData({
    ...vaga,
    salario: vaga.salario || 0,
    areaAtuacao: vaga.areaAtuacao || "",
    tipoContrato: vaga.tipoContrato || "CLT"
  });
  setEditingId(vaga.idVaga);
  setShowForm(true);
};

  const resetForm = () => {
    setFormData({
      titulo: "",
      localizacao: "",
      competencias: "",
      modalidade: "REMOTO",
      requisitos: "",
      beneficios: "",
      responsabilidade: "",
      descricaoEmpresa: "",
      descricao: "",
      salario: 0.0,
      areaAtuacao: "",
      tipoContrato: "CLT",
    });
  };

  const handleDelete = async (idVaga) => {
    if (!idVaga) {
      console.error("ID da vaga não definido");
      setError("ID da vaga inválido");
      return;
    }

    if (window.confirm("Tem certeza que deseja excluir esta vaga?")) {
      try {
        await axios.delete(`http://localhost:8080/vagas/${idVaga}`);
        setVagas(vagas.filter((vaga) => vaga.idVaga !== idVaga));
      } catch (err) {
        console.error("Erro ao deletar:", {
          status: err.response?.status,
          data: err.response?.data,
          message: err.message,
        });
        setError(
          `Erro ao excluir: ${err.response?.data?.message || err.message}`
        );
      }
    }
  };

  const handleViewCandidates = (vagaId) => {
    navigate(`/empresa/vagas/${vagaId}/candidatos`);
  };

  if (isLoading)
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );

  return (
    <div className="empresa-vagas-container">
      <Header />

      <main className="container mt-4">
        <h1 className="mb-4">Gerenciamento de Vagas</h1>

        {error && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {error}
            <button
              type="button"
              className="btn-close"
              onClick={() => setError(null)}
            />
          </div>
        )}

        <button
          className="btn btn-primary mb-4"
          onClick={() => {
            setShowForm(!showForm);
            if (showForm) {
              setEditingId(null);
              resetForm(); // Use a função de reset
            }
          }}
        >
          {showForm ? "Cancelar" : "Nova Vaga"}
        </button>

        {showForm && (
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title mb-4">
                {editingId ? "Editar Vaga" : "Criar Nova Vaga"}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Título*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="titulo"
                      value={formData.titulo}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Modalidade*</label>
                    <select
                      className="form-select"
                      name="modalidade"
                      value={formData.modalidade}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="REMOTO">Remoto</option>
                      <option value="HIBRIDO">Híbrido</option>
                      <option value="PRESENCIAL">Presencial</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Descrição da Vaga*</label>
                  <textarea
                    className="form-control"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Requisitos*</label>
                  <textarea
                    className="form-control"
                    name="requisitos"
                    value={formData.requisitos}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Responsabilidades</label>
                  <textarea
                    className="form-control"
                    name="responsabilidade"
                    value={formData.responsabilidade}
                    onChange={handleInputChange}
                    rows="2"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Benefícios</label>
                  <textarea
                    className="form-control"
                    name="beneficios"
                    value={formData.beneficios}
                    onChange={handleInputChange}
                    rows="2"
                  />
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Localização*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="localizacao"
                      value={formData.localizacao}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Tipo de Contrato*</label>
                    <select
                      className="form-select"
                      name="tipoContrato"
                      value={formData.tipoContrato}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="CLT">CLT</option>
                      <option value="PJ">PJ</option>
                      <option value="ESTAGIO">Estágio</option>
                      <option value="TEMPORARIO">Temporário</option>
                      <option value="FREELANCE">Freelance</option>
                    </select>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Salário</label>
                    <input
                      type="text"
                      className="form-control"
                      name="salario"
                      value={formData.salario}
                      onChange={handleInputChange}
                      placeholder="Ex: R$ 3.500,00"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Área de Atuação</label>
                  <input
                    type="text"
                    className="form-control"
                    name="areaAtuacao"
                    value={formData.areaAtuacao}
                    onChange={handleInputChange}
                    placeholder="Ex: Tecnologia, Saúde, Educação"
                  />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-md-2"
                    onClick={() => {
                      setShowForm(false);
                      setEditingId(null);
                      resetForm();
                    }}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editingId ? "Atualizar Vaga" : "Publicar Vaga"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="vagas-list">
          <h2 className="mb-3">Suas Vagas Publicadas</h2>

          {vagas.length === 0 ? (
            <div className="alert alert-info">
              Nenhuma vaga publicada ainda. Clique em "Nova Vaga" para começar.
            </div>
          ) : (
            <div className="list-group">
              {vagas.map((vaga) => (
                <VagaCard
                  key={vaga.idVaga}
                  vaga={vaga}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onViewCandidates={handleViewCandidates}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmpresaVagas;
