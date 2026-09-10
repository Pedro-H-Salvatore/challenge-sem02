export const categorias = ["Geral", "Reciclagem", "Energia", "Água", "Transporte"] as const;
export type Categoria = (typeof categorias)[number];

export interface Participante {
  id: number;
  nome: string;
  cidade: string;
  acoes: number;
  pontos: number;
  tendencia: number;
  voce?: boolean;
  categoria: Exclude<Categoria, "Geral">;
}

export const participantes: Participante[] = [
  { id: 1, nome: "Ana Costa", cidade: "São Paulo, SP", acoes: 112, pontos: 4820, tendencia: 2, categoria: "Energia" },
  { id: 2, nome: "Bruno Lima", cidade: "Rio de Janeiro, RJ", acoes: 103, pontos: 4310, tendencia: 1, categoria: "Reciclagem" },
  { id: 3, nome: "Carla Mendes", cidade: "Belo Horizonte, MG", acoes: 96, pontos: 3980, tendencia: 0, categoria: "Água" },
  { id: 4, nome: "Diego Rocha", cidade: "Curitiba, PR", acoes: 89, pontos: 3750, tendencia: 2, categoria: "Transporte" },
  { id: 5, nome: "Marina Santos", cidade: "Porto Alegre, RS", acoes: 76, pontos: 3420, tendencia: 0, categoria: "Reciclagem" },
  { id: 6, nome: "Rafael Oliveira", cidade: "Fortaleza, CE", acoes: 71, pontos: 3180, tendencia: 1, categoria: "Energia" },
  { id: 7, nome: "Juliana Ferreira", cidade: "Salvador, BA", acoes: 68, pontos: 2940, tendencia: -1, categoria: "Água" },
  { id: 8, nome: "Pedro Alves", cidade: "Recife, PE", acoes: 65, pontos: 2810, tendencia: 3, categoria: "Transporte" },
  { id: 9, nome: "Camila Souza", cidade: "Brasília, DF", acoes: 60, pontos: 2650, tendencia: 0, categoria: "Reciclagem" },
  { id: 10, nome: "Lucas Mendes", cidade: "Manaus, AM", acoes: 57, pontos: 2430, tendencia: -2, categoria: "Energia" },
  { id: 11, nome: "Isabela Lima", cidade: "Goiânia, GO", acoes: 52, pontos: 2280, tendencia: 1, categoria: "Água" },
  { id: 12, nome: "João Silva", cidade: "São Paulo, SP", acoes: 34, pontos: 1240, tendencia: 4, voce: true, categoria: "Transporte" },
  { id: 13, nome: "Fernanda Costa", cidade: "Florianópolis, SC", acoes: 30, pontos: 1180, tendencia: 0, categoria: "Reciclagem" },
];