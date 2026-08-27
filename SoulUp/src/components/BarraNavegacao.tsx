import { NavLink, useNavigate } from "react-router"



const BarraNavegacao = () => {
    
    
    const estiloLink = ({isActive}: {isActive: boolean}) => {
        
        

        const estiloBase = "px-3 py-2 rounded-full font-semibold transition-colors duration-300"
        const estiloAtivo = "bg-white/15 text-white"
        const estiloInativo = "text-white/75 hover:text-white hover:bg-white/10"

        return `${estiloBase} ${isActive ? estiloAtivo : estiloInativo}`
    }
     const navigate = useNavigate()
    
         const botaoDashboard = () => {
        navigate("/dashboard")
        }

        const botaoSoul = () => {
        navigate("/inicio")
         }

    return(
         <div className="flex gap-4 justify-around items-center py-4 bg-[#1A1A2E] text-gray-300">
            <div className="text-2xl font-bold ">
                <h1 className="cursor-pointer" onClick={() => botaoSoul() }>🌿 SoulUp</h1>
            </div>
            <nav className="flex items-center gap-3">
                <NavLink to="/" end className={estiloLink}>
                    Início
                </NavLink>

                <NavLink to="/como-funciona" className={estiloLink}>
                    Como funciona
                </NavLink>

                <NavLink to="/recompensas" className={estiloLink}>
                    Recompensas
                </NavLink>

                <NavLink to="/ranking" className={estiloLink}>
                    Ranking
                </NavLink>

                <NavLink to="/faq" className={estiloLink}>
                    FAQ
                </NavLink>

                <NavLink to="/contato" className={estiloLink}>
                    Contato
                </NavLink>
            </nav>
            <div>
                <button onClick={() => botaoDashboard()} className="w-40 h-10 bg-linear-to-br from-[#2ECC71] to-[#3498DB] text-white rounded-full cursor-pointer">Começar agora</button>
            </div>
        </div>


    )
}

export default BarraNavegacao