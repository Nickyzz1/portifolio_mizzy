export type ProjectCategory = 'Vídeo Longo YouTube' | 'Shorts & Reels' | 'Motion' | 'VSL';

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  format: '16:9' | '9:16';
  aspectLabel: string;
  duration: string;
  fps: string;
  year: string;
  featuredInOpening?: boolean;
  openingShortTitle?: string;
  openingShortDesc?: string;
  description: string;
  challenge: string;
  editingApproach: string;
  deliverables: string;
  image: string;
}

export const portfolioData = {
  brand: {
    name: 'MIZZY',
    role: 'Video Editing Portfolio',
    subtitle: 'Edição & Pós-Produção Audiovisual',
    editorName: 'Carlos Mizete (Mizzy)',
    legalName: 'Carlos Mizete',
    cnpj: '69.914.747/0001-51',
    location: 'São Gabriel da Palha - ES · Brasil & Global',
  },
  contact: {
    whatsappNumber: '5527998001251',
    whatsappDisplay: '+55 (27) 99800-1251',
    whatsappDefaultMessage:
      'Olá Carlos! Vi o seu portfólio de edição (MIZZY) e gostaria de conversar sobre um projeto.',
    email: 'calorsmizete@gmail.com',
  },
  navigation: [
    { label: 'Destaques', href: '#destaques' },
    { label: 'Entre em Contato', href: '#contato' },
  ],
  opening: {
    title: 'Meus Trabalhos',
    italicSubtitle: 'projetos editados com intenção.',
    description:
      'Um vislumbre de obras construídas com cuidado, onde cada corte, desenho de som e tratamento de cor trabalham a favor do ritmo e da narrativa.',
  },
  projects: [
    {
      id: 'video-longo-youtube-expedicao',
      title: 'Vlog de Viagem: Expedição Urbana & Natureza',
      subtitle: 'Montagem fluida, eliminação de pausas, B-rolls e ambientação sonora imersiva.',
      category: 'Vídeo Longo YouTube',
      format: '16:9',
      aspectLabel: '16:9 · Horizontal',
      duration: '11:24',
      fps: '24 fps',
      year: '2026',
      featuredInOpening: true,
      openingShortTitle: 'Vídeo Longo YouTube',
      openingShortDesc: 'Cortes dinâmicos, ritmo narrativo e retenção em conteúdos longos.',
      description:
        'Montagem narrativa transformando material bruto de viagem em um episódio fluido, com transições orgânicas de movimento, ambientação sonora (foley) e look cinematográfico.',
      challenge:
        'Transformar gravações feitas sob condições variadas de luz em uma história coesa que prende o espectador do primeiro ao último minuto.',
      editingApproach:
        'Seleção rigorosa dos melhores takes, cortes no movimento (match cuts), camadas de áudio ambiente e balanceamento de cor.',
      deliverables: 'Master 16:9 para YouTube + cortes verticais de divulgação.',
      image:
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'shorts-reels-retencao',
      title: 'Série Vertical: Reels & Shorts de Alta Retenção',
      subtitle: 'Ganchos visuais nos 3 primeiros segundos, legendas dinâmicas e ritmo magnético.',
      category: 'Shorts & Reels',
      format: '9:16',
      aspectLabel: '9:16 · Vertical',
      duration: '00:52',
      fps: '60 fps',
      year: '2026',
      featuredInOpening: true,
      openingShortTitle: 'Shorts & Reels',
      openingShortDesc: 'Ganchos fortes nos 3 primeiros segundos e dinamismo vertical para redes.',
      description:
        'Vídeos verticais desenhados para retenção máxima no Instagram Reels, TikTok e YouTube Shorts com motion typography e áudio impactante.',
      challenge:
        'Impedir a rolagem do feed nos primeiros instantes e sustentar a taxa de conclusão acima de 75%.',
      editingApproach:
        'Eliminação de respiros, zoom-ins estratégicos para mudança de plano, destaque tipográfico e mixagem clara.',
      deliverables: 'Série de vídeos verticais prontos para publicação.',
      image:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'motion-visualizer-sync',
      title: 'Motion & Visualizer: Pulso Noturno',
      subtitle: 'Edição rítmica sincronizando visuais, luzes e cortes na batida exata da música.',
      category: 'Motion',
      format: '16:9',
      aspectLabel: '16:9 · Horizontal',
      duration: '03:18',
      fps: '30 fps',
      year: '2026',
      featuredInOpening: true,
      openingShortTitle: 'Motion',
      openingShortDesc: 'Sincronização rítmica, efeitos visuais e cortes na batida da trilha.',
      description:
        'Edição de alta energia guiada pelo BPM da trilha. Uso de speed ramps suaves, cortes nos transientes da bateria e tratamento cromático estilizado.',
      challenge:
        'Manter a intensidade visual durante toda a faixa musical alternando entre planos e elementos animados.',
      editingApproach:
        'Marcação completa do grid de BPM na timeline, multicam dinâmico e realce de luzes práticas no grading.',
      deliverables: 'Master 16:9 + Canvas 9:16 para redes.',
      image:
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'vsl-conversao-criativo',
      title: 'Criativo de Conversão & VSL Dinâmica',
      subtitle: 'Edição orientada a performance onde cada corte reforça a persuasão do roteiro.',
      category: 'VSL',
      format: '9:16',
      aspectLabel: '9:16 · Vertical',
      duration: '02:10',
      fps: '30 fps',
      year: '2026',
      featuredInOpening: true,
      openingShortTitle: 'VSL',
      openingShortDesc: 'Estrutura persuasiva e cortes estratégicos para alta conversão.',
      description:
        'Vídeo de vendas com suporte visual constante: cada argumento é acompanhado por demonstrações visuais, B-rolls e CTAs pontuais.',
      challenge:
        'Manter o ritmo persuasivo de um roteiro denso sem cansar o espectador.',
      editingApproach:
        'Divisão do vídeo em blocos visuais estratégicos, com cadência de cortes alinhada às viradas do texto.',
      deliverables: 'VSL + Variações de Hook inicial para testes de conversão.',
      image:
        'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'video-longo-documentario',
      title: 'Mini-Doc: Ofício & Bastidores Reais',
      subtitle: 'Montagem guiada pela narrativa, capturando momentos reais com sensibilidade.',
      category: 'Vídeo Longo YouTube',
      format: '16:9',
      aspectLabel: '16:9 · Horizontal',
      duration: '08:45',
      fps: '24 fps',
      year: '2026',
      featuredInOpening: false,
      description:
        'Documentário focado em história real, priorizando pausas dramáticas, L-cuts entre depoimentos e imagens de cobertura.',
      challenge: 'Construir um arco emocional autêntico a partir de entrevistas espontâneas.',
      editingApproach:
        'Estruturação da história a partir do áudio, cortes invisíveis e tratamento acústico.',
      deliverables: 'Filme Documental 16:9 + Teaser curto.',
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'vsl-comercial-manifesto',
      title: 'Comercial & Manifesto de Marca',
      subtitle: 'Cortes limpos destacando storytelling, autoridade e proposta de valor.',
      category: 'VSL',
      format: '16:9',
      aspectLabel: '16:9 · Horizontal',
      duration: '01:15',
      fps: '24 fps',
      year: '2026',
      featuredInOpening: false,
      description:
        'Filme com foco em percepção de marca e autoridade, unindo ritmo cadenciado pela locução e letterings minimalistas.',
      challenge: 'Transmitir credibilidade e dinamismo em pouco mais de um minuto.',
      editingApproach: 'Decupagem cirúrgica da locução e transições de apoio sutis.',
      deliverables: 'Versão Principal 16:9 + Versão adaptada 9:16.',
      image:
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'video-longo-videocast-multicam',
      title: 'Videocast & Mesa-Redonda Multi-Câmera',
      subtitle: 'Sincronização de múltiplos ângulos, tratamento sonoro e curadoria de cortes.',
      category: 'Vídeo Longo YouTube',
      format: '16:9',
      aspectLabel: '16:9 · Horizontal',
      duration: '42:15',
      fps: '30 fps',
      year: '2026',
      featuredInOpening: false,
      description:
        'Edição completa com alternância natural entre apresentadores e convidados, equalização vocal e vinhetas.',
      challenge: 'Garantir dinamismo visual em conversas longas.',
      editingApproach: 'Sincronia precisa de timeline, cortes nas reações e lower thirds limpos.',
      deliverables: 'Episódio Completo 16:9 + Cortes para divulgação.',
      image:
        'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'shorts-reels-fashion-editorial',
      title: 'Fashion Film & Reel Editorial',
      subtitle: 'Cortes estilizados, estética de cor refinada e ritmo magnético.',
      category: 'Shorts & Reels',
      format: '9:16',
      aspectLabel: '9:16 · Vertical',
      duration: '00:38',
      fps: '24 fps',
      year: '2026',
      featuredInOpening: false,
      description:
        'Peça curta vertical com foco em estética visual e movimento, sincronizada com batidas minimalistas.',
      challenge: 'Destacar texturas e dinamismo em formato vertical.',
      editingApproach: 'Montagem rítmica alternando planos detalhe com cortes secos de impacto.',
      deliverables: 'Master 9:16 para Reels e Shorts.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    },
  ] as PortfolioProject[],
};
