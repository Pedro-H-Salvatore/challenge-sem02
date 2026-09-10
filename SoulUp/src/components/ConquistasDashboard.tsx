import PainelDashboard from "./PainelDashboard";

export default function ConquistasDashboard({
  pontos,
}: {
  pontos: number;
}) {
  const conquistas = [
    { icone: "🌱", titulo: "Primeiro Passo", liberada: true },
    { icone: "🔥", titulo: "7 Dias Seguidos", liberada: true },
    { icone: "♻️", titulo: "Mestre Reciclagem", liberada: true },
    { icone: "⚡", titulo: "Eco Iniciante", liberada: true },
    { icone: "🏆", titulo: "Top 10", liberada: false },
    { icone: "🌳", titulo: "Guardião Verde", liberada: pontos >= 2000 },
    { icone: "💎", titulo: "Elite Sustentável", liberada: false },
    { icone: "🥇", titulo: "Campeão do Mês", liberada: false },
  ];

  return (
    <PainelDashboard titulo="🏅 Conquistas">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {conquistas.map((conquista) => (
          <li
            key={conquista.titulo}
            className={`rounded-2xl border px-2 py-5 text-center ${
              conquista.liberada
                ? "border-emerald-400 bg-emerald-50 text-slate-900"
                : "border-slate-200 bg-slate-100 text-slate-500"
            }`}
          >
            <span aria-hidden="true" className="mb-3 block text-2xl">
              {conquista.icone}
            </span>

            <span className="block text-xs leading-5">
              {conquista.titulo}
            </span>

            <span className="sr-only">
              {conquista.liberada
                ? "Conquistada"
                : "Ainda não conquistada"}
            </span>
          </li>
        ))}
      </ul>
    </PainelDashboard>
  );
}