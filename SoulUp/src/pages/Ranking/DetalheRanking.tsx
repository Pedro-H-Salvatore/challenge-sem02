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

    return (
    <main className="min-h-[70vh] bg-slate-100 px-4 py-12 sm:px-8">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold text-emerald-700">PERFIL NO RANKING</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{pessoa.nome}</h1>
        <p className="mt-3 break-all text-slate-600">{pessoa.email}</p>



        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {indicadores.map((indicador) => (
            <div key={indicador.titulo} className="rounded-2xl bg-slate-100 p-5">
              <dt className="text-sm text-slate-600">{indicador.titulo}</dt>
              <dd className="mt-2 text-2xl font-bold text-emerald-700">{indicador.valor}</dd>
            </div>
          ))}
        </dl>



        <h2 className="mt-10 text-xl font-bold text-slate-900">Histórico de ações</h2>
        <div className="mt-4">
          {pessoa.registros.length === 0 ? (
            <ListaVazia texto="Este participante ainda não registrou ações." />
          ) : (
            <ul className="space-y-3">
              {pessoa.registros.map((registro) => (
                <li key={registro.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-100 p-4 text-sm">
                  <span className="font-medium text-slate-900">{registro.nomeAcao}</span>
                  <span className="text-slate-500">{formatarData(registro.dataRegistro)}</span>
                  <strong className="text-emerald-600">+{registro.pontos} pts</strong>
                </li>
              ))}
            </ul>
          )}
        </div>



        <button type="button" onClick={() => navigate("/ranking")} className="mt-8 cursor-pointer rounded-full bg-[#1A1A2E] px-6 py-3 font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4">Voltar ao ranking</button>
      </article>
    </main>
  );
}