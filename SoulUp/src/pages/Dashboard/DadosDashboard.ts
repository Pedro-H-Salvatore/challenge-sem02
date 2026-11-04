import type { Categoria } from "../../types/api";

export interface Atividade {
  id: string;
  icone: string;
  descricao: string;
  quando: string;
  pontos: number;
}

export const iconePorCategoria: Record<Categoria, string> = {
  MOBILIDADE: "🚲",
  RESIDUOS: "♻️",
  ENERGIA: "⚡",
  AGUA: "💧",
  CONSUMO: "🛒",
  NATUREZA: "🌳",
  ENGAJAMENTO: "📣",
};
