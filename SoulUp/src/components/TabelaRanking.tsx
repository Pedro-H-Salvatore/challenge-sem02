import type { Participante } from "../routes/Ranking/dadosRanking";

function LinhaRanking({ pessoa, posicao, mostrarTendencia }: {
  pessoa: Participante;
  posicao: number;
  mostrarTendencia: boolean;
}) {
  const tendencia = pessoa.tendencia;
  return (
    <tr className={`border-b border-slate-200 last:border-0 ${pessoa.voce ? "bg-emerald-50 font-semibold" : "bg-white hover:bg-slate-50"}`}>
      <td className="px-5 py-5">
        <span className={`flex size-10 items-center justify-center rounded-full font-bold ${posicao <= 5 || pessoa.voce ? "bg-linear-to-r from-[#2ECC71] to-[#3498DB] text-white" : "bg-slate-100 text-slate-500"}`}>{posicao}</span>
      </td>
      <th scope="row" className="px-5 py-5 text-left font-inherit">
        <span className="flex items-center gap-3">
          <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#2ECC71] to-[#3498DB]">🌿</span>
          {pessoa.nome}{pessoa.voce && " (você)"}
        </span>
      </th>
      <td className="px-5 py-5">{pessoa.cidade}</td>
      <td className="px-5 py-5 tabular-nums">{pessoa.acoes}</td>
      <td className="px-5 py-5 font-bold tabular-nums">{pessoa.pontos.toLocaleString("pt-BR")} pts</td>
      <td className="px-5 py-5">
        {!mostrarTendencia ? "—" : (
          <span aria-label={tendencia > 0 ? `Subiu ${tendencia} posições` : tendencia < 0 ? `Caiu ${Math.abs(tendencia)} posições` : "Manteve a posição"}
            className={tendencia > 0 ? "font-semibold text-emerald-700" : tendencia < 0 ? "text-rose-600" : "text-slate-500"}>
            {tendencia > 0 ? `↑ +${tendencia}` : tendencia < 0 ? `↓ ${tendencia}` : "→ ="}
          </span>
        )}
      </td>
    </tr>
  );
}

export default function TabelaRanking({ participantes, mostrarTendencia }: {
  participantes: Participante[];
  mostrarTendencia: boolean;
}) {
  const restantes = participantes.slice(3);
  if (!restantes.length) return <p className="text-center text-slate-500">Todos os participantes desta categoria estão no pódio.</p>;

  return (
    <div role="region" aria-label="Tabela de classificação" tabIndex={0} className="overflow-x-auto rounded-2xl shadow-sm">
      <table className="w-full min-w-212.5 text-sm text-slate-900 lg:text-base">
        <caption className="sr-only">Classificação a partir do quarto lugar. Os três primeiros estão no pódio.</caption>
        <thead className="bg-[#1A1A2E] text-left text-sm tracking-wide text-slate-300">
          <tr>{["#", "USUÁRIO", "CIDADE", "AÇÕES", "PONTOS", "TENDÊNCIA"].map((titulo) => <th key={titulo} scope="col" className="px-5 py-5">{titulo}</th>)}</tr>
        </thead>
        <tbody>{restantes.map((pessoa, indice) => <LinhaRanking key={pessoa.id} pessoa={pessoa} posicao={indice + 4} mostrarTendencia={mostrarTendencia} />)}</tbody>
      </table>
    </div>
  );
}