import { Plan, Testimonial, FAQItem } from '../types';

export const WHATSAPP_NUMBER = '5522920044462';

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const PLANS_DATA: Plan[] = [
  {
    id: 'plan-mensal',
    name: 'Plano Mensal',
    badge: 'Acesso Imediato',
    popular: true,
    period: 'mensal',
    originalPrice: 45.00,
    currentPrice: 30.00,
    monthlyEquivalent: 30.00,
    screens: 1,
    features: [
      'Acesso total a todos os canais ao vivo em 4K e Full HD',
      'Futebol ao vivo sem travamentos (60 FPS)',
      'Todos os canais Premiere, ESPN, Combate e Esportes',
      'Milhares de filmes e séries com lançamentos semanais',
      'Guia de programação (EPG) e Replay dos programas',
      'Compatível com Smart TV, TV Box, Celular e Computador',
      'Suporte direto via WhatsApp',
      'Sem taxa de adesão e sem fidelidade (renove quando quiser)'
    ],
    ctaText: 'Assinar por R$ 30,00'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Eduardo Mendes',
    city: 'São Paulo',
    state: 'SP',
    device: 'Smart TV Samsung Tizen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    rating: 5,
    highlight: 'Zero travamentos nos clássicos de domingo',
    review: 'Já tive outras listas que na hora do jogo decisivo travavam e ficavam carregando. Na PlayOne assisti à semifinal e à final sem um único engasgo! A imagem em 60fps faz toda a diferença para acompanhar o futebol.',
    date: 'Há 3 dias'
  },
  {
    id: 't2',
    name: 'Fernanda Vasconcelos',
    city: 'Belo Horizonte',
    state: 'MG',
    device: 'Fire TV Stick 4K',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
    rating: 5,
    highlight: 'Economizo muito todo mês',
    review: 'Eu pagava assinatura de vários streamings diferentes mais a TV a cabo convencional. Mudei para a PlayOne por R$ 30,00 e tenho tudo o que meus filhos e eu assistimos.',
    date: 'Há 1 semana'
  },
  {
    id: 't3',
    name: 'Roberto Silveira Lima',
    city: 'Curitiba',
    state: 'PR',
    device: 'Smart TV LG webOS & Celular',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face',
    rating: 5,
    highlight: 'Instalação em 3 minutos com suporte incrível',
    review: 'Não entendo muito de tecnologia e estava com receio de não conseguir configurar. O atendente no WhatsApp me mandou o passo a passo e em menos de 5 minutos já estava tudo funcionando na TV.',
    date: 'Há 2 semanas'
  },
  {
    id: 't4',
    name: 'Juliana Rocha Santos',
    city: 'Rio de Janeiro',
    state: 'RJ',
    device: 'TV Box Android & iPad',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face',
    rating: 5,
    highlight: 'Qualidade 4K e áudio limpo de verdade',
    review: 'Os lançamentos chegam muito rápido e a qualidade é excelente, com som nítido. Vale muito a pena pelo valor de R$ 30,00.',
    date: 'Há 3 semanas'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Como funciona a ativação após a solicitação?',
    answer: 'A ativação é super rápida! Basta nos chamar no WhatsApp pelo botão da página que enviamos imediatamente os dados de acesso, o aplicativo indicado para o seu aparelho e o tutorial de instalação.',
    category: 'Ativação'
  },
  {
    question: 'Como posso fazer um teste grátis?',
    answer: 'É muito simples! Clique no botão "Faça um teste grátis" nesta página para falar diretamente conosco no WhatsApp. Liberamos o seu teste gratuito sem burocracia.',
    category: 'Teste'
  },
  {
    question: 'Preciso de antenas, cabos ou aparelhos especiais?',
    answer: 'Não! Você não precisa de nenhuma antena ou técnico. A PlayOne funciona pela sua conexão de internet (Wi-Fi ou cabo de rede), diretamente no aplicativo da sua Smart TV, TV Box, Fire Stick, celular ou computador.',
    category: 'Instalação'
  },
  {
    question: 'Funciona em quais marcas de Smart TV e aparelhos?',
    answer: 'A PlayOne é compatível com praticamente todos os dispositivos: Smart TVs Samsung (Tizen), LG (webOS), TCL, Philips, Philco, Sony, Amazon Fire TV Stick, Xiaomi Mi Box, TV Box, computadores e smartphones (Android e iPhone).',
    category: 'Compatibilidade'
  },
  {
    question: 'Qual a velocidade mínima de internet recomendada?',
    answer: 'Recomendamos no mínimo 15 Mbps de velocidade para canais em Full HD e 30 Mbps para 4K Ultra HD. Nossos servidores utilizam codecs modernos que garantem máxima estabilidade.',
    category: 'Requisitos'
  },
  {
    question: 'Realmente não trava durante jogos de futebol?',
    answer: 'Sim! Nossos servidores contam com tecnologia CDN de alta performance com balanceamento de carga automático para suportar jogos com grande audiência sem travamentos.',
    category: 'Qualidade'
  },
  {
    question: 'Existe fidelidade ou multa se eu quiser cancelar?',
    answer: 'Zero fidelidade! O plano mensal é de apenas R$ 30,00 e você renova somente quando quiser, sem renovações automáticas indesejadas e sem multas.',
    category: 'Planos'
  }
];
