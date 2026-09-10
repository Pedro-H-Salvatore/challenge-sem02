import type { ReactNode } from "react";

export default function PainelDashboard({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="min-w-0 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-xl font-bold text-slate-900">{titulo}</h2>
      {children}
    </section>
  );
}