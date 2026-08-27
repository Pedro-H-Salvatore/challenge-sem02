import { Link } from "react-router";



const Footer = () => {

    return (
        <footer className=" flex justify-center items-center font-bold w-full h-90 bg-[#1A1A2E] mt-5">
            
                <div className="flex flex-row">

                    <div className="flex flex-col p-4">
                        <h2 className="text-green-400">SoulUp</h2>
                        <p className=" text-sm text-white/45 w-xs">Transforme hábitos em impacto. Ganhe pontos por ações sustentáveis e concorra a subsídios reais na sua conta de energia.</p>

                    </div>
                    <div className="flex flex-col p-4">
                        <h2 className="text-white">Navegação</h2>

                        <Link className="text-white/45" to={""}>Sobre</Link>
                        <Link className="text-white/45" to={""}>Integrantes</Link>
                        <Link className="text-white/45" to={""}>FAQ</Link>
                        <Link className="text-white/45" to={""}>Contato</Link>

                    </div>
                    <div className="flex flex-col p-4">
                        <h2 className="text-white">Siga-nos</h2>
                        <Link className="text-white/45" to={""}>GitHub</Link>
                        <Link className="text-white/45" to={""}>LinkedIn</Link>

                    </div>
                </div>
            


        </footer>
    )
};

export default Footer;
