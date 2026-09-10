export const acoesRapidas = [
  { id: "reciclar", icone: "♻️", nome: "Reciclar", atividade: "Reciclagem seletiva", pontos: 50 },
  { id: "energia", icone: "⚡", nome: "Energia", atividade: "Economizou energia", pontos: 30 },
  { id: "agua", icone: "💧", nome: "Água", atividade: "Banho curto", pontos: 25 },
  { id: "bike", icone: "🚲", nome: "Bike", atividade: "Usou bicicleta", pontos: 40 },
  { id: "plantar", icone: "🌳", nome: "Plantar", atividade: "Plantou uma árvore", pontos: 35 },
  { id: "consumo", icone: "🛒", nome: "Consumo", atividade: "Compra consciente", pontos: 20 },
];
export type AcaoRapida = (typeof acoesRapidas)[number];
export interface Atividade {
  id: string;
  icone: string;
  descricao: string;
  quando: string;
  pontos: number;
}
export const atividadesIniciais: Atividade[] = [
  { id: "inicial-1", icone: "♻️", descricao: "Reciclagem seletiva", quando: "Hoje, 09h", pontos: 50 },
  { id: "inicial-2", icone: "🚲", descricao: "Usou bicicleta", quando: "Hoje, 07h", pontos: 40 },
  { id: "inicial-3", icone: "💧", descricao: "Banho curto", quando: "Ontem, 19h", pontos: 25 },
  { id: "inicial-4", icone: "⚡", descricao: "Economizou energia", quando: "Ontem, 18h", pontos: 30 },
 ];