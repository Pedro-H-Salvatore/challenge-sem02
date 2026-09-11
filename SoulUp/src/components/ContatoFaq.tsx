import { Link } from "react-router";

export default function ContatoFaq() {
  return (
    <aside aria-labelledby="contato-faq" className="mt-9 rounded-3xl bg-[#1A1A2E] px-6 py-12 text-center">
      <h2 id="contato-faq" className="text-2xl font-bold text-white sm:text-3xl">Ainda tem dúvidas?</h2>
      <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
        Nossa equipe está pronta para te ajudar. Entre em contato e responderemos em até 24h.
      </p>
      <Link to="/contato" className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#2ECC71] to-[#3498DB] px-9 py-4 text-lg font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        Fale Conosco <span aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}