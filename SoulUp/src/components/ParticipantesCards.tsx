type ParticipantesCardsProps = {
    nome: string;
    rm: string;
    email: string;
    foto: string;
    github: string;
    linkedin: string;
};

export default function ParticipantesCards({
    nome, rm, email, foto, github, linkedin,
}: ParticipantesCardsProps) {
    return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-1.5 bg-linear-to-r from-[#2ECC71] to-[#3498DB]" />
      <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-10 text-center sm:px-8">
        <img
          src={foto}
          alt={Foto de ${nome}}
          width={128}
          height={128}
          loading="lazy"
          className="size-32 rounded-full border-2 border-[#2ECC71] object-cover object-top"
        />
        <h2 className="mt-5 text-2xl font-bold text-[#1A1A2E] sm:text-3xl">{nome}</h2>
        <a
          href={mailto:${email}}
          className="mt-4 max-w-full break-all text-slate-500 transition-colors hover:text-[#2485bc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3498DB]"
        >
          {email}
        </a>
        <p className="mt-5 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-500">
          RM: {rm}
        </p>
      </div>
      <div className="grid grid-cols-2 divide-x divide-slate-200 border-t border-slate-200">
        <a href={github} target="_blank" rel="noopener noreferrer"
          aria-label={GitHub de ${nome} (abre em nova aba)}
          className="py-5 text-center font-medium text-slate-500 transition-colors hover:bg-[#1A1A2E] hover:text-white focus-visible:bg-[#1A1A2E] focus-visible:text-white focus-visible:outline-none">
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer"
          aria-label={LinkedIn de ${nome} (abre em nova aba)
}
className = "py-5 text-center font-medium text-slate-500 transition-colors hover:bg-[#3498DB] hover:text-white focus-visible:bg-[#3498DB] focus-visible:text-white focus-visible:outline-none" >
    LinkedIn
        </a >
      </div >
    </article >
  );
}