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
    { tag: "Novidade", nome: "APP Central de Voos", desc: "Tudo da Central reunido no seu celular, com praticidade no dia a dia: você diz pra onde quer ir e o app busca as promoções pra você.", preco: 497, oficial: false },
    { nome: "Monitoramento Personalizado com IA", desc: "O nosso sistema junta inteligência artificial e uma equipe especializada pra vigiar o preço das suas viagens e avisar quando baixa.", preco: 297, oficial: false },
    { nome: "Workshop Desvendando as Milhas", desc: "Um encontro ao vivo pra entender de vez como as milhas funcionam e começar a usar do jeito certo.", preco: 397, oficial: false },
    { nome: "Curso de Milhas", desc: "Aulas em vídeo pra juntar e usar pontos e milhas do jeito certo.", preco: 397, oficial: false },
    { nome: "Grupo de Estratégias", desc: "Transferências bonificadas, promoções de compra de milhas e as melhores oportunidades dos programas de pontos, em primeira mão.", preco: 197, oficial: false },
    { nome: "Suporte Jurídico", desc: "Advogada especialista em direito do passageiro pra quando o voo der problema.", preco: 197, oficial: false },
  ],
};
