export interface PerguntaFaq {
  id: string;
  pergunta: string;
  resposta: string;
}

export const perguntasFaq: PerguntaFaq[] = [
  {
    id: "sobre",
    pergunta: "O que é o SoulUp?",
    resposta: "O SoulUp é uma plataforma de gamificação sustentável onde você registra ações ecológicas do dia a dia, acumula pontos e compete em rankings mensais para ganhar recompensas reais — incluindo subsídios na conta de energia elétrica.",
  },
  {
    id: "cadastro",
    pergunta: "Como faço para me cadastrar?",
    resposta: 'Para se cadastrar, clique no botão "Começar Agora" no topo da página, preencha o formulário de registro com seus dados pessoais e crie uma senha. Após confirmar seu email, você poderá acessar sua conta e começar a registrar suas ações sustentáveis.',
  },
  {
    id: "registro",
    pergunta: "Como registro minhas ações sustentáveis?",
    resposta: 'No seu Dashboard, há uma seção de "Registro Rápido" com botões para cada categoria de ação (reciclagem, energia, água, transporte, etc.). Basta clicar na ação realizada e os pontos são adicionados automaticamente.',
  },
  {
    id: "pontos",
    pergunta: "Como funciona o sistema de pontos?",
    resposta: "Cada categoria de ação tem uma pontuação associada: reciclagem (até 80 pts), energia (até 60 pts), água (até 50 pts), transporte (até 70 pts), verde urbano (até 100 pts) e consumo consciente (até 40 pts). Os pontos acumulam mensalmente.",
  },
  {
    id: "subsidio",
    pergunta: "Como funciona o subsídio na conta de energia?",
    resposta: "Ao final de cada mês, o ranking é fechado e os 3 primeiros colocados recebem: 1º lugar R$200, 2º lugar R$100 e 3º lugar R$50 de desconto direto na conta de energia, em parceria com o Programa Prospera.",
  },
  {
    id: "participacao",
    pergunta: "Quem pode participar?",
    resposta: "Qualquer pessoa com acesso à internet pode participar. A plataforma é aberta a todos os cidadãos brasileiros que queiram adotar hábitos mais sustentáveis e concorrer às recompensas.",
  },
  {
    id: "verificacao",
    pergunta: "As ações registradas são verificadas?",
    resposta: "Atualmente o sistema funciona com base na honestidade dos usuários. Estamos desenvolvendo um sistema de verificação por fotos e geolocalização para futuras versões da plataforma.",
  },
  {
    id: "perder-pontos",
    pergunta: "Posso perder pontos?",
    resposta: "Não — pontos nunca são removidos. Porém, o ranking mensal é zerado a cada novo mês, então todos começam do zero nas competições mensais. Seus pontos totais acumulados no perfil são permanentes.",
  },
  {
    id: "ranking",
    pergunta: "Como funciona o ranking mensal?",
    resposta: "O ranking mensal contabiliza os pontos acumulados durante o mês corrente. No último dia do mês é realizado o fechamento, os vencedores são anunciados e o ranking é reiniciado para o próximo período.",
  },
  {
    id: "gratuito",
    pergunta: "O SoulUp é gratuito?",
    resposta: "Sim! O SoulUp é 100% gratuito para todos os usuários. Nossa missão é democratizar a sustentabilidade e torná-la acessível para todos, sem nenhum custo.",
  },
];