import { Link } from "react-router";
import CardComoFunciona from "../../components/CardComoFunciona";

const objetivos = [
  { icone: "♻️", numero: "01", titulo: "Incentivar hábitos", descricao: "Valorizar pequenas atitudes, como reciclar, economizar água e energia e escolher meios de transporte menos poluentes." },
  { icone: "📊", numero: "02", titulo: "Dar visibilidade ao progresso", descricao: "Organizar ações, pontos e conquistas para que as pessoas acompanhem sua participação e mantenham a motivação." },
  { icone: "🤝", numero: "03", titulo: "Construir uma comunidade", descricao: "Propor desafios e rankings que estimulem a participação coletiva, com reconhecimento dos hábitos sustentáveis." },
];

export default function Sobre() {
  return (
    <main className="bg-slate-100">
      <header className="bg-linear-to-r from-[#2ECC71] to-[#3498DB] px-6 py-16 text-center text-white sm:py-20">
        <p className="text-sm font-bold tracking-wider">SOBRE O PROJETO</p>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">Pequenas ações, impacto coletivo</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg">Conheça o propósito, o problema e os limites do SoulUp.</p>
      </header>
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-8">
        <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">O problema que queremos enfrentar</h2>
          <p className="mt-4 leading-8 text-slate-600">Manter hábitos sustentáveis pode ser difícil quando as ações do dia a dia parecem isoladas e seus resultados não ficam visíveis. Nossa proposta é transformar essa participação em uma experiência simples de acompanhar, com metas, reconhecimento e incentivo à continuidade.</p>
        </section>
        <section aria-label="Objetivos do SoulUp" className="grid gap-6 lg:grid-cols-3">
          {objetivos.map((objetivo) => <CardComoFunciona key={objetivo.numero} {...objetivo} />)}
        </section>
        <section className="rounded-3xl bg-[#1A1A2E] p-6 text-white sm:p-10">
          <h2 className="text-2xl font-bold">Como a solução funciona</h2>
          <p className="mt-4 leading-8 text-slate-300">O participante registra ações sustentáveis e acompanha pontos, atividades e conquistas. O ranking demonstra a classificação mensal, enquanto a proposta de recompensas incentiva a participação. O projeto foi desenvolvido por estudantes de ADS da FIAP para o Challenge 2026.</p>
          <h3 className="mt-6 text-xl font-bold">Escopo desta demonstração</h3>
          <p className="mt-3 leading-8 text-slate-300">Nesta Sprint 03, os dados são locais e ilustrativos. Não há autenticação, persistência em banco, envio de mensagens ou concessão de prêmios reais. O dashboard usa um perfil de exemplo e reinicia ao sair ou recarregar a página.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/dashboard" className="rounded-full bg-emerald-700 px-6 py-3 font-semibold hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4">Explorar demonstração</Link>
            <Link to="/equipe" className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4">Conhecer a equipe</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
