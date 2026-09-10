import { categorias } from "../routes/Ranking/dadosRanking";
import type { Categoria } from "../routes/Ranking/dadosRanking";

interface Props {
  selecionada: Categoria;
  aoSelecionar: (categoria: Categoria) => void;
}

export default function FiltrosRanking({ selecionada, aoSelecionar }: Props) {
  return (
    <div aria-label="Filtrar por categoria principal" className="flex flex-wrap gap-3">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          aria-pressed={selecionada === categoria}
          onClick={() => aoSelecionar(categoria)}
          className={`cursor-pointer rounded-full border px-6 py-3 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 ${selecionada === categoria ? "border-transparent bg-linear-to-r from-[#2ECC71] to-[#3498DB] text-white" : "border-slate-200 bg-white text-slate-500 hover:bg-emerald-50"}`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}