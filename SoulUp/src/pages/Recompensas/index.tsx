import { Link } from "react-router";
import { premios } from "../../data/premios";
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
            Proposta de prêmios mensais. Esta demonstração não concede recompensas reais.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {premios.map((premio) => (
            <CardRecompensa
              key={premio.posicao}
              medalha={premio.medalha}
              posicao={`${premio.posicao}º Lugar`}
              titulo="Subsídio de Energia"
              descricao={premio.descricao}
              valor={`R$ ${premio.valor}`}
              corBorda={premio.corBorda}
            />
          ))}
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
