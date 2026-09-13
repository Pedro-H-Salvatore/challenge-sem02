interface CardProps {
  icone: string;
  titulo: string;
  descricao: string;
}

function CardContato({ icone, titulo, descricao }: CardProps) {
  return (
    <article className="flex min-w-0 items-start gap-3 sm:gap-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#2ECC71] to-[#3498DB] text-xl">{icone}</span>
      <div className="min-w-0">
        <h3 className="font-bold text-slate-900">{titulo}</h3>
        <p className="mt-2 break-words leading-7 text-slate-500">{descricao}</p>
      </div>
    </article>
  );
}

const contatos: CardProps[] = [
  { icone: "📧", titulo: "E-mail", descricao: "contato@soulup.com.br" },
  { icone: "📍", titulo: "Localização", descricao: "São Paulo, SP — Brasil" },
  { icone: "⏱️", titulo: "Horário de Atendimento", descricao: "Segunda a Sexta, 9h às 18h" },
  { icone: "🤝", titulo: "Programa Prospera", descricao: "parceria@programaprospera.gov.br" },
];

const redes = [
  { nome: "GitHub", icone: "💻" },
  { nome: "LinkedIn", icone: "💼" },
  { nome: "Instagram", icone: "📷" },
];

export default function InformacoesContato() {
  return (
    <aside aria-label="Informações de contato" className="min-w-0 space-y-6">
      {contatos.map((contato) => <CardContato key={contato.titulo} {...contato} />)}
      <div>
        <h2 className="mb-4 font-bold text-slate-900">Nossas redes</h2>
        <div className="flex flex-wrap gap-3">
          {redes.map((rede) => (
            <span key={rede.nome} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-slate-600">
              <span aria-hidden="true">{rede.icone}</span>{rede.nome}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-500">Links das redes sociais em breve.</p>
      </div>
    </aside>
  );
}
