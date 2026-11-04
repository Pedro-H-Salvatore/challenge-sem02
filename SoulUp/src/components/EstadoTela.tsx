// Componentes reutilizáveis para os estados de uma requisição

export function Carregando({ texto = "Carregando..." }: { texto?: string }) {
  return (
    <div role="status" className="flex flex-col items-center gap-3 py-12 text-center text-slate-500">
      <span aria-hidden="true" className="size-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" />
      <p className="font-medium text-slate-700">{texto}</p>
      <p className="text-xs">O servidor gratuito pode levar até 1 minuto para acordar na primeira consulta.</p>
    </div>
  );
}

export function MensagemErro({ mensagem, aoTentarNovamente }: { mensagem: string; aoTentarNovamente?: () => void }) {
  return (
    <div role="alert" className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center">
      <p className="font-semibold text-rose-700">{mensagem}</p>
      {aoTentarNovamente && (
        <button type="button" onClick={aoTentarNovamente}
          className="mt-4 cursor-pointer rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white hover:bg-rose-700">
          Tentar novamente
        </button>
      )}
    </div>
  );
}

export function ListaVazia({ texto }: { texto: string }) {
  return <p className="rounded-2xl bg-white p-8 text-center text-slate-500 shadow-sm">{texto}</p>;
}
