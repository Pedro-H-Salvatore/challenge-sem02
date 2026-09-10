function CardIndicador({ icone, valor, descricao }: { icone: string; valor: string; descricao: string }) {
  return (
    <article className="rounded-3xl bg-white px-4 py-8 text-center shadow-sm">
      <span aria-hidden="true" className="text-3xl">{icone}</span>
      <p className="mt-4 text-3xl font-bold text-teal-500">{valor}</p>
      <h2 className="mt-3 text-sm font-normal text-slate-500">{descricao}</h2>
    </article>
  );
}
export default function IndicadoresDashboard({ pontos, acoes }: { pontos: number; acoes: number }) {
  const indicadores = [
    { icone: "⭐", valor: pontos.toLocaleString("pt-BR"), descricao: "Pontos este mês" },
    { icone: "📊", valor: "#12", descricao: "Posição no ranking (demo)" },
    { icone: "🔥", valor: "7", descricao: "Dias em sequência" },
    { icone: "✅", valor: String(acoes), descricao: "Ações este mês" },
  ];
  return <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">{indicadores.map((item) => <CardIndicador key={item.descricao} {...item} />)}</div>;
}