import { useNavigate } from "react-router";

export default function HeroHome() {


    const navigate = useNavigate()
    const botaoHero =() =>{
        navigate("/dashboard")
    }
    return (
        <section className="relative overflow-hidden bg-[#17172b] px-4 sm:px-6">

            <div className="absolute -bottom-40 -left-40 size-136 rounded-full bg-blue-500/20 blur-3xl" />


            <div className="absolute -right-32 top-0 size-136 rounded-full bg-emerald-500/15 blur-3xl" />


            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center py-16 text-center sm:min-h-160 sm:py-20 lg:min-h-184">
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 sm:px-6 sm:text-base">
                    🌱 Plataforma de Sustentabilidade
                </span>

                <h1 className="mt-8 text-3xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
                    Transforme Hábitos em
                    <span className="mt-2 block bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                        Impacto Real
                    </span>
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                    Registre ações sustentáveis, acumule pontos e concorra a prêmios
                    reais — incluindo desconto na conta de energia.
                </p>

                <div className="mt-10 flex w-full max-w-sm flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row">
                    <button
                        onClick={() => botaoHero()}
                        className="rounded-full bg-linear-to-r from-emerald-400 to-sky-500 px-9 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-1 hover:shadow-xl">
                        Começar Agora 
                    </button>

                    <a
                        href="#como-funciona"
                        className="rounded-full border border-white/20 px-9 py-4 font-bold text-white transition hover:border-white/50 hover:bg-white/10">
                        Ver Como Funciona
                    </a>
                </div>
            </div>
        </section>
    );
}
