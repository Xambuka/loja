export interface ConfiguracaoSistema {
  nome: string;
  versao: string;
  manutencao: boolean;
  mensagemManutencao?: string;
  taxaServico: number; // Porcentagem cobrada sobre cada pedido
  taxaAnuncio: number; // Porcentagem cobrada sobre cada anúncio
  tempoSessao: number; // Tempo de sessão em minutos
  limiteAnunciosGratuitos: number; // Quantidade de anúncios gratuitos por empresa
  limiteProdutosGratuitos: number; // Quantidade de produtos gratuitos por empresa
  raioEntrega: number; // Raio máximo de entrega em km
  emailContato: string;
  telefoneContato: string;
  redesSociais: RedesSociais;
  politicaPrivacidade: string;
  termosUso: string;
  faq: FAQ[];
}

export interface RedesSociais {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
}

export interface FAQ {
  pergunta: string;
  resposta: string;
  categoria: 'geral' | 'empresas' | 'clientes' | 'pagamentos' | 'entregas';
}

export interface ConfiguracaoNotificacoes {
  emailNovosPedidos: boolean;
  emailPedidosConfirmados: boolean;
  emailPedidosCancelados: boolean;
  emailAvaliacoes: boolean;
  pushNovosPedidos: boolean;
  pushPedidosConfirmados: boolean;
  pushPedidosCancelados: boolean;
  pushAvaliacoes: boolean;
  smsNovosPedidos: boolean;
  smsPedidosConfirmados: boolean;
  smsPedidosCancelados: boolean;
}

export interface ConfiguracaoEmpresa {
  empresaId: string;
  horarioFuncionamento: HorarioFuncionamento[];
  tempoPreparoEstimado: number; // em minutos
  raioEntrega: number; // em km
  taxaEntrega: number | null; // null para entrega gratuita
  pedidoMinimo: number;
  aceitaPagamentoOnline: boolean;
  aceitaDinheiro: boolean;
  aceitaValeRefeicao: boolean;
  aceitaCartao: boolean;
  notificacoes: ConfiguracaoNotificacoes;
  pausado: boolean;
  motivoPausa?: string;
}

export interface HorarioFuncionamento {
  diaSemana: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Domingo, 1 = Segunda, ...
  aberto: boolean;
  horarioAbertura?: string; // formato HH:MM
  horarioFechamento?: string; // formato HH:MM
  intervaloInicio?: string; // formato HH:MM
  intervaloFim?: string; // formato HH:MM
}

// Dados mock para configuração do sistema
export const configuracaoSistema: ConfiguracaoSistema = {
  nome: 'LocalMarket',
  versao: '1.0.0',
  manutencao: false,
  taxaServico: 5.0, // 5%
  taxaAnuncio: 10.0, // 10%
  tempoSessao: 60, // 60 minutos
  limiteAnunciosGratuitos: 1,
  limiteProdutosGratuitos: 20,
  raioEntrega: 15, // 15 km
  emailContato: 'contato@localmarket.com',
  telefoneContato: '(11) 99999-9999',
  redesSociais: {
    facebook: 'https://facebook.com/localmarket',
    instagram: 'https://instagram.com/localmarket',
    twitter: 'https://twitter.com/localmarket',
    linkedin: 'https://linkedin.com/company/localmarket'
  },
  politicaPrivacidade: 'A Política de Privacidade do LocalMarket descreve como coletamos, usamos e compartilhamos suas informações pessoais. Ao utilizar nossos serviços, você concorda com nossa Política de Privacidade. Coletamos informações para melhorar nossos serviços, fornecer recursos personalizados e garantir a segurança da plataforma. Não compartilhamos suas informações pessoais com terceiros sem seu consentimento, exceto quando exigido por lei. Você pode acessar, corrigir ou excluir suas informações a qualquer momento através das configurações da sua conta.',
  termosUso: 'Ao utilizar o LocalMarket, você concorda com nossos Termos de Uso. Nossos serviços são fornecidos "como estão" e não garantimos que eles serão ininterruptos ou livres de erros. Você é responsável por manter a confidencialidade de sua conta e senha. O LocalMarket não é responsável pelo conteúdo postado pelos usuários ou pela qualidade dos produtos e serviços oferecidos pelos estabelecimentos. Reservamo-nos o direito de modificar ou encerrar o serviço a qualquer momento, com ou sem aviso prévio.',
  faq: [
    {
      pergunta: 'Como faço para me cadastrar no LocalMarket?',
      resposta: 'Para se cadastrar, clique no botão "Criar Conta" no canto superior direito da página inicial. Preencha o formulário com seus dados pessoais e crie uma senha. Você receberá um e-mail de confirmação para ativar sua conta.',
      categoria: 'geral'
    },
    {
      pergunta: 'Como cadastrar minha empresa no LocalMarket?',
      resposta: 'Após criar sua conta pessoal, acesse o menu "Minha Conta" e selecione a opção "Cadastrar Empresa". Preencha o formulário com os dados do seu estabelecimento, incluindo endereço, categoria, horário de funcionamento e informações de contato.',
      categoria: 'empresas'
    },
    {
      pergunta: 'Quais são as formas de pagamento aceitas?',
      resposta: 'O LocalMarket aceita diversas formas de pagamento, incluindo cartão de crédito, cartão de débito, PIX e vale-refeição. Cada estabelecimento pode escolher quais métodos de pagamento deseja aceitar.',
      categoria: 'pagamentos'
    },
    {
      pergunta: 'Como funciona a entrega dos produtos?',
      resposta: 'Cada estabelecimento define sua própria política de entrega, incluindo taxa, raio de entrega e tempo estimado. Essas informações estão disponíveis na página do estabelecimento antes de você finalizar seu pedido.',
      categoria: 'entregas'
    },
    {
      pergunta: 'Como faço para avaliar um estabelecimento ou produto?',
      resposta: 'Após receber seu pedido, você receberá uma notificação para avaliar o estabelecimento e os produtos. Você também pode acessar o histórico de pedidos em "Minha Conta" e clicar em "Avaliar" ao lado do pedido que deseja comentar.',
      categoria: 'clientes'
    },
    {
      pergunta: 'Quanto custa para manter minha empresa no LocalMarket?',
      resposta: 'Oferecemos diferentes planos de assinatura, começando com um plano gratuito com recursos limitados. Para mais recursos, como destaque na plataforma e maior número de produtos, oferecemos planos pagos a partir de R$49,90 por mês.',
      categoria: 'empresas'
    },
    {
      pergunta: 'Como funciona o sistema de anúncios?',
      resposta: 'Empresas podem criar anúncios para destacar seus produtos ou promoções. Os anúncios podem aparecer na página inicial, nas páginas de categoria ou nos resultados de busca, dependendo do tipo escolhido. Cada plano inclui uma quantidade específica de anúncios gratuitos.',
      categoria: 'empresas'
    },
    {
      pergunta: 'O que fazer se tiver um problema com meu pedido?',
      resposta: 'Em caso de problemas com seu pedido, você pode entrar em contato diretamente com o estabelecimento através do chat disponível na plataforma. Se não conseguir resolver, pode abrir uma reclamação em "Minha Conta" > "Meus Pedidos" > "Reportar Problema".',
      categoria: 'clientes'
    }
  ]
};

// Dados mock para configurações de empresas
export const configuracoesEmpresas: ConfiguracaoEmpresa[] = [
  {
    empresaId: '1', // Restaurante Sabor Caseiro
    horarioFuncionamento: [
      { diaSemana: 0, aberto: true, horarioAbertura: '11:00', horarioFechamento: '22:00' },
      { diaSemana: 1, aberto: false },
      { diaSemana: 2, aberto: true, horarioAbertura: '11:00', horarioFechamento: '22:00' },
      { diaSemana: 3, aberto: true, horarioAbertura: '11:00', horarioFechamento: '22:00' },
      { diaSemana: 4, aberto: true, horarioAbertura: '11:00', horarioFechamento: '22:00' },
      { diaSemana: 5, aberto: true, horarioAbertura: '11:00', horarioFechamento: '23:00' },
      { diaSemana: 6, aberto: true, horarioAbertura: '11:00', horarioFechamento: '23:00' }
    ],
    tempoPreparoEstimado: 40,
    raioEntrega: 8,
    taxaEntrega: 5.00,
    pedidoMinimo: 20.00,
    aceitaPagamentoOnline: true,
    aceitaDinheiro: true,
    aceitaValeRefeicao: true,
    aceitaCartao: true,
    notificacoes: {
      emailNovosPedidos: true,
      emailPedidosConfirmados: true,
      emailPedidosCancelados: true,
      emailAvaliacoes: true,
      pushNovosPedidos: true,
      pushPedidosConfirmados: true,
      pushPedidosCancelados: true,
      pushAvaliacoes: true,
      smsNovosPedidos: true,
      smsPedidosConfirmados: false,
      smsPedidosCancelados: false
    },
    pausado: false
  },
  {
    empresaId: '2', // Pizzaria Bella Napoli
    horarioFuncionamento: [
      { diaSemana: 0, aberto: true, horarioAbertura: '18:00', horarioFechamento: '23:00' },
      { diaSemana: 1, aberto: false },
      { diaSemana: 2, aberto: true, horarioAbertura: '18:00', horarioFechamento: '23:00' },
      { diaSemana: 3, aberto: true, horarioAbertura: '18:00', horarioFechamento: '23:00' },
      { diaSemana: 4, aberto: true, horarioAbertura: '18:00', horarioFechamento: '23:00' },
      { diaSemana: 5, aberto: true, horarioAbertura: '18:00', horarioFechamento: '00:00' },
      { diaSemana: 6, aberto: true, horarioAbertura: '18:00', horarioFechamento: '00:00' }
    ],
    tempoPreparoEstimado: 30,
    raioEntrega: 10,
    taxaEntrega: null, // Entrega gratuita
    pedidoMinimo: 40.00,
    aceitaPagamentoOnline: true,
    aceitaDinheiro: true,
    aceitaValeRefeicao: false,
    aceitaCartao: true,
    notificacoes: {
      emailNovosPedidos: true,
      emailPedidosConfirmados: true,
      emailPedidosCancelados: true,
      emailAvaliacoes: true,
      pushNovosPedidos: true,
      pushPedidosConfirmados: true,
      pushPedidosCancelados: true,
      pushAvaliacoes: true,
      smsNovosPedidos: false,
      smsPedidosConfirmados: false,
      smsPedidosCancelados: false
    },
    pausado: false
  },
  {
    empresaId: '3', // Café Aroma
    horarioFuncionamento: [
      { diaSemana: 0, aberto: true, horarioAbertura: '08:00', horarioFechamento: '20:00' },
      { diaSemana: 1, aberto: true, horarioAbertura: '07:00', horarioFechamento: '20:00' },
      { diaSemana: 2, aberto: true, horarioAbertura: '07:00', horarioFechamento: '20:00' },
      { diaSemana: 3, aberto: true, horarioAbertura: '07:00', horarioFechamento: '20:00' },
      { diaSemana: 4, aberto: true, horarioAbertura: '07:00', horarioFechamento: '20:00' },
      { diaSemana: 5, aberto: true, horarioAbertura: '07:00', horarioFechamento: '22:00' },
      { diaSemana: 6, aberto: true, horarioAbertura: '08:00', horarioFechamento: '22:00' }
    ],
    tempoPreparoEstimado: 15,
    raioEntrega: 5,
    taxaEntrega: 3.00,
    pedidoMinimo: 15.00,
    aceitaPagamentoOnline: true,
    aceitaDinheiro: true,
    aceitaValeRefeicao: true,
    aceitaCartao: true,
    notificacoes: {
      emailNovosPedidos: true,
      emailPedidosConfirmados: true,
      emailPedidosCancelados: true,
      emailAvaliacoes: true,
      pushNovosPedidos: true,
      pushPedidosConfirmados: true,
      pushPedidosCancelados: true,
      pushAvaliacoes: false,
      smsNovosPedidos: false,
      smsPedidosConfirmados: false,
      smsPedidosCancelados: false
    },
    pausado: false
  },
  {
    empresaId: '4', // Mercado Fresco
    horarioFuncionamento: [
      { diaSemana: 0, aberto: true, horarioAbertura: '08:00', horarioFechamento: '14:00' },
      { diaSemana: 1, aberto: true, horarioAbertura: '08:00', horarioFechamento: '20:00' },
      { diaSemana: 2, aberto: true, horarioAbertura: '08:00', horarioFechamento: '20:00' },
      { diaSemana: 3, aberto: true, horarioAbertura: '08:00', horarioFechamento: '20:00' },
      { diaSemana: 4, aberto: true, horarioAbertura: '08:00', horarioFechamento: '20:00' },
      { diaSemana: 5, aberto: true, horarioAbertura: '08:00', horarioFechamento: '20:00' },
      { diaSemana: 6, aberto: true, horarioAbertura: '08:00', horarioFechamento: '18:00' }
    ],
    tempoPreparoEstimado: 60,
    raioEntrega: 12,
    taxaEntrega: 12.00,
    pedidoMinimo: 50.00,
    aceitaPagamentoOnline: true,
    aceitaDinheiro: false,
    aceitaValeRefeicao: false,
    aceitaCartao: true,
    notificacoes: {
      emailNovosPedidos: true,
      emailPedidosConfirmados: true,
      emailPedidosCancelados: true,
      emailAvaliacoes: true,
      pushNovosPedidos: true,
      pushPedidosConfirmados: true,
      pushPedidosCancelados: true,
      pushAvaliacoes: true,
      smsNovosPedidos: false,
      smsPedidosConfirmados: false,
      smsPedidosCancelados: false
    },
    pausado: false
  },
  {
    empresaId: '5', // Hamburgueria Artesanal
    horarioFuncionamento: [
      { diaSemana: 0, aberto: true, horarioAbertura: '12:00', horarioFechamento: '22:00' },
      { diaSemana: 1, aberto: false },
      { diaSemana: 2, aberto: true, horarioAbertura: '18:00', horarioFechamento: '23:00' },
      { diaSemana: 3, aberto: true, horarioAbertura: '18:00', horarioFechamento: '23:00' },
      { diaSemana: 4, aberto: true, horarioAbertura: '18:00', horarioFechamento: '23:00' },
      { diaSemana: 5, aberto: true, horarioAbertura: '18:00', horarioFechamento: '00:00' },
      { diaSemana: 6, aberto: true, horarioAbertura: '12:00', horarioFechamento: '00:00' }
    ],
    tempoPreparoEstimado: 25,
    raioEntrega: 7,
    taxaEntrega: 8.00,
    pedidoMinimo: 30.00,
    aceitaPagamentoOnline: true,
    aceitaDinheiro: true,
    aceitaValeRefeicao: true,
    aceitaCartao: true,
    notificacoes: {
      emailNovosPedidos: true,
      emailPedidosConfirmados: true,
      emailPedidosCancelados: true,
      emailAvaliacoes: true,
      pushNovosPedidos: true,
      pushPedidosConfirmados: true,
      pushPedidosCancelados: true,
      pushAvaliacoes: true,
      smsNovosPedidos: true,
      smsPedidosConfirmados: false,
      smsPedidosCancelados: true
    },
    pausado: true,
    motivoPausa: 'Estamos em reforma até 01/06/2023. Voltaremos com novidades!'
  }
];

// Funções para manipular os dados
export function getConfiguracaoEmpresa(empresaId: string): ConfiguracaoEmpresa | undefined {
  return configuracoesEmpresas.find(config => config.empresaId === empresaId);
}

export function verificarHorarioFuncionamento(empresaId: string): boolean {
  const config = getConfiguracaoEmpresa(empresaId);
  if (!config || config.pausado) return false;
  
  const agora = new Date();
  const diaSemana = agora.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;
  const horaAtual = `${agora.getHours().toString().padStart(2, '0')}:${agora.getMinutes().toString().padStart(2, '0')}`;
  
  const horarioDoDia = config.horarioFuncionamento.find(h => h.diaSemana === diaSemana);
  
  if (!horarioDoDia || !horarioDoDia.aberto) return false;
  
  return horaAtual >= horarioDoDia.horarioAbertura! && horaAtual <= horarioDoDia.horarioFechamento!;
}

export function calcularTaxaEntrega(empresaId: string, cep: string): number | null {
  // Esta função simula o cálculo da taxa de entrega com base no CEP
  // Em uma implementação real, seria necessário um serviço de geolocalização
  const config = getConfiguracaoEmpresa(empresaId);
  if (!config) return null;
  
  // Se a empresa oferece entrega gratuita
  if (config.taxaEntrega === null) return null;
  
  // Simulação simples baseada no CEP
  // Em uma implementação real, seria calculada a distância real
  const distanciaSimulada = parseInt(cep.substring(0, 3)) % 10;
  
  if (distanciaSimulada > config.raioEntrega) {
    return null; // Fora do raio de entrega
  }
  
  // Taxa base + adicional por km
  return config.taxaEntrega + (distanciaSimulada * 0.5);
}

export function atualizarConfiguracaoEmpresa(empresaId: string, novaConfig: Partial<ConfiguracaoEmpresa>): ConfiguracaoEmpresa | undefined {
  // Esta função simula a atualização das configurações de uma empresa
  const index = configuracoesEmpresas.findIndex(config => config.empresaId === empresaId);
  
  if (index === -1) return undefined;
  
  configuracoesEmpresas[index] = {
    ...configuracoesEmpresas[index],
    ...novaConfig
  };
  
  return configuracoesEmpresas[index];
}

export function getFAQByCategoria(categoria: FAQ['categoria']): FAQ[] {
  return configuracaoSistema.faq.filter(item => item.categoria === categoria);
}