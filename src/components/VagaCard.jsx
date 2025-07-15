import React from "react";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const VagaCard = ({ vaga, onEdit, onDelete, onViewCandidates }) => {
  const formatarDataPublicacao = (dataString) => {
    if (!dataString) return 'Data não disponível';
    
    try {
      // 1. Adiciona 'Z' para forçar interpretação como UTC
      const dataUTC = new Date(dataString.endsWith('Z') ? dataString : dataString + 'Z');
      
      // 2. Opcional: converte para fuso local se necessário
      const dataLocal = new Date(dataUTC);
      
      console.log('Debug:', {
        original: dataString,
        asUTC: dataUTC,
        asLocal: dataLocal,
        offset: dataLocal.getTimezoneOffset()
      });

      return formatDistanceToNow(dataLocal, {
        locale: ptBR,
        addSuffix: true,
      });
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return 'Data inválida';
    }
  };

  return (
    <div className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5>{vaga.titulo}</h5>
          <p className="mb-1">
            {vaga.modalidade} • {formatarDataPublicacao(vaga.dataPublicacao)}
          </p>
          <small className="text-muted">{vaga.competencias}</small>
        </div>
        <div>
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => onEdit(vaga)}
          >
            Editar
          </button>
          <button
            className="btn btn-sm btn-outline-danger me-2"
            onClick={() => onDelete(vaga.idVaga)}
          >
            Excluir
          </button>
          <button
            className="btn btn-sm btn-outline-success"
            onClick={() => onViewCandidates(vaga.idVaga)}
          >
            Ver Candidatos
          </button>
        </div>
      </div>
    </div>
  );
};

export default VagaCard;