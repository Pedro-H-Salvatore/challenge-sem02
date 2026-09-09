import { useEffect, useState } from "react"

type Contador = {
    numero: number,
    info: string
}


export default function Contador({ numero, info }: Contador) {
    const [contador, setContador] = useState(0)
    
    useEffect(() => {
        const duracao = 2000
        const inicio = performance.now()

        function animar(tempoAtual: number) {
            const tempoDecorrido = tempoAtual - inicio
            const progresso = Math.min(tempoDecorrido / duracao, 1)

            setContador(Math.floor(numero * progresso))

            if (progresso < 1) {
                requestAnimationFrame(animar)
            }

        }
        const animacao = requestAnimationFrame(animar)
        return () => cancelAnimationFrame(animacao)
    }, [])

    return (
        <div className="w-1/4 h-30 border-r border-gray-300">
            <div className="flex flex-col items-center mt-8">
                <h2 className="text-3xl">{contador.toLocaleString("pt-BR")}</h2>
                <p className="text-sm pt-2 text-gray-400">{info}</p>
            </div>
        </div>
    )

}