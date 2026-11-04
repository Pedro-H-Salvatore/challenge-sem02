import PainelDashboard from "./PainelDashboard";

export default function ProgressoNivel({ pontos }: { pontos: number }) {
  const evoluiu = pontos >= 80;
  return (
    <PainelDashboard titulo="🎯 Progresso de Nível">
      <div className="mb-3 flex justify-between gap-4 text-sm text-slate-500"><span>Iniciante</span><span>Guardião da Terra</span></div>
      <progress
        aria-label="Progresso para Guardião da Terra"
        max={80}
        value={Math.max(0, Math.min(pontos, 80))}
        className="block h-3 w-full appearance-none overflow-hidden rounded-full border-0 bg-slate-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-linear-to-r [&::-webkit-progress-value]:from-[#2ECC71] [&::-webkit-progress-value]:to-[#3498DB] [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-linear-to-r [&::-moz-progress-bar]:from-[#2ECC71] [&::-moz-progress-bar]:to-[#3498DB]"
      />
      <p className="mt-3 text-sm leading-6 text-slate-500">
        {evoluiu ? "Meta atingida! Você conquistou o nível Guardião da Terra." : `${pontos.toLocaleString("pt-BR")} / 80 pts — faltam ${(80 - pontos).toLocaleString("pt-BR")} pts`}
      </p>
    </PainelDashboard>
  );
}
