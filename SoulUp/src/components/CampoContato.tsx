import type { ReactNode } from "react";

interface Props {
  id: string;
  titulo: string;
  erro?: string;
  children: ReactNode;
}

export default function CampoContato({ id, titulo, erro, children }: Props) {
  return (
    <div>
      <label htmlFor={id} className="mb-3 block font-semibold text-slate-900">{titulo}</label>
      {children}
      {erro && <p id={`${id}-erro`} role="alert" className="mt-2 text-sm text-red-600">{erro}</p>}
    </div>
  );
}