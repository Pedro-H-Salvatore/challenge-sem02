import type { FormEventHandler } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  campoBusca: UseFormRegisterReturn<"busca">;
  aoEnviar: FormEventHandler<HTMLFormElement>;
}

export default function CabecalhoFaq({ campoBusca, aoEnviar }: Props) {
  return (
    <header className="bg-linear-to-r from-[#2ECC71] to-[#3498DB] px-6 py-16 text-center text-white sm:py-20">
      <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-bold tracking-wider">DÚVIDAS</span>
      <h1 className="mt-5 text-3xl font-extrabold sm:text-5xl">Perguntas Frequentes</h1>
      <p className="mt-4 text-base sm:text-xl">Encontre respostas para as principais dúvidas sobre o SoulUp.</p>
      <form role="search" onSubmit={aoEnviar} className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full border border-white/40 bg-white/20 px-5 focus-within:ring-2 focus-within:ring-white">
        <span aria-hidden="true">🔍</span>
        <label htmlFor="busca-faq" className="sr-only">Buscar perguntas e respostas</label>
        <input id="busca-faq" type="search" maxLength={100} {...campoBusca} placeholder="Buscar pergunta..." className="min-w-0 flex-1 bg-transparent py-4 text-lg text-white outline-none placeholder:text-white/85" />
      </form>
    </header>
  );
}
