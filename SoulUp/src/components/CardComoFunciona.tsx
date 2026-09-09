import type { ReactNode } from "react";

interface CardComoFuncionaProps {
  icone: ReactNode;
  numero: string;
  titulo: string;
  descricao: string;
}

export default function CardComoFunciona({
  icone,
  numero,
  titulo,
  descricao,
}: CardComoFuncionaProps) {
  return (
    <article className="min-h-80 rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="text-4xl">{icone}</span>

      <p className="mt-5 text-sm font-bold text-emerald-500">
        {numero}
      </p>

      <h3 className="mt-3 text-xl font-bold text-slate-900">
        {titulo}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {descricao}
      </p>
    </article>
  );
}