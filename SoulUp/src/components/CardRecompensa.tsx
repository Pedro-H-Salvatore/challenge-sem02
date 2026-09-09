import type { ReactNode } from "react";

interface CardRecompensaProps {
  medalha: ReactNode;
  posicao: string;
  titulo: string;
  descricao: string;
  valor: string;
  complementoValor?: string;
  corBorda: string;
}

export default function CardRecompensa({
  medalha,
  posicao,
  titulo,
  descricao,
  valor,
  complementoValor,
  corBorda,
}: CardRecompensaProps) {
  return (
    <article
      className={`
        flex min-h-76 flex-col rounded-2xl border-2 bg-white p-8
        shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg
        ${corBorda}
      `}
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
        <span>{medalha}</span>
        <span>{posicao}</span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {titulo}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {descricao}
      </p>

      <p className="mt-auto bg-linear-to-r from-emerald-400 to-sky-500 bg-clip-text pt-6 text-2xl font-bold text-transparent">
        {valor}

        {complementoValor && (
          <span className="text-xl">
            {" "}
            {complementoValor}
          </span>
        )}
      </p>
    </article>
  );
}