import FormularioContato from "../../components/FormularioContato";
import InformacoesContato from "../../components/CardContato";

export default function Contato() {
  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-linear-to-r from-[#2ECC71] to-[#3498DB] px-6 py-20 text-center text-white">
        <h1 className="text-3xl font-extrabold sm:text-5xl">Fale com a Gente</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8">
          Tire suas dúvidas, envie sugestões ou entre em contato com nossa equipe.
        </p>
      </header>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-12 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12">
        <FormularioContato />
        <InformacoesContato />
      </div>
    </main>
  );
}
