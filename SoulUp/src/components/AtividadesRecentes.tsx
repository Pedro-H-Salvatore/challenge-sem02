import type { Atividade } from "../pages/Dashboard/DadosDashboard";
import PainelDashboard from "./PainelDashboard";

interface Props {
  atividades: Atividade[];
  aoDesfazer?: (id: string) => void;
  desabilitado?: boolean;
}

export default function AtividadesRecentes({ atividades, aoDesfazer, desabilitado = false }: Props) {
  return (
    <PainelDashboard titulo="📋 Atividades Recentes">
      {atividades.length === 0 ? (
        <p className="text-sm text-slate-500">Nenhuma ação registrada ainda.</p>
      ) : (
        <ul className="space-y-3">
          {atividades.map((atividade) => (
            <li key={atividade.id} className="flex flex-wrap items-center gap-3 rounded-xl bg-slate-100 p-4 text-sm">
              <span aria-hidden="true" className="text-xl">{atividade.icone}</span>
              <span className="min-w-0 flex-1 basis-32 text-slate-900">{atividade.descricao}</span>
              <span className="text-xs text-slate-500">{atividade.quando}</span>
              <strong className="text-emerald-600">+{atividade.pontos}</strong>
              {aoDesfazer && (
                <button type="button" disabled={desabilitado} onClick={() => aoDesfazer(atividade.id)}
                  className="cursor-pointer rounded-full px-3 py-1 text-xs font-semibold text-rose-600 hover:bg-rose-50 disabled:opacity-50">
                  Desfazer
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </PainelDashboard>
  );
}