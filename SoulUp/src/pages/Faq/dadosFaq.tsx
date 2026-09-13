import { premios } from "../../data/premios";

export interface PerguntaFaq {
  id: string;
  pergunta: string;
  resposta: string;
}

export const perguntasFaq: PerguntaFaq[] = [
  {
    id: "sobre",
    pergunta: "O que é o SoulUp?",
    resposta: "O SoulUp é uma proposta de gamificação sustentável: registrar ações ecológicas, acumular pontos e participar de rankings. Nesta Sprint 03, a navegação é demonstrativa e não há concessão de recompensas reais.",
  },
  {
    id: "cadastro",
    pergunta: "Como faço para me cadastrar?",
    resposta: "Nesta versão não é necessário cadastrar uma conta. Clique em \"Começar agora\" para acessar o perfil demonstrativo João Silva. Não há login, senha ou confirmação de e-mail neste protótipo.",
  },
  {
    id: "registro",
    pergunta: "Como registro minhas ações sustentáveis?",
    resposta: "No Dashboard, escolha uma opção em \"Registrar Ação Rápida\". Os pontos, as atividades e o progresso são atualizados durante a sessão. Ao sair ou recarregar a página, a demonstração é reiniciada.",
  },
  {
    id: "pontos",
    pergunta: "Como funciona o sistema de pontos?",
    resposta: "Nesta demonstração, cada registro vale: reciclar 50 pontos, energia 30, água 25, bike 40, plantar 35 e consumo 20. Esses valores são somados aos pontos do perfil demonstrativo.",
  },
  {
    id: "subsidio",
    pergunta: "Como funciona o subsídio na conta de energia?",
    resposta: `A proposta prevê: ${premios.map((premio) => `${premio.posicao}º lugar R${premio.valor}`).join(", ")} de subsídio na conta de energia. São valores ilustrativos; não há pagamento, desconto real ou parceria operacional nesta demonstração.`,
  },
  {
    id: "participacao",
    pergunta: "Quem pode participar?",
    resposta: "Qualquer visitante pode explorar esta demonstração acadêmica, sem cadastro ou pagamento. A proposta é incentivar hábitos sustentáveis; não há inscrição em uma competição real.",
  },
  {
    id: "verificacao",
    pergunta: "As ações registradas são verificadas?",
    resposta: "Não. Os registros são simulados e não há verificação por fotos, localização ou banco de dados. O protótipo demonstra apenas a interação com as ações.",
  },
  {
    id: "perder-pontos",
    pergunta: "Posso perder pontos?",
    resposta: "Os pontos são guardados apenas no estado da página. Ao sair do Dashboard ou recarregá-lo, o perfil retorna aos dados iniciais. Não há saldo permanente nesta versão.",
  },
  {
    id: "ranking",
    pergunta: "Como funciona o ranking mensal?",
    resposta: "O ranking mostra participantes e pontuações fictícios, com filtros por categoria. A contagem indica o fim do mês, mas não executa premiação nem altera os dados automaticamente.",
  },
  {
    id: "gratuito",
    pergunta: "O SoulUp é gratuito?",
    resposta: "Sim! A demonstração do SoulUp é gratuita e não realiza cobranças. Nosso objetivo é apresentar uma proposta acessível de incentivo à sustentabilidade.",
  },
];
