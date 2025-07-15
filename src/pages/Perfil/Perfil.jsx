import "./perfil.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function formatarCPF(cpf) {
  if (!cpf) return "";
  
  const numeros = cpf.replace(/\D/g, '');
  
  if (numeros.length !== 11) return cpf; // Retorna sem formatação se inválido
  
  // Aplica a formatação
  return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function formatarTelefone(telefone) {
  if (!telefone) return "";
  
  // Remove tudo que não é dígito
  const numeros = telefone.replace(/\D/g, '');
  
  // Formatação para celular (11 dígitos)
  if (numeros.length === 11) {
    return numeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  
  // Formatação para telefone fixo (10 dígitos)
  if (numeros.length === 10) {
    return numeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  // Retorna sem formatação se não for um telefone válido
  return telefone;
}

export default function Perfil() {
  const [usuario, setUsuario] = useState({
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    cpf: "",
    telefone: "",
    etnia: "",
    paisOrigem: "",
    email: "",
    idUsuario: null
  });
  
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const carregarUsuario = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          navigate("/login");
          return;
        }

        const response = await axios.get(`http://localhost:8080/usuarios/${userId}`);
        setUsuario(response.data);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        navigate("/login");
      }
    };
    
    carregarUsuario();
  }, [navigate]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/usuarios/${usuario.idUsuario}`);
      localStorage.removeItem("userId");
      alert("Conta deletada com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      alert("Erro ao deletar conta. Tente novamente.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/usuarios/${usuario.idUsuario}`, usuario);
      setIsEditing(false);
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao atualizar perfil. Tente novamente.");
    }
  };

  if (!usuario.idUsuario) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="html_perfil body_perfil">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {!isEditing ? (
                <div className="profile-card shadow">
                  <div className="profile-header">
                    <div className="avatar-placeholder">
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
</div>
                    <h2>Meu Perfil</h2>
                  </div>

                  <div className="profile-info">
                    <div className="info-item">
                      <span className="info-label">Nome Completo</span>
                      <span className="info-value">{usuario.nome} {usuario.sobrenome}</span>
                    </div>

                    <div className="info-item">
                      <span className="info-label">Data de Nascimento</span>
                      <span className="info-value">{usuario.dataNascimento}</span>
                    </div>

                    <div className="info-item">
                      <span className="info-label">CPF</span>
                      <span className="info-value">{formatarCPF(usuario.cpf)}</span>
                    </div>

                    <div className="info-item">
                      <span className="info-label">Telefone</span>
                      <span className="info-value">{formatarTelefone(usuario.telefone)}</span>
                    </div>

                    <div className="info-item">
                      <span className="info-label">Etnia</span>
                      <span className="info-value">{usuario.etnia}</span>
                    </div>

                    <div className="info-item">
                      <span className="info-label">País de Origem</span>
                      <span className="info-value">{usuario.paisOrigem}</span>
                    </div>

                    <div className="info-item">
                      <span className="info-label">E-mail</span>
                      <span className="info-value">{usuario.email}</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <div>
                      <button 
                        className="btn btn-primary me-2"
                        onClick={() => setIsEditing(true)}
                      >
                        Editar Perfil
                      </button>
                      <button className="btn btn-outline-secondary">
                        Alterar Senha
                      </button>
                    </div>
                    <button 
                      className="btn btn-outline-danger"
                      onClick={() => setShowDeleteModal(true)}
                    >
                      Excluir Conta
                    </button>
                  </div>
                </div>
              ) : (
                <div className="profile-card shadow">
                  <div className="profile-header">
                    <h2>Editar Perfil</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nome"
                        value={usuario.nome}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Sobrenome</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sobrenome"
                        value={usuario.sobrenome}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Data de Nascimento</label>
                      <input
                        type="date"
                        className="form-control"
                        name="dataNascimento"
                        value={usuario.dataNascimento}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">CPF</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cpf"
                        value={usuario.cpf}
                        onChange={handleInputChange}
                        required
                        disabled
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Telefone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="telefone"
                        value={usuario.telefone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Etnia</label>
                      <select
                        className="form-select"
                        name="etnia"
                        value={usuario.etnia}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="BRANCO">Branco</option>
                        <option value="PARDO">Pardo</option>
                        <option value="AMARELO">Amarelo</option>
                        <option value="INDIGENA">Indígena</option>
                        <option value="NEGRO">Negro</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">País de Origem</label>
                      <input
                        type="text"
                        className="form-control"
                        name="paisOrigem"
                        value={usuario.paisOrigem}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">E-mail</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={usuario.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="d-flex justify-content-end mt-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-2"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancelar
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Salvar Alterações
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Confirmação para Excluir Conta */}
      {showDeleteModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Exclusão</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.</p>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancelar
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger" 
                  onClick={handleDelete}
                >
                  Confirmar Exclusão
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}