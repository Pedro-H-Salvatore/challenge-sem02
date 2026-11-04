import { useEffect, useState } from "react";
import type { DependencyList } from "react";
import { ApiError } from "../services/api";
import type { EstadoRequisicao } from "../types/api";

// Faz a requisição e devolve o estado: carregando, erro ou sucesso
export function useRequisicao<T>(buscar: () => Promise<T>, dependencias: DependencyList) {
  const [versao, setVersao] = useState(0);
  const chave = `${JSON.stringify(dependencias)}#${versao}`;
  const [resultado, setResultado] = useState<{ chave: string; estado: EstadoRequisicao<T> } | null>(null);

  useEffect(() => {
    let ativo = true;
    buscar()
      .then((dados) => {
        if (ativo) setResultado({ chave, estado: { status: "sucesso", dados } });
      })
      .catch((erro: unknown) => {
        if (!ativo) return;
        const mensagem = erro instanceof Error ? erro.message : "Erro inesperado.";
        const codigo = erro instanceof ApiError ? erro.status : 0;
        setResultado({ chave, estado: { status: "erro", mensagem, codigo } });
      });
    return () => {
      ativo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave]);

  // Enquanto o resultado não é da busca atual, mostra "carregando"
  const estado: EstadoRequisicao<T> =
    resultado?.chave === chave ? resultado.estado : { status: "carregando" };

  return { estado, recarregar: () => setVersao((v) => v + 1) };
}
