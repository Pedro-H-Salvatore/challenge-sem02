import Contador from "../../components/Contador";
import HeroHome from "../../components/HeroHome";
import ComoFunciona from "../ComoFunciona";
import Recompensas from "../Recompensas";


const Inicio = () => {

    return (
        <div className="font-bold">
            <HeroHome />
            <section className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-6 sm:grid-cols-4">
                {/* 12400 usuarios ativos */}
                <Contador
                    numero={12400}
                    info="Usuarios ativos"
                // 340000 ações registradas 

                />
                <Contador
                    numero={340000}
                    info="Ações Registradas"
                />
                {/* 98 % de satisfação */}

                <Contador
                    numero={98}
                    info="% de Satisfação"
                />
                {/* 2800 prêmios entregues */}

                <Contador
                    numero={2800}
                    info="Prêmios Entregues"
                />

            </section>
            <ComoFunciona/>
            <Recompensas/>
        </div>
    )
};

export default Inicio;
