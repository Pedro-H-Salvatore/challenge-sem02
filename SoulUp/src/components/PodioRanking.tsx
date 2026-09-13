import { Link } from "react-router";
import type { Participante } from "../pages/Ranking/dadosRanking";
import CardMedalha from "./CardMedalha";

export default function PodioRanking({ participantes }: { participantes: Participante[] }) {
  return (
    <section aria-label="Três primeiros colocados" className="grid gap-6 md:grid-cols-3">
      {participantes.slice(0, 3).map((pessoa, indice) => (
        <CardMedalha key={pessoa.id} posicao={indice + 1}
          className={indice === 0 ? "md:order-2" : indice === 1 ? "md:order-1" : "md:order-3"}>
          <p className="font-bold text-slate-500">#{indice + 1}</p>
          <h2 className="mt-3 text-xl font-bold text-slate-900"><Link to={`/ranking/${pessoa.id}`} className="underline decoration-emerald-500 underline-offset-4 hover:text-emerald-700 focus-visible:outline-2">{pessoa.nome}{pessoa.voce && " (você)"}</Link></h2>
          <p className="mt-3 text-slate-500">{pessoa.cidade}</p>
          <p className="mt-4 text-xl text-slate-900">{pessoa.pontos.toLocaleString("pt-BR")} pts</p>
        </CardMedalha>
      ))}
    </section>
  );
}
