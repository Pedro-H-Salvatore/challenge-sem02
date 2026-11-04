import { requisicao } from "./api";
import type { NovoRegistro, RegistroAcao } from "../types/api";

// Endpoints de /registros (ação feita por um usuário)
export const registroService = {
  criar: (dados: NovoRegistro) =>
    requisicao<RegistroAcao>("/registros", { method: "POST", body: JSON.stringify(dados) }),
  excluir: (id: number) => requisicao<void>(`/registros/${id}`, { method: "DELETE" }),
};
