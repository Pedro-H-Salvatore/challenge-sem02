import type { Nivel, Usuario } from "../../types/api";

export const categorias = [
  "Geral", "Iniciante", "Aprendiz Sustentável", "Consciência Verde", "Eco Herói", "Guardião da Terra",
] as const;
export type Categoria = (typeof categorias)[number];

export interface Participante {
  id: number;
  nome: string;
  cidade: string;
  acoes: number;
  pontos: number;
  tendencia: number;
  voce?: boolean;
  categoria: Nivel;
}

export function paraParticipante(usuario: Usuario): Participante {
  return {
    id: usuario.id,
    nome: usuario.nome,
    cidade: usuario.nivel,
    acoes: usuario.totalAcoes,
    pontos: usuario.pontos,
    tendencia: 0,
    categoria: usuario.nivel,
  };
}