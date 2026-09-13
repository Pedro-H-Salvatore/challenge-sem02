import { Link } from "react-router";



const Footer = () => {

    return (
        <footer className="w-full bg-[#1A1A2E] px-4 py-12 font-bold sm:px-8">
            
                <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">

                    <div className="flex flex-col p-4">
                        <h2 className="text-green-400">SoulUp</h2>
                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">Transforme hábitos em impacto. Ganhe pontos por ações sustentáveis e concorra a subsídios reais na sua conta de energia.</p>

                    </div>
                    <div className="flex flex-col p-4">
                        <h2 className="text-white">Navegação</h2>

                        <Link className="inline-flex min-h-11 items-center text-white/60 hover:text-white" to={"/sobre"}>Sobre</Link>
                        <Link className="inline-flex min-h-11 items-center text-white/60 hover:text-white" to={"/equipe"}>Integrantes</Link>
                        <Link className="inline-flex min-h-11 items-center text-white/60 hover:text-white" to={"/faq"}>FAQ</Link>
                        <Link className="inline-flex min-h-11 items-center text-white/60 hover:text-white" to={"/contato"}>Contato</Link>

                    </div>
                    <div className="flex flex-col p-4">
                        <h2 className="text-white">Siga-nos</h2>
                        <a className="inline-flex min-h-11 items-center text-white/60 hover:text-white" href="https://github.com/Pedro-H-Salvatore/challenge-sem02" target="_blank" rel="noopener noreferrer">GitHub do projeto ↗</a>
                        <Link className="inline-flex min-h-11 items-center text-white/60 hover:text-white" to={"/equipe"}>LinkedIn dos integrantes</Link>

                    </div>
                </div>
            


        </footer>
    )
};

export default Footer;
