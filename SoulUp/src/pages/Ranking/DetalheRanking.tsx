import { Link, useNavigate, useParams } from "react-router";
import { participantes } from "./dadosRanking";

export default function DetalheRanking() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pessoa = id && /^[1-9]\d*$/.test(id)
    ? participantes.find((participante) => participante.id === Number(id))
    : undefined;

  if (!pessoa) {
    return (
      <main className="min-h-[60vh] bg-slate-100 px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Participante não encontrado</h1>
        <p className="mt-4 text-slate-600">Não há participante com esse identificador no ranking demonstrativo.</p>
        <Link to="/ranking" className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800 focus-visible:outline-2">Voltar ao ranking</Link>
      </main>
    );
  }

  const posicao = [...participantes].sort((a, b) => b.pontos - a.pontos).findIndex((item) => item.id === pessoa.id) + 1;
  const indicadores = [
    { titulo: "Posição geral", valor: `#${posicao}` },
    { titulo: "Pontos", valor: pessoa.pontos.toLocaleString("pt-BR") },
    { titulo: "Ações registradas", valor: pessoa.acoes.toLocaleString("pt-BR") },
    { titulo: "Categoria principal", valor: pessoa.categoria },
  ];

  return (
    <main className="min-h-[70vh] bg-slate-100 px-4 py-12 sm:px-8">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold text-emerald-700">PERFIL NO RANKING</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{pessoa.nome}{pessoa.voce && " (você)"}</h1>
        <p className="mt-3 text-slate-600">{pessoa.cidade}</p>
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {indicadores.map((indicador) => (
            <div key={indicador.titulo} className="rounded-2xl bg-slate-100 p-5">
              <dt className="text-sm text-slate-600">{indicador.titulo}</dt>
              <dd className="mt-2 text-2xl font-bold text-emerald-700">{indicador.valor}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 leading-7 text-slate-500">Dados fictícios para demonstrar a solução. Esta página utiliza o identificador da URL para apresentar o participante selecionado, sem consultar uma API.</p>
        <button type="button" onClick={() => navigate("/ranking")} className="mt-8 cursor-pointer rounded-full bg-[#1A1A2E] px-6 py-3 font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4">Voltar ao ranking</button>
      </article>
    </main>
  );
}
