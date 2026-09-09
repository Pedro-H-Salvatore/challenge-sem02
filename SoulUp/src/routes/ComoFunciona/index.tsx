import CardComoFunciona from "../../components/CardComoFunciona";

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="bg-slate-100 px-6 py-20 sm:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-linear-to-r from-emerald-400 to-sky-500 px-5 py-2 text-sm font-bold tracking-wide text-white">
            COMO FUNCIONA
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Simples, Rápido e{" "}
            
            <span className="bg-linear-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent">
              Recompensador
            </span>
          </h2>

          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            Em apenas 3 passos você já começa a fazer diferença
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          <CardComoFunciona
            icone="🎯"
            numero="01"
            titulo="Registre Ações"
            descricao="Registre suas ações sustentáveis diárias: reciclar, usar transporte público, economizar energia e muito mais."
          />

          <CardComoFunciona
            icone="⭐"
            numero="02"
            titulo="Acumule Pontos"
            descricao="Cada ação vale pontos. Quanto mais impacto, mais pontos você ganha e mais alto você sobe no ranking."
          />

          <CardComoFunciona
            icone="🏆"
            numero="03"
            titulo="Ganhe Prêmios"
            descricao="Troque pontos por recompensas reais ou concorra ao subsídio mensal na conta de energia elétrica."
          />
        </div>
      </div>
    </section>
  );
}