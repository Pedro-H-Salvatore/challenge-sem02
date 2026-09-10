import { useState } from "react";
import ContagemRanking from "../../components/ContagemRanking";
import FiltrosRanking from "../../components/FiltrosRanking";
import PodioRanking from "../../components/PodioRanking";
import TabelaRanking from "../../components/TabelaRanking";
import PremiosRanking from "../../components/PremioRanking";
import { participantes } from "./dadosRanking";
import type { Categoria } from "./dadosRanking";

export default function Ranking() {
  const [categoria, setCategoria] = useState<Categoria>("Geral");
  const [referencia] = useState(() => new Date());
  const encerramento = new Date(referencia.getFullYear(), referencia.getMonth() + 1, 1).getTime();
  const mes = referencia.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  const classificados = participantes
    .filter((pessoa) => categoria === "Geral" || pessoa.categoria === categoria)
    .sort((a, b) => b.pontos - a.pontos);

  return (
    <main className="bg-slate-100">
      <header className="bg-linear-to-r from-[#2ECC71] to-[#3498DB] px-6 py-20 text-center">
        <p className="text-lg text-slate-900">Competição Mensal</p>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl">
          <span aria-hidden="true">🏆 </span>Ranking Global SoulUp
        </h1>
        <p className="mt-5 text-lg text-white">Os campeões da sustentabilidade — {mes}</p>
      </header>

      <div className="mx-auto max-w-7xl space-y-10 px-4 pb-16 sm:px-8">
        <ContagemRanking encerramento={encerramento} />
        <div className="space-y-4">
          <FiltrosRanking selecionada={categoria} aoSelecionar={setCategoria} />
          <p className="text-sm text-slate-500">
            Dados de demonstração. Os filtros agrupam participantes pela categoria principal.
          </p>
        </div>
        <PodioRanking participantes={classificados} />
        <TabelaRanking participantes={classificados} mostrarTendencia={categoria === "Geral"} />
        <PremiosRanking />
      </div>
    </main>
  );
}