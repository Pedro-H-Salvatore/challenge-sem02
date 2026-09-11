import { useState } from "react";
import type { PerguntaFaq } from "../routes/Faq/dadosFaq";

export default function ItemFaq({ id, pergunta, resposta }: PerguntaFaq) {
  const [aberto, setAberto] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <h2>
        <button
          type="button"
          id={`pergunta-${id}`}
          aria-expanded={aberto}
          aria-controls={`resposta-${id}`}
          onClick={() => setAberto((valor) => !valor)}
          className="flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-6 text-left text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-emerald-600 sm:px-8 sm:text-xl"
        >
          {pergunta}
          <span aria-hidden="true" className="shrink-0 text-sm text-[#2ECC71]">{aberto ? "▲" : "▼"}</span>
        </button>
      </h2>
      <div id={`resposta-${id}`} aria-labelledby={`pergunta-${id}`} hidden={!aberto}>
        <p className="px-6 pb-7 text-base leading-8 font-normal text-slate-500 sm:px-8 sm:text-lg">
          {resposta}
        </p>
      </div>
    </article>
  );
}