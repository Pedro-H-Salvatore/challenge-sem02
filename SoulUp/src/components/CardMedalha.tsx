import type { ReactNode } from "react";

interface Props {
  posicao: number;
  children: ReactNode;
  className?: string;
}

const estilos = [
  { medalha: "🥇", cor: "border-yellow-400 bg-amber-50" },
  { medalha: "🥈", cor: "border-gray-300 bg-gray-100" },
  { medalha: "🥉", cor: "border-orange-400 bg-orange-50" },
];

export default function CardMedalha({ posicao, children, className = "" }: Props) {
  const estilo = estilos[posicao - 1] ?? estilos[2];

  return (
    <article className={`rounded-3xl border px-6 py-10 text-center ${estilo.cor} ${className}`}>
      <span className="mb-6 block text-5xl" aria-hidden="true">{estilo.medalha}</span>
      {children}
    </article>
  );
}