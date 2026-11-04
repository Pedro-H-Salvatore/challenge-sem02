// Tipos iguais ao contrato da API Java (https://soulup-api-g73n.onrender.com)

export type Categoria =
  | "MOBILIDADE" | "RESIDUOS" | "ENERGIA" | "AGUA"
  | "CONSUMO" | "NATUREZA" | "ENGAJAMENTO";

export type Nivel =
  | "Iniciante" | "Aprendiz Sustentável" | "Consciência Verde"
  | "Eco Herói" | "Guardião da Terra";

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  dataCadastro: string;
  totalAcoes: number;
  pontos: number;
  nivel: Nivel;
}

export interface Acao {
  id: number;
  nome: string;
  pontos: number;
  categoria: Categoria;
}

export interface RegistroAcao {
  id: number;
  idUsuario: number;
  idAcao: number;
  nomeAcao: string;
  pontos: number;
  dataRegistro: string;
}

export interface ErroApi {
  status: number;
  mensagem: string;
}

// Corpos enviados nas requisições
export type UsuarioForm = Pick<Usuario, "nome" | "email">;
export type AcaoForm = Omit<Acao, "id">;
export type NovoRegistro = Pick<RegistroAcao, "idUsuario" | "idAcao">;

// Intersection: usuário + histórico de ações
export type UsuarioComRegistros = Usuario & { registros: RegistroAcao[] };

// Union: estados de uma requisição (carregando / erro / sucesso)
export type EstadoRequisicao<T> =
  | { status: "carregando" }
  | { status: "erro"; mensagem: string; codigo: number }
  | { status: "sucesso"; dados: T };
