import { useEffect, useState } from "react";

export default function ContagemRanking({ encerramento }: { encerramento: number }) {
  const [agora, setAgora] = useState(() => Date.now());

  useEffect(() => {
    const intervalo = window.setInterval(() => setAgora(Date.now()), 1000);
    return () => window.clearInterval(intervalo);
  }, []);

  const segundos = Math.max(0, Math.floor((encerramento - agora) / 1000));
  const unidades = [
    { nome: "DIAS", valor: Math.floor(segundos / 86400) },
    { nome: "HORAS", valor: Math.floor(segundos / 3600) % 24 },
    { nome: "MIN", valor: Math.floor(segundos / 60) % 60 },
    { nome: "SEG", valor: segundos % 60 },
  ];

  return (
    <section aria-label="Prazo da competição" className="rounded-3xl bg-[#1A1A2E] px-6 py-7 text-white sm:px-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-lg text-slate-300">
          ⏱ {segundos > 0 ? "Ranking fecha em:" : "Competição encerrada"}
        </p>
        <div className="grid w-full max-w-sm grid-cols-4 gap-2 md:w-auto md:gap-3">
          {unidades.map(({ nome, valor }) => (
            <div key={nome} className="min-w-0 rounded-xl bg-white/10 px-1 py-4 text-center sm:min-w-16 sm:px-3">
              <p className="text-2xl font-bold tabular-nums sm:text-3xl text-[#2ECC71]">{String(valor).padStart(2, "0")}</p>
              <p className="mt-2 text-xs text-slate-300">{nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
