// Configuração da página da Super Black Friday. É o arquivo que se edita à mão antes de publicar.
window.CONFIG = {
  // Destino de todos os botões. Hoje aponta para a página do grupo gratuito.
  // Troque pela página ou link de entrada do grupo da Super Black Friday quando existir
  // (link de convite de grupo NÃO entra no repositório: cole só na cópia que vai ao ar).
  LINK_GRUPO: "https://grupogratuito.centraldevoos.com/",

  // Pilha de valor: "preço normal de 1 ano" de cada entrega.
  // oficial: true = valor que já está na base (base/central-de-voos/negocio.md).
  // oficial: false = PROPOSTA, a validar com o Pedro antes de publicar.
  ENTREGAS: [
    { nome: "Comunidade VIP no WhatsApp", desc: "Mais de 150 promoções de passagens por dia, saindo de todos os aeroportos do Brasil e separadas por região.", preco: 797, oficial: true },
    { nome: "App e plataforma Central de Voos", desc: "Você coloca de onde sai e pra onde quer ir e vê as promoções que já apareceram pra essa viagem.", preco: 497, oficial: false },
    { nome: "Monitoramento Personalizado com IA", desc: "A nossa inteligência artificial vigia o preço das suas viagens o tempo todo e avisa quando baixa.", preco: 297, oficial: false },
    { nome: "Especialistas no seu WhatsApp", desc: "Atendimento na frente da fila e pesquisas sem limite pra encontrar o melhor caminho da sua viagem.", preco: 997, oficial: false },
    { nome: "Workshop Caçador de Passagens", desc: "As técnicas que a nossa equipe usa todo dia pra achar passagem barata, pra você aplicar em qualquer viagem.", preco: 397, oficial: false },
    { nome: "Curso de Milhas", desc: "Aulas em vídeo pra juntar e usar pontos e milhas do jeito certo.", preco: 497, oficial: false },
    { nome: "Grupo de Estratégias de Milhas", desc: "As estratégias de milhas do momento, pra você saber a hora de juntar e a hora de emitir.", preco: 297, oficial: false },
    { nome: "Suporte jurídico", desc: "Advogada especialista em direito do passageiro pra quando o voo der problema.", preco: 297, oficial: false },
  ],
};
