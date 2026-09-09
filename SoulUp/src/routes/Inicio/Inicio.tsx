import Contador from "../../components/Contador";
import HeroHome from "../../components/HeroHome";


const Inicio = () => {

    return (
        <div className="font-bold">
            <HeroHome />
            <section className="flex justify-center items-center pt-2">
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
        </div>
    )
};

export default Inicio;