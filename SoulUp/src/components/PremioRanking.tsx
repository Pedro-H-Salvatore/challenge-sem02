import CardMedalha from "./CardMedalha";

const premios = [
  { posicao: 1, valor: 200, descricao: "na conta de energia elétrica + Certificado Digital" },
  { posicao: 2, valor: 100, descricao: "na conta de energia + Vouchers em parceiros" },
  { posicao: 3, valor: 50, descricao: "na conta de energia + Certificado Digital" },
];

export default function PremiosRanking() {
  return (
    <section aria-labelledby="premios-ranking">
      <header className="mb-6 text-center">
        <p className="text-sm tracking-wide text-slate-600">RECOMPENSAS DO MÊS</p>
        <h2 id="premios-ranking" className="mt-2 text-3xl font-bold text-slate-900">Prêmios para os melhores</h2>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {premios.map((premio) => (
          <CardMedalha key={premio.posicao} posicao={premio.posicao}>
            <h3 className="text-xl font-bold text-slate-900">{premio.posicao}º Lugar</h3>
            <p className="mt-3 leading-7 text-slate-500">Subsídio de <strong>R$ {premio.valor}</strong> {premio.descricao}</p>
          </CardMedalha>
        ))}
      </div>
    </section>
  );
}