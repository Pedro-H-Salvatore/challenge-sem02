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
        <div className="min-w-0 px-2 py-5 text-center">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl bg-linear-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">{contador.toLocaleString("pt-BR")}</h2>
                <p className="text-sm pt-2 text-gray-400">{info}</p>
            </div>
        </div>
    )

}
