import ParticipantesCards from "../../components/ParticipantesCards";

export default function Equipe() {
  return (
    <main className="min-h-screen bg-slate-100 px-5 py-14 sm:px-8">
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <span className="inline-block rounded-full bg-linear-to-r from-[#2ECC71] to-[#3498DB] px-5 py-2 text-sm font-bold tracking-wider text-white">
          NOSSA EQUIPE
        </span>
        <h1 className="mt-5 text-3xl font-extrabold text-[#1A1A2E] sm:text-5xl">Quem constrói o SoulUp</h1>
        <p className="mt-4 text-lg text-slate-500">Conheça os participantes do projeto.</p>
      </header>
      <section aria-label="Participantes do projeto" className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <ParticipantesCards nome="Luigi Tormim" rm="572424" email="luigitormim27@gmail.com"
          foto="/equipe/luigi-tormim.png" github="https://github.com/LuigiT2703"
          linkedin="https://www.linkedin.com/in/luigi-tormim-b64738393" />
        <ParticipantesCards nome="Pedro Salvatore" rm="569497" email="pedrosalvatore2112@gmail.com"
          foto="/equipe/pedro-salvatore.png" github="https://github.com/Pedro-H-Salvatore"
          linkedin="https://www.linkedin.com/in/pedro-salvatore-a4a2763b7/" />
        <ParticipantesCards nome="Gabriel Tavares" rm="571113" email="gabriel.stavares05@gmail.com"
          foto="/equipe/gabriel-tavares.png" github="https://github.com/gabristavares"
          linkedin="https://www.linkedin.com/in/gabrielst1005" />
        <ParticipantesCards nome="Cauã de Souza" rm="573349" email="Cauadesouzavasconcellos@gmail.com"
          foto="/equipe/caua-de-souza.png" github="https://github.com/cauadesouzavasconcellos-byte"
          linkedin="https://www.linkedin.com/in/cauã-souza-b92261395" />
        <div className="md:col-span-2 md:mx-auto md:w-[calc(50%-1rem)]">
          <ParticipantesCards nome="Leonardo De Souza Bernard" rm="570951" email="sbleonardo@icloud.com"
            foto="/equipe/leonardo-bernard.png" github="https://github.com/bernardleonardo"
            linkedin="https://www.linkedin.com/in/leonardo-de-souza-573306410" />
        </div>
      </section>
    </main>
  );
}