import { acoesRapidas } from "../routes/Dashboard/dadosDashboard";
import type { AcaoRapida } from "../routes/Dashboard/dadosDashboard";
import PainelDashboard from "./PainelDashboard";

export default function AcoesRapidas({ aoRegistrar }: { aoRegistrar: (acao: AcaoRapida) => void }) {
  return (
    <PainelDashboard titulo="⚡ Registrar Ação Rápida">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {acoesRapidas.map((acao) => (
          <button key={acao.id} type="button" onClick={() => aoRegistrar(acao)} className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-100 px-3 py-5 text-center transition-colors hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
            <span aria-hidden="true" className="block text-2xl">{acao.icone}</span>
            <span className="mt-3 block text-sm font-medium text-slate-900">{acao.nome}</span>
            <span className="mt-2 block text-sm font-bold text-emerald-600">+{acao.pontos} pts</span>
          </button>
        ))}
      </div>
    </PainelDashboard>
  );
}