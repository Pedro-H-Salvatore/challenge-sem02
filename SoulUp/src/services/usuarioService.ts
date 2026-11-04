import { requisicao } from "./api";
import type { RegistroAcao, Usuario, UsuarioForm } from "../types/api";

// Endpoints de /usuarios e /ranking
export const usuarioService = {
  listar: () => requisicao<Usuario[]>("/usuarios"),
  ranking: () => requisicao<Usuario[]>("/ranking"),
  buscar: (id: number) => requisicao<Usuario>(`/usuarios/${id}`),
  registros: (id: number) => requisicao<RegistroAcao[]>(`/usuarios/${id}/registros`),
  criar: (dados: UsuarioForm) =>
    requisicao<Usuario>("/usuarios", { method: "POST", body: JSON.stringify(dados) }),
  atualizar: (id: number, dados: UsuarioForm) =>
    requisicao<Usuario>(`/usuarios/${id}`, { method: "PUT", body: JSON.stringify(dados) }),
  excluir: (id: number) => requisicao<void>(`/usuarios/${id}`, { method: "DELETE" }),
};
