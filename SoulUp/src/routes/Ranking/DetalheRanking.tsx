import { Link, useNavigate, useParams } from "react-router";
import { Carregando, ListaVazia, MensagemErro } from "../../components/EstadoTela";
import { useRequisicao } from "../../hooks/useRequisicao";
import { ApiError } from "../../services/api";
import { usuarioService } from "../../services/usuarioService";
import { formatarData } from "../../utils/formatarData";
import type { UsuarioComRegistros } from "../../types/api";

async function buscarPerfil(id: number): Promise<UsuarioComRegistros> {
  const [usuario, registros] = await Promise.all([usuarioService.buscar(id), usuarioService.registros(id)]);
  return { ...usuario, registros };
}

export default function DetalheRanking() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const idValido = id !== undefined && /^[1-9]\d*$/.test(id);

  const { estado, recarregar } = useRequisicao(
    () => (idValido ? buscarPerfil(Number(id)) : Promise.reject(new ApiError(404, "Participante não encontrado"))),
    [id],
  );


  if (estado.status === "carregando") {
    return <main className="min-h-[60vh] bg-slate-100 px-6 py-20"><Carregando texto="Carregando perfil..." /></main>;
  }



  if (estado.status === "erro") {
    if (estado.codigo === 404) {
      return (
        <main className="min-h-[60vh] bg-slate-100 px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Participante não encontrado</h1>
          <p className="mt-4 text-slate-600">Não há participante com esse identificador.</p>
          <Link to="/ranking" className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800 focus-visible:outline-2">Voltar ao ranking</Link>
        </main>
      );
    }
    return <main className="min-h-[60vh] bg-slate-100 px-6 py-20"><MensagemErro mensagem={estado.mensagem} aoTentarNovamente={recarregar} /></main>;
  }



  const pessoa = estado.dados;
  const indicadores = [
    { titulo: "Nível", valor: pessoa.nivel },
    { titulo: "Pontos", valor: pessoa.pontos.toLocaleString("pt-BR") },
    { titulo: "Ações registradas", valor: String(pessoa.totalAcoes) },
    { titulo: "Membro desde", valor: formatarData(pessoa.dataCadastro) },
  ];