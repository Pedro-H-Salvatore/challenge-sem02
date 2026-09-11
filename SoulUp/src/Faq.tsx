import { useState } from "react";
import CabecalhoFaq from "../../components/CabecalhoFaq";
import ItemFaq from "../../components/ItemFaq";
import ContatoFaq from "../../components/ContatoFaq";
import { perguntasFaq } from "./dadosFaq";

function normalizar(texto: string) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

export default function Faq() {
  const [busca, setBusca] = useState("");
  const termo = normalizar(busca);
  const perguntas = perguntasFaq.filter(({ pergunta, resposta }) =>
    normalizar(pergunta + " " + resposta).includes(termo)
  );

  return (
    <main className="min-h-screen bg-slate-100">
      <CabecalhoFaq busca={busca} aoBuscar={setBusca} />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <p role="status" className={termo ? "mb-5 text-sm text-slate-500" : "sr-only"}>
          {perguntas.length} {perguntas.length === 1 ? "pergunta encontrada" : "perguntas encontradas"}
        </p>
        <section aria-label="Perguntas e respostas" className="space-y-3">
          {perguntas.map((pergunta) => <ItemFaq key={pergunta.id} {...pergunta} />)}
          {perguntas.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center">
              <h2 className="text-xl font-semibold text-slate-900">Nenhuma pergunta encontrada</h2>
              <p className="mt-3 text-slate-500">Tente outras palavras, como pontos, cadastro ou energia.</p>
              <button type="button" onClick={() => setBusca("")} className="mt-5 cursor-pointer rounded-lg px-3 py-2 font-semibold text-emerald-700 underline focus-visible:outline-2 focus-visible:outline-emerald-600">
                Limpar busca
              </button>
            </div>
          )}
        </section>
        <ContatoFaq />
      </div>
    </main>
  );
}