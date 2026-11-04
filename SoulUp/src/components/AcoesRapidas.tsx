import { iconePorCategoria } from "../pages/Dashboard/DadosDashboard";
import type { Acao } from "../types/api";
import PainelDashboard from "./PainelDashboard";

interface Props {
  acoes: Acao[];
  idsRegistrados: number[];
  desabilitado: boolean;
  aoRegistrar: (acao: Acao) => void;
}

export default function AcoesRapidas({ acoes, idsRegistrados, desabilitado, aoRegistrar }: Props) {
  return (
    <PainelDashboard titulo="⚡ Registrar Ação">
      {acoes.length === 0 ? (
        <p className="text-sm text-slate-500">Nenhuma ação cadastrada.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {acoes.map((acao) => {
            const jaFeita = idsRegistrados.includes(acao.id);
            return (
              <button key={acao.id} type="button" disabled={desabilitado || jaFeita} onClick={() => aoRegistrar(acao)}
                className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-100 px-3 py-5 text-center transition-colors hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:opacity-50">
                <span aria-hidden="true" className="block text-2xl">{iconePorCategoria[acao.categoria]}</span>
                <span className="mt-3 block text-sm font-medium text-slate-900">{acao.nome}</span>
                <span className="mt-2 block text-sm font-bold text-emerald-600">+{acao.pontos} pts</span>
                {jaFeita && <span className="mt-1 block text-xs text-slate-500">Já registrada</span>}
              </button>
            );
          })}
        </div>
      )}
    </PainelDashboard>
  );
}
