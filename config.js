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
    { tag: "Novidade", nome: "APP Central de Voos", desc: "Você coloca de onde sai e pra onde quer ir e vê as promoções que já apareceram pra essa viagem.", preco: 497, oficial: false },
    { nome: "Monitoramento Personalizado com IA", desc: "O nosso sistema junta inteligência artificial e uma equipe especializada pra vigiar o preço das suas viagens e avisar quando baixa.", preco: 297, oficial: false },
    { nome: "Workshop Desvendando as Milhas", desc: "Um encontro ao vivo pra entender de vez como as milhas funcionam e começar a usar do jeito certo.", preco: 397, oficial: false },
    { nome: "Curso de Milhas", desc: "Aulas em vídeo pra juntar e usar pontos e milhas do jeito certo.", preco: 397, oficial: false },
    { nome: "Grupo de Estratégias", desc: "As transferências bonificadas e as melhores estratégias do momento nos programas de pontos e milhas, com a referência de valor do milheiro, pra cada ponto seu render mais.", preco: 197, oficial: false },
    { nome: "Suporte Jurídico", desc: "Advogada especialista em direito do passageiro pra quando o voo der problema.", preco: 197, oficial: false },
  ],
};
