import { Link, NavLink } from "react-router";

const links = [
  { destino: "/dashboard", titulo: "Dashboard", icone: "🏠" },
  { destino: "/ranking", titulo: "Ranking", icone: "🏆" },
  { destino: "/faq", titulo: "Ajuda", icone: "❓" },
  { destino: "/contato", titulo: "Contato", icone: "📬" },
  { destino: "/equipe", titulo: "Equipe", icone: "👥" },
];

export default function BarraLateralDashboard({
  pontos,
  evoluiu,
}: {
  pontos: number;
  evoluiu: boolean;
}) {
  return (
    <aside className="bg-[#1A1A2E] p-5 text-white lg:min-h-screen lg:w-64 lg:shrink-0 lg:self-stretch xl:w-72">
      <div className="lg:sticky lg:top-6">
        <div className="py-5 text-center">
          <Link
            to="/"
            aria-label="Voltar ao início do SoulUp"
            className="mx-auto flex size-20 items-center justify-center rounded-full bg-linear-to-br from-[#2ECC71] to-[#3498DB] text-4xl focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <span aria-hidden="true">🌿</span>
          </Link>

          <h2 className="mt-4 text-xl font-bold">João Silva</h2>
          <p className="mt-2 text-slate-400">joao@email.com</p>

          <p className="mt-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-400">
            {evoluiu
              ? "Nível 6 — Guardião Verde"
              : "Nível 5 — Eco Guerreiro"}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 p-5">
          <span className="text-slate-300">Pontos totais</span>
          <strong className="text-xl text-teal-400">
            {pontos.toLocaleString("pt-BR")}
          </strong>
        </div>

        <nav
          aria-label="Navegação do dashboard"
          className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-1"
        >
          {links.map((link) => (
            <NavLink
              key={link.destino}
              to={link.destino}
              end
              className={({ isActive }) =>
                `rounded-xl px-4 py-4 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-emerald-400 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5"
                }`
              }
            >
              <span aria-hidden="true">{link.icone}</span> {link.titulo}
            </NavLink>
          ))}

        </nav>
      </div>
    </aside>
  );
}