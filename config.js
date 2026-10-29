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
    { nome: "Monitoramento de até 10 viagens", desc: "O nosso sistema vigia o preço da sua viagem sozinho, o tempo todo, e avisa quando baixa.", preco: 197, oficial: false },
    { nome: "Especialistas no seu WhatsApp", desc: "Atendimento na frente da fila e pesquisas sem limite pra encontrar o melhor caminho da sua viagem.", preco: 997, oficial: false },
    { nome: "Grupo de Executiva e Primeira Classe", desc: "Mais de 20 promoções por dia pra viajar na frente do avião.", preco: 297, oficial: false },
    { nome: "Roteiros de viagem personalizados", desc: "Até 5 roteiros prontos para o destino que você escolher.", preco: 197, oficial: false },
    { nome: "Curso de Milhas e Grupo de Estratégias", desc: "Aulas em vídeo pra juntar e usar pontos e milhas do jeito certo.", preco: 497, oficial: false },
    { nome: "Suporte jurídico", desc: "Advogada especialista em direito do passageiro pra quando o voo der problema.", preco: 297, oficial: false },
  ],
};
