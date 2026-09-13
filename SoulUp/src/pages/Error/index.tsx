import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export default function Error() {
  const erro = useRouteError();
  const naoEncontrada = !erro || (isRouteErrorResponse(erro) && erro.status === 404);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-16 text-center text-slate-900 wrap-anywhere">
      <span aria-hidden="true" className="text-5xl">🌿</span>
      <h1 className="text-3xl font-bold sm:text-4xl">
        {naoEncontrada ? "Página não encontrada" : "Não foi possível abrir esta página"}
      </h1>
      <p className="max-w-xl text-slate-600">
        {naoEncontrada ? "O endereço pode ter mudado ou não existir. Escolha uma das opções abaixo para continuar." : "Ocorreu um erro inesperado. Volte ao início e tente novamente."}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/" className="rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4">Voltar ao início</Link>
        <Link to="/contato" className="rounded-full border border-slate-300 px-6 py-3 font-semibold hover:bg-white focus-visible:outline-2">Contato</Link>
      </div>
    </main>
  );
}
