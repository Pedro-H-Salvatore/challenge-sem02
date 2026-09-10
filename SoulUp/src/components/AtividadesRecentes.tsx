import type { Atividade } from "../routes/Dashboard/DadosDashboard";
import PainelDashboard from "./PainelDashboard";

export default function AtividadesRecentes({ atividades }: { atividades: Atividade[] }) {
  return (
    <PainelDashboard titulo="📋 Atividades Recentes">
      <ul className="space-y-3">
        {atividades.map((atividade) => (
          <li key={atividade.id} className="flex flex-wrap items-center gap-3 rounded-xl bg-slate-100 p-4 text-sm">
            <span aria-hidden="true" className="text-xl">{atividade.icone}</span>
            <span className="min-w-0 flex-1 text-slate-900">{atividade.descricao}</span>
            <span className="text-xs text-slate-500">{atividade.quando}</span>
            <strong className="text-emerald-600">+{atividade.pontos}</strong>
          </li>
        ))}
      </ul>
    </PainelDashboard>
  );
}