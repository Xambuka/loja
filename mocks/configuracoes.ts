// Interfaces principais do sistema
import { getConfiguracaoEmpresa } from './empresas';

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

// Configuração do sistema - dados mock
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
  politicaPrivacidade: `A Política de Privacidade do LocalMarket descreve como coletamos, usamos e compartilhamos suas informações pessoais. Ao utilizar nossos serviços, você concorda com nossa Política de Privacidade. Coletamos informações para melhorar nossos serviços, fornecer recursos personalizados e garantir a segurança da plataforma. Não compartilhamos suas informações pessoais com terceiros sem seu consentimento, exceto quando exigido por lei. Você pode acessar, corrigir ou excluir suas informações a qualquer momento através das configurações da sua conta.`,
  termosUso: `Ao utilizar o LocalMarket, você concorda com nossos Termos de Uso. Nossos serviços são fornecidos "como estão" e não garantimos que eles serão ininterruptos ou livres de erros. Você é responsável por manter a confidencialidade de sua conta e senha. O LocalMarket não é responsável pelo conteúdo postado pelos usuários ou pela qualidade dos produtos e serviços oferecidos pelos estabelecimentos. Reservamo-nos o direito de modificar ou encerrar o serviço a qualquer momento, com ou sem aviso prévio.`,
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
    }
  ]
};
// Tipos para cadastro e gerenciamento de usuários

export type TipoUsuario = 'cliente' | 'empresa' | 'administrador';

export interface UsuarioBase {
  id: string;
  nome: string;
  email: string;
  senhaHash: string;
  telefone?: string;
  tipo: TipoUsuario;
  criadoEm: Date;
  atualizadoEm?: Date;
  status: 'ativo' | 'inativo' | 'suspenso';
}

export interface UsuarioCliente extends UsuarioBase {
  tipo: 'cliente';
  cpf: string;
  enderecoEntrega?: Endereco;
  dataNascimento?: Date;
}

export interface UsuarioEmpresa extends UsuarioBase {
  tipo: 'empresa';
  cnpj: string;
  razaoSocial: string;
  enderecoComercial: Endereco;
  categorias: Categoria[];
  horarioFuncionamento: HorarioFuncionamento[];
  descricao?: string;
  site?: string;
  redesSociais?: RedesSociais;
  fotoPerfilUrl?: string;
  fotoCapaUrl?: string;
  certificados?: CertificadoEmpresa[];
}

export interface UsuarioAdministrador extends UsuarioBase {
  tipo: 'administrador';
  nivelAcesso: 'super' | 'normal' | 'restrito';
  permissoes: Permissao[];
}

export interface Permissao {
  nome: string;
  descricao?: string;
}

// Endereço básico utilizado em vários cadastros
export interface Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais?: string;
  latitude?: number;
  longitude?: number;
}

// Categoria para produtos e empresas
export interface Categoria {
  id: string;
  nome: string;
  descricao?: string;
  iconeUrl?: string;
  ativo: boolean;
}

// Horário de funcionamento da empresa
export interface HorarioFuncionamento {
  diaSemana: number; // 0 - Domingo ... 6 - Sábado
  abertura: string;  // Formato "HH:mm"
  fechamento: string; // Formato "HH:mm"
  intervaloInicio?: string;  // Formato "HH:mm"
  intervaloFim?: string;     // Formato "HH:mm"
}

// Certificados emitidos para empresas
export interface CertificadoEmpresa {
  id: string;
  nome: string;
  descricao?: string;
  dataEmissao: Date;
  dataValidade?: Date;
  arquivoUrl?: string;
}

// Anúncios publicados por empresas
export interface Anuncio {
  id: string;
  empresaId: string;
  titulo: string;
  descricao: string;
  precoOriginal: number;
  precoPromocional?: number;
  validadeInicio: Date;
  validadeFim: Date;
  ativo: boolean;
  categorias: Categoria[];
  imagens: string[];
  destacado: boolean;
  visualizacoes: number;
  criadoEm: Date;
  atualizadoEm?: Date;
  estoqueDisponivel: number;
}

// Pedido feito pelo cliente
export interface Pedido {
  id: string;
  clienteId: string;
  empresaId: string;
  itens: ItemPedido[];
  total: number;
  status: 'pendente' | 'confirmado' | 'enviado' | 'entregue' | 'cancelado' | 'devolvido';
  dataPedido: Date;
  dataEntregaPrevista?: Date;
  dataEntregaReal?: Date;
  enderecoEntrega: Endereco;
  metodoPagamento: MetodoPagamento;
  notaFiscalUrl?: string;
  avaliacaoPedido?: AvaliacaoPedido;
  historicoStatus: StatusPedidoHistorico[];
}

export interface ItemPedido {
  id: string;
  anuncioId: string;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
  observacoes?: string;
}

export interface MetodoPagamento {
  tipo: 'cartao' | 'boleto' | 'pix' | 'dinheiro' | 'outro';
  detalhes?: any; // Pode detalhar com objeto específico conforme tipo
}

export interface AvaliacaoPedido {
  nota: number; // 1 a 5
  comentario?: string;
  dataAvaliacao: Date;
  usuarioId: string;
}

export interface StatusPedidoHistorico {
  status: Pedido['status'];
  dataAlteracao: Date;
  responsavelId?: string;
}

// Histórico financeiro da empresa
export interface HistoricoFinanceiro {
  id: string;
  empresaId: string;
  tipoMovimentacao: 'entrada' | 'saida';
  descricao: string;
  valor: number;
  dataMovimentacao: Date;
  categoriaFinanceira?: string;
  comprovanteUrl?: string;
}

// Sistema de avaliação para anúncios e empresas
export interface Avaliacao {
  id: string;
  usuarioId: string;
  empresaId?: string;
  anuncioId?: string;
  nota: number; // 1 a 5
  comentario?: string;
  dataAvaliacao: Date;
}

// Mensagens entre usuários (chat interno)
export interface MensagemChat {
  id: string;
  remetenteId: string;
  destinatarioId: string;
  empresaId?: string; // Se mensagem for para suporte ou empresa
  texto: string;
  dataEnvio: Date;
  lida: boolean;
  anexos?: Anexo[];
}

export interface Anexo {
  id: string;
  nomeArquivo: string;
  url: string;
  tipoMime: string;
  tamanhoBytes: number;
}

// Notificações para usuário ou empresa
export interface Notificacao {
  id: string;
  usuarioId?: string;
  empresaId?: string;
  titulo: string;
  mensagem: string;
  link?: string;
  dataCriacao: Date;
  lida: boolean;
  tipo: 'info' | 'alerta' | 'promocao' | 'sistema';
}

// Chamados e tickets de suporte
export interface TicketSuporte {
  id: string;
  usuarioId: string;
  empresaId?: string;
  assunto: string;
  descricao: string;
  status: 'aberto' | 'em_progresso' | 'resolvido' | 'fechado';
  prioridade: 'baixa' | 'media' | 'alta' | 'urgente';
  dataCriacao: Date;
  dataAtualizacao?: Date;
  mensagens: MensagemChat[];
  responsavelId?: string;
}

export function verificarHorarioFuncionamento(empresaId: string): boolean {
  const config = getConfiguracaoEmpresa(empresaId);
  if (!config || config.pausado) return false;

  const agora = new Date();
  const diaSemana = agora.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;
  const horaAtual = `${agora.getHours().toString().padStart(2, '0')}:${agora.getMinutes().toString().padStart(2, '0')}`;

  const horarioDoDia = config.horarioFuncionamento.find(h => h.diaSemana === diaSemana);
  if (!horarioDoDia || !horarioDoDia.aberto) return false;

  if (
    horaAtual < horarioDoDia.horarioAbertura! ||
    horaAtual > horarioDoDia.horarioFechamento!
  ) {
    return false;
  }

  // Verifica intervalo, se definido
  if (
    horarioDoDia.intervaloInicio &&
    horarioDoDia.intervaloFim &&
    horaAtual >= horarioDoDia.intervaloInicio &&
    horaAtual <= horarioDoDia.intervaloFim
  ) {
    return false; // Está no intervalo de pausa
  }

  return true;
}

export type TaxaEntregaResult = {
  valor: number | null;
  motivo: 'gratuita' | 'fora_raio' | 'calculada' | 'empresa_nao_encontrada';
}

export function calcularTaxaEntrega(empresaId: string, cep: string): TaxaEntregaResult {
  const config = getConfiguracaoEmpresa(empresaId);
  if (!config) return { valor: null, motivo: 'empresa_nao_encontrada' };

  if (config.taxaEntrega === null) {
    return { valor: 0, motivo: 'gratuita' };
  }

  const distanciaSimulada = parseInt(cep.substring(0, 3)) % 10;
  if (distanciaSimulada > config.raioEntrega) {
    return { valor: null, motivo: 'fora_raio' };
  }

  // Por simplicidade, vamos supor que a taxa é fixa para qualquer distância dentro do raio
  return { valor: config.taxaEntrega, motivo: 'calculada' };
}

export function obterMensagemManutencao(config: ConfiguracaoSistema): string | null {
  if (config.manutencao && config.mensagemManutencao) {
    return config.mensagemManutencao;
  }
  return null;
}
