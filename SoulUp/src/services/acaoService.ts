import { requisicao } from "./api";
import type { Acao, AcaoForm, Categoria } from "../types/api";

// Endpoints de /acoes
export const acaoService = {
  listar: (categoria?: Categoria) =>
    requisicao<Acao[]>(categoria ? `/acoes?categoria=${categoria}` : "/acoes"),
  buscar: (id: number) => requisicao<Acao>(`/acoes/${id}`),
  criar: (dados: AcaoForm) =>
    requisicao<Acao>("/acoes", { method: "POST", body: JSON.stringify(dados) }),
  atualizar: (id: number, dados: AcaoForm) =>
    requisicao<Acao>(`/acoes/${id}`, { method: "PUT", body: JSON.stringify(dados) }),
  excluir: (id: number) => requisicao<void>(`/acoes/${id}`, { method: "DELETE" }),
};
