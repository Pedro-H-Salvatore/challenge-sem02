import { Link } from "react-router";
import CardRecompensa from "../../components/CardRecompensa";

export default function Recompensas() {
  return (
    <section
      id="recompensas"
      className="bg-slate-100 px-6 py-20 sm:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <header className="text-center">
          <span className="inline-block rounded-full bg-linear-to-r from-emerald-400 to-sky-500 px-5 py-2 text-sm font-bold tracking-wider text-white">
            RECOMPENSAS
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Prêmios que Valem{" "}

            <span className="bg-linear-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent">
              a Pena
            </span>
          </h2>

          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            Os melhores do ranking ganham recompensas reais todo mês
          </p>
        </header>

        {/* Cards */}
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          <CardRecompensa
            medalha="🥇"
            posicao="1º Lugar"
            titulo="Subsídio de Energia"
            descricao="Desconto real na sua conta de energia elétrica pelo Programa Prospera."
            valor="R$ 150"
            complementoValor="/ mês"
            corBorda="border-yellow-400"
          />

          <CardRecompensa
            medalha="🥈"
            posicao="2º Lugar"
            titulo="Vale Presente"
            descricao="Vale presente em lojas parceiras do Programa Prospera para você escolher."
            valor="R$ 80"
            corBorda="border-slate-400"
          />

          <CardRecompensa
            medalha="🥉"
            posicao="3º Lugar"
            titulo="Desconto Serviços"
            descricao="Desconto em serviços e produtos sustentáveis de parceiros da plataforma."
            valor="R$ 40"
            corBorda="border-orange-500"
          />
        </div>

        {/* Botão */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/ranking"
            className="rounded-full bg-linear-to-r from-emerald-400 to-sky-500 px-9 py-4 text-center font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            Ver Ranking Completo →
          </Link>
        </div>
      </div>
    </section>
  );
}