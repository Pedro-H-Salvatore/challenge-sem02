import PainelDashboard from "./PainelDashboard";

export default function ProgressoNivel({ pontos }: { pontos: number }) {
  const evoluiu = pontos >= 2000;
  return (
    <PainelDashboard titulo="🎯 Progresso de Nível">
      <div className="mb-3 flex justify-between gap-4 text-sm text-slate-500"><span>Eco Guerreiro</span><span>Guardião Verde</span></div>
      <div role="progressbar" aria-label="Progresso para Guardião Verde" aria-valuemin={0} aria-valuemax={2000} aria-valuenow={Math.min(pontos, 2000)} className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-linear-to-r from-[#2ECC71] to-[#3498DB] transition-[width] motion-reduce:transition-none" style={{ width: `${Math.min(pontos / 2000 * 100, 100)}%` }} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-500">
        {evoluiu ? "Meta atingida! Você conquistou o nível Guardião Verde." : `${pontos.toLocaleString("pt-BR")} / 2.000 pts — faltam ${(2000 - pontos).toLocaleString("pt-BR")} pts`}
      </p>
    </PainelDashboard>
  );
}