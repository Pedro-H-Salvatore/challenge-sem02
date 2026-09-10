import { useState } from "react";
import { Link } from "react-router";
import BarraLateralDashboard from "../../components/BarraLateralDashboard";
import IndicadoresDashboard from "../../components/IndicadoresDashboard";
import ProgressoNivel from "../../components/ProgressoNivel";
import AcoesRapidas from "../../components/AcoesRapidas";
import AtividadesRecentes from "../../components/AtividadesRecentes";
import ConquistasDashboard from "../../components/ConquistasDashboard";
import { atividadesIniciais } from "./dadosDashboard";
import type { AcaoRapida } from "./dadosDashboard";

export default function Dashboard() {
  const [estado, setEstado] = useState({ pontos: 1240, acoes: 34, atividades: atividadesIniciais, aviso: "" });

  function registrarAcao(acao: AcaoRapida) {
    const atividade = {
      id: crypto.randomUUID(),
      icone: acao.icone,
      descricao: acao.atividade,
      quando: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      pontos: acao.pontos,
    };
    setEstado((anterior) => ({
      pontos: anterior.pontos + acao.pontos,
      acoes: anterior.acoes + 1,
      atividades: [atividade, ...anterior.atividades].slice(0, 5),
      aviso: ${acao.atividade} registrada: +${acao.pontos} pontos. Total: ${(anterior.pontos + acao.pontos).toLocaleString("pt-BR")} pontos.,
    }));
  }

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <BarraLateralDashboard pontos={estado.pontos} evoluiu={estado.pontos >= 2000} />
      <main className="min-w-0 flex-1 p-4 sm:p-8 xl:p-10">
        <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Olá, João! 🌱</h1>
            <p className="mt-3 text-slate-500">Você está no Top 12 este mês. Continue assim!</p>
          </div>
          <Link to="/ranking" className="rounded-full bg-[#1A1A2E] px-6 py-3 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600">🏆 #12 no ranking</Link>
        </header>
        <p className="mb-5 text-xs leading-5 text-slate-500">Perfil demonstrativo. Os registros duram enquanto esta página estiver aberta; a posição no ranking e os dias em sequência são ilustrativos.</p>
        <IndicadoresDashboard pontos={estado.pontos} acoes={estado.acoes} />
        <p role="status" className="my-4 min-h-6 text-sm text-emerald-700">{estado.aviso}</p>
        <div className="grid gap-6 xl:grid-cols-2">
          <ProgressoNivel pontos={estado.pontos} />
          <AcoesRapidas aoRegistrar={registrarAcao} />
          <AtividadesRecentes atividades={estado.atividades} />
          <ConquistasDashboard pontos={estado.pontos} />
        </div>
      </main>
    </div>
  );
}