export interface Plano {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  periodo: 'mensal' | 'trimestral' | 'anual';
  recursos: {
    maxProdutos: number;
    maxCategorias: number;
    destacarProdutos: boolean;
    destacarEmpresa: boolean;
    estatisticasAvancadas: boolean;
    suportePrioritario: boolean;
    personalizado: boolean;
  };
  popular: boolean;
}

export const planos: Plano[] = [
  {
    id: 'plano1',
    nome: 'Gratuito',
    descricao: 'Plano básico para começar a divulgar seu negócio',
    preco: 0,
    periodo: 'mensal',
    recursos: {
      maxProdutos: 10,
      maxCategorias: 3,
      destacarProdutos: false,
      destacarEmpresa: false,
      estatisticasAvancadas: false,
      suportePrioritario: false,
      personalizado: false
    },
    popular: false
  },
  {
    id: 'plano2',
    nome: 'Básico',
    descricao: 'Ideal para pequenos negócios que querem crescer',
    preco: 49.90,
    periodo: 'mensal',
    recursos: {
      maxProdutos: 50,
      maxCategorias: 10,
      destacarProdutos: true,
      destacarEmpresa: false,
      estatisticasAvancadas: true,
      suportePrioritario: false,
      personalizado: false
    },
    popular: true
  },
  {
    id: 'plano3',
    nome: 'Premium',
    descricao: 'Para negócios que querem se destacar na plataforma',
    preco: 99.90,
    periodo: 'mensal',
    recursos: {
      maxProdutos: 200,
      maxCategorias: 20,
      destacarProdutos: true,
      destacarEmpresa: true,
      estatisticasAvancadas: true,
      suportePrioritario: true,
      personalizado: false
    },
    popular: false
  },
  {
    id: 'plano4',
    nome: 'Empresarial',
    descricao: 'Solução completa para grandes estabelecimentos',
    preco: 199.90,
    periodo: 'mensal',
    recursos: {
      maxProdutos: -1, // Ilimitado
      maxCategorias: -1, // Ilimitado
      destacarProdutos: true,
      destacarEmpresa: true,
      estatisticasAvancadas: true,
      suportePrioritario: true,
      personalizado: true
    },
    popular: false
  }
];

export const planosTrimestrais: Plano[] = [
  {
    id: 'plano5',
    nome: 'Básico Trimestral',
    descricao: 'Plano básico com desconto trimestral',
    preco: 134.70, // 10% de desconto
    periodo: 'trimestral',
    recursos: {
      maxProdutos: 50,
      maxCategorias: 10,
      destacarProdutos: true,
      destacarEmpresa: false,
      estatisticasAvancadas: true,
      suportePrioritario: false,
      personalizado: false
    },
    popular: false
  },
  {
    id: 'plano6',
    nome: 'Premium Trimestral',
    descricao: 'Plano premium com desconto trimestral',
    preco: 269.70, // 10% de desconto
    periodo: 'trimestral',
    recursos: {
      maxProdutos: 200,
      maxCategorias: 20,
      destacarProdutos: true,
      destacarEmpresa: true,
      estatisticasAvancadas: true,
      suportePrioritario: true,
      personalizado: false
    },
    popular: false
  }
];

export const planosAnuais: Plano[] = [
  {
    id: 'plano7',
    nome: 'Básico Anual',
    descricao: 'Plano básico com desconto anual',
    preco: 478.80, // 20% de desconto
    periodo: 'anual',
    recursos: {
      maxProdutos: 50,
      maxCategorias: 10,
      destacarProdutos: true,
      destacarEmpresa: false,
      estatisticasAvancadas: true,
      suportePrioritario: false,
      personalizado: false
    },
    popular: false
  },
  {
    id: 'plano8',
    nome: 'Premium Anual',
    descricao: 'Plano premium com desconto anual',
    preco: 959.00, // 20% de desconto
    periodo: 'anual',
    recursos: {
      maxProdutos: 200,
      maxCategorias: 20,
      destacarProdutos: true,
      destacarEmpresa: true,
      estatisticasAvancadas: true,
      suportePrioritario: true,
      personalizado: false
    },
    popular: true
  }
];

export function getTodosPlanos(): Plano[] {
  return [...planos, ...planosTrimestrais, ...planosAnuais];
}

export function getPlanoById(id: string): Plano | undefined {
  return getTodosPlanos().find(plano => plano.id === id);
}

export function getPlanosPorPeriodo(periodo: 'mensal' | 'trimestral' | 'anual'): Plano[] {
  return getTodosPlanos().filter(plano => plano.periodo === periodo);
}