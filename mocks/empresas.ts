import { categorias } from './categorias';

export interface Empresa {
  id: string;
  nome: string;
  descricao: string;
  logo: string;
  capa: string;
  telefone: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  categoriaId: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  status: 'ativo' | 'inativo';
  plano: 'gratuito' | 'basico' | 'premium';
  horarioFuncionamento: {
    segunda?: string[];
    terca?: string[];
    quarta?: string[];
    quinta?: string[];
    sexta?: string[];
    sabado?: string[];
    domingo?: string[];
  };
  aberto: boolean;
  destaque: boolean;
  slug: string;
  imagem?: string;
  tempoEntrega?: string; // ✅ Adicionado
  taxaEntrega?: number; // Exemplo: 5.99 para R$ 5,99, ou 0 para grátis
  raioEntrega?: number; // Em quilômetros, ex.: 5 para 5 km
}

export const empresas: Empresa[] = [
  {
    id: '1',
    nome: 'Restaurante Sabor Caseiro',
    descricao: 'Comida caseira com sabor de mãe. Pratos executivos e à la carte com ingredientes frescos e selecionados.',
    logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=128&h=128&fit=crop&auto=format',
    capa: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=400&fit=crop&auto=format',
    telefone: '(11) 3456-7890',
    whatsapp: '(11) 98765-4321',
    instagram: '@saborCaseiro',
    categoriaId: '1',
    endereco: {
      rua: 'Rua das Flores',
      numero: '123',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567'
    },
    status: 'ativo',
    plano: 'premium',
    horarioFuncionamento: {
      segunda: ['09:00 - 12:00', '13:00 - 18:00'],
      terca: ['09:00 - 18:00'],
      quarta: ['09:00 - 12:00', '13:00 - 18:00'],
      quinta: ['09:00 - 18:00'],
      sexta: ['09:00 - 18:00'],
      sabado: ['10:00 - 14:00'],
      domingo: [],
    },
    aberto: true,
    destaque: true,
    slug: 'restaurante-sabor-caseiro',
    tempoEntrega: '30-40 min',
	raioEntrega: 5 // 5 km
  },
  {
    id: '2',
    nome: 'Pizzaria Bella Napoli',
    descricao: 'Pizzas artesanais com massa fermentada naturalmente e ingredientes importados da Itália.',
    logo: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=128&h=128&fit=crop&auto=format',
    capa: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=400&fit=crop&auto=format',
    telefone: '(11) 2345-6789',
    whatsapp: '(11) 98765-4322',
    instagram: '@bellaNapoli',
    categoriaId: '3',
    endereco: {
      rua: 'Avenida Paulista',
      numero: '1500',
      bairro: 'Bela Vista',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01310-200'
    },
    status: 'ativo',
    plano: 'basico',
    horarioFuncionamento: {
      segunda: [],
      terca: ['18:00 - 23:00'],
      quarta: ['18:00 - 23:00'],
      quinta: ['18:00 - 23:00'],
      sexta: ['18:00 - 00:00'],
      sabado: ['18:00 - 00:00'],
      domingo: ['18:00 - 23:00'],
    },
    aberto: true,
    destaque: false,
    slug: 'pizzaria-bella-napoli',
    tempoEntrega: '25-35 min'
  },
  {
    id: '3',
    nome: 'Café Aroma',
    descricao: 'Cafeteria especializada em grãos selecionados. Ambiente aconchegante para trabalhar e relaxar.',
    logo: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=128&h=128&fit=crop&auto=format',
    capa: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=400&fit=crop&auto=format',
    telefone: '(11) 3456-7891',
    instagram: '@cafeAroma',
    categoriaId: '4',
    endereco: {
      rua: 'Rua Augusta',
      numero: '789',
      bairro: 'Consolação',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01305-000'
    },
    status: 'ativo',
    plano: 'gratuito',
    horarioFuncionamento: {
      segunda: ['08:00 - 20:00'],
      terca: ['08:00 - 20:00'],
      quarta: ['08:00 - 20:00'],
      quinta: ['08:00 - 20:00'],
      sexta: ['08:00 - 20:00'],
      sabado: ['09:00 - 19:00'],
      domingo: ['09:00 - 18:00'],
    },
    aberto: true,
    destaque: false,
    slug: 'cafe-aroma',
    tempoEntrega: '15-20 min'
  },
  {
    id: '4',
    nome: 'Mercado Fresco',
    descricao: 'Minimercado com produtos orgânicos, naturais e sem conservantes. Entregas rápidas.',
    logo: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=128&h=128&fit=crop&auto=format',
    capa: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=400&fit=crop&auto=format',
    telefone: '(11) 3456-7892',
    whatsapp: '(11) 98765-4323',
    categoriaId: '5',
    endereco: {
      rua: 'Rua Oscar Freire',
      numero: '1000',
      bairro: 'Jardins',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01426-001'
    },
    status: 'ativo',
    plano: 'premium',
    horarioFuncionamento: {
      segunda: ['08:00 - 22:00'],
      terca: ['08:00 - 22:00'],
      quarta: ['08:00 - 22:00'],
      quinta: ['08:00 - 22:00'],
      sexta: ['08:00 - 22:00'],
      sabado: ['08:00 - 22:00'],
      domingo: ['08:00 - 20:00'],
    },
    aberto: true,
    destaque: true,
    slug: 'mercado-fresco',
    tempoEntrega: '40-60 min'
  },
  {
    id: '5',
    nome: 'Hamburgueria Artesanal',
    descricao: 'Hambúrgueres artesanais com blend exclusivo e ingredientes selecionados. Ambiente descontraído.',
    logo: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=128&h=128&fit=crop&auto=format',
    capa: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&h=400&fit=crop&auto=format',
    telefone: '(11) 3456-7893',
    whatsapp: '(11) 98765-4324',
    instagram: '@hamburgueriaArtesanal',
    facebook: 'hamburgueriaArtesanal',
    categoriaId: '2',
    endereco: {
      rua: 'Rua dos Pinheiros',
      numero: '500',
      bairro: 'Pinheiros',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '05422-000'
    },
    status: 'ativo',
    plano: 'basico',
    horarioFuncionamento: {
      segunda: [],
      terca: ['18:00 - 23:00'],
      quarta: ['18:00 - 23:00'],
      quinta: ['18:00 - 23:00'],
      sexta: ['18:00 - 00:00'],
      sabado: ['18:00 - 00:00'],
      domingo: ['18:00 - 23:00'],
    },
    aberto: false,
    destaque: false,
    slug: 'hamburgueria-artesanal',
    tempoEntrega: '20-30 min'
  },
  {
    id: '6',
    nome: 'Doceria Doce Sabor',
    descricao: 'Doces artesanais, bolos personalizados e sobremesas para festas e eventos.',
    logo: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=128&h=128&fit=crop&auto=format',
    capa: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&h=400&fit=crop&auto=format',
    telefone: '(11) 3456-7894',
    whatsapp: '(11) 98765-4325',
    instagram: '@doceSabor',
    categoriaId: '6',
    endereco: {
      rua: 'Rua Fradique Coutinho',
      numero: '300',
      bairro: 'Vila Madalena',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '05416-000'
    },
    status: 'ativo',
    plano: 'gratuito',
    horarioFuncionamento: {
      segunda: ['10:00 - 19:00'],
      terca: ['10:00 - 19:00'],
      quarta: ['10:00 - 19:00'],
      quinta: ['10:00 - 19:00'],
      sexta: ['10:00 - 19:00'],
      sabado: ['10:00 - 19:00'],
      domingo: [],
    },
    aberto: true,
    destaque: false,
    slug: 'doceria-doce-sabor',
    tempoEntrega: '15-25 min'
  }
];

type DiasDaSemana = 'domingo' | 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta' | 'sabado';

interface Empresa {
  // outras propriedades...
  horarioFuncionamento: {
    [dia in DiasDaSemana]?: string[]; // array de intervalos tipo '09:00 - 12:00'
  };
  // ...
}

export function verificarHorarioFuncionamento(empresaId: string): boolean {
  const config = getConfiguracaoEmpresa(empresaId);
  if (!config) return false;

  const agora = new Date();
  const diaSemana = agora.getDay(); // 0 = domingo, 1 = segunda, etc.
  const diasDaSemana: DiasDaSemana[] = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
  const diaNome = diasDaSemana[diaSemana];

  const horariosDoDia = config.horarioFuncionamento[diaNome];
  if (!horariosDoDia || horariosDoDia.length === 0) return false;

  const horaAtual = `${agora.getHours().toString().padStart(2, '0')}:${agora.getMinutes().toString().padStart(2, '0')}`;

  const abertoAgora = horariosDoDia.some(intervalo => {
    const partes = intervalo.split(' - ');
    if (partes.length !== 2) return false; // ignora intervalo inválido

    const [inicio, fim] = partes;
    return horaAtual >= inicio && horaAtual <= fim;
  });

  return abertoAgora;
}

/**
 * Retorna os dados de configuração de uma empresa pelo ID.
 */
export function getConfiguracaoEmpresa(empresaId: string): Empresa | undefined {
  return empresas.find(e => e.id === empresaId);
}

/**
 * Lista empresas de uma determinada categoria, ativas.
 * Lista empresas com destaque, ativas.
 */
export function getEmpresasFiltradas({
  categoriaId,
  destaque
}: {
  categoriaId?: string;
  destaque?: boolean;
} = {}): Empresa[] {
  return empresas.filter(empresa => {
    const ativa = empresa.status === 'ativo';
    const mesmaCategoria = categoriaId ? empresa.categoriaId === categoriaId : true;
    const ehDestaque = destaque !== undefined ? empresa.destaque === destaque : true;
    return ativa && mesmaCategoria && ehDestaque;
  });
}

/**
 * Retorna os dados de uma empresa a partir do slug.
 */
export function getEmpresaBySlug(slug: string): Empresa | undefined {
  return empresas.find(
    empresa => empresa.slug === slug && empresa.status === 'ativo'
  );
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
