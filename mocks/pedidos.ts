import { Produto } from './produtos';

export interface ItemPedido {
  id: string;
  produtoId: string;
  quantidade: number;
  precoUnitario: number;
  observacoes?: string;
}

export interface Pedido {
  id: string;
  usuarioId: string;
  empresaId: string;
  itens: ItemPedido[];
  valorTotal: number;
  taxaEntrega: number;
  status: 'pendente' | 'confirmado' | 'em_preparo' | 'saiu_para_entrega' | 'entregue' | 'cancelado';
  formaPagamento: 'dinheiro' | 'cartao_credito' | 'cartao_debito' | 'pix' | 'vale_refeicao';
  enderecoEntrega?: EnderecoEntrega;
  dataCriacao: string;
  dataAtualizacao: string;
  tempoEstimadoEntrega?: number; // em minutos
  codigoRastreio?: string;
}

export interface EnderecoEntrega {
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  pontoReferencia?: string;
}

export interface Carrinho {
  usuarioId: string;
  empresaId: string;
  itens: ItemPedido[];
  valorTotal: number;
  observacoes?: string;
}

// Dados mock para pedidos
export const pedidos: Pedido[] = [
  {
    id: 'ped001',
    usuarioId: 'user1',
    empresaId: '1', // Restaurante Sabor Caseiro
    itens: [
      {
        id: 'item001',
        produtoId: 'prod001',
        quantidade: 2,
        precoUnitario: 25.90,
        observacoes: 'Sem cebola, por favor'
      },
      {
        id: 'item002',
        produtoId: 'prod003',
        quantidade: 1,
        precoUnitario: 8.50
      }
    ],
    valorTotal: 60.30,
    taxaEntrega: 5.00,
    status: 'entregue',
    formaPagamento: 'cartao_credito',
    enderecoEntrega: {
      rua: 'Rua das Flores',
      numero: '123',
      complemento: 'Apto 101',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567',
      pontoReferencia: 'Próximo à padaria'
    },
    dataCriacao: '2023-05-10T14:30:00Z',
    dataAtualizacao: '2023-05-10T15:45:00Z',
    tempoEstimadoEntrega: 45,
    codigoRastreio: 'RC123456789'
  },
  {
    id: 'ped002',
    usuarioId: 'user1',
    empresaId: '2', // Pizzaria Bella Napoli
    itens: [
      {
        id: 'item003',
        produtoId: 'prod101',
        quantidade: 1,
        precoUnitario: 49.90
      },
      {
        id: 'item004',
        produtoId: 'prod103',
        quantidade: 2,
        precoUnitario: 7.90
      }
    ],
    valorTotal: 65.70,
    taxaEntrega: 0.00, // Entrega grátis
    status: 'confirmado',
    formaPagamento: 'pix',
    enderecoEntrega: {
      rua: 'Rua das Flores',
      numero: '123',
      complemento: 'Apto 101',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567'
    },
    dataCriacao: '2023-05-15T19:20:00Z',
    dataAtualizacao: '2023-05-15T19:25:00Z',
    tempoEstimadoEntrega: 60
  },
  {
    id: 'ped003',
    usuarioId: 'user2',
    empresaId: '5', // Hamburgueria Artesanal
    itens: [
      {
        id: 'item005',
        produtoId: 'prod201',
        quantidade: 3,
        precoUnitario: 32.90,
        observacoes: 'Ponto da carne: bem passado'
      },
      {
        id: 'item006',
        produtoId: 'prod204',
        quantidade: 3,
        precoUnitario: 12.90
      },
      {
        id: 'item007',
        produtoId: 'prod205',
        quantidade: 1,
        precoUnitario: 9.90
      }
    ],
    valorTotal: 147.30,
    taxaEntrega: 8.00,
    status: 'em_preparo',
    formaPagamento: 'vale_refeicao',
    enderecoEntrega: {
      rua: 'Avenida Paulista',
      numero: '1500',
      complemento: 'Sala 203',
      bairro: 'Bela Vista',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01310-200',
      pontoReferencia: 'Edifício comercial com fachada de vidro'
    },
    dataCriacao: '2023-05-18T12:10:00Z',
    dataAtualizacao: '2023-05-18T12:20:00Z',
    tempoEstimadoEntrega: 40
  },
  {
    id: 'ped004',
    usuarioId: 'user3',
    empresaId: '3', // Café Aroma
    itens: [
      {
        id: 'item008',
        produtoId: 'prod301',
        quantidade: 2,
        precoUnitario: 24.90
      }
    ],
    valorTotal: 49.80,
    taxaEntrega: 0.00, // Retirada no local
    status: 'pendente',
    formaPagamento: 'dinheiro',
    dataCriacao: '2023-05-20T08:30:00Z',
    dataAtualizacao: '2023-05-20T08:30:00Z'
  },
  {
    id: 'ped005',
    usuarioId: 'user1',
    empresaId: '4', // Mercado Fresco
    itens: [
      {
        id: 'item009',
        produtoId: 'prod401',
        quantidade: 1,
        precoUnitario: 15.90
      },
      {
        id: 'item010',
        produtoId: 'prod402',
        quantidade: 2,
        precoUnitario: 8.50
      },
      {
        id: 'item011',
        produtoId: 'prod405',
        quantidade: 1,
        precoUnitario: 22.90
      }
    ],
    valorTotal: 55.80,
    taxaEntrega: 12.00,
    status: 'saiu_para_entrega',
    formaPagamento: 'cartao_debito',
    enderecoEntrega: {
      rua: 'Rua das Flores',
      numero: '123',
      complemento: 'Apto 101',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567'
    },
    dataCriacao: '2023-05-19T10:15:00Z',
    dataAtualizacao: '2023-05-19T11:30:00Z',
    tempoEstimadoEntrega: 30,
    codigoRastreio: 'MF987654321'
  }
];

// Dados mock para carrinhos ativos
export const carrinhos: Carrinho[] = [
  {
    usuarioId: 'user1',
    empresaId: '5', // Hamburgueria Artesanal
    itens: [
      {
        id: 'temp001',
        produtoId: 'prod201',
        quantidade: 1,
        precoUnitario: 32.90
      },
      {
        id: 'temp002',
        produtoId: 'prod203',
        quantidade: 1,
        precoUnitario: 15.90
      }
    ],
    valorTotal: 48.80,
    observacoes: 'Entregar o mais rápido possível'
  },
  {
    usuarioId: 'user2',
    empresaId: '2', // Pizzaria Bella Napoli
    itens: [
      {
        id: 'temp003',
        produtoId: 'prod102',
        quantidade: 1,
        precoUnitario: 45.90
      }
    ],
    valorTotal: 45.90
  }
];

// Funções para manipular os dados
export function getPedidosByUsuario(usuarioId: string): Pedido[] {
  return pedidos.filter(pedido => pedido.usuarioId === usuarioId);
}

export function getPedidosByEmpresa(empresaId: string): Pedido[] {
  return pedidos.filter(pedido => pedido.empresaId === empresaId);
}

export function getPedidoById(id: string): Pedido | undefined {
  return pedidos.find(pedido => pedido.id === id);
}

export function getCarrinhoByUsuario(usuarioId: string): Carrinho | undefined {
  return carrinhos.find(carrinho => carrinho.usuarioId === usuarioId);
}

export function adicionarItemAoCarrinho(usuarioId: string, empresaId: string, produtoId: string, quantidade: number, precoUnitario: number, observacoes?: string): Carrinho {
  // Esta função simula a adição de um item ao carrinho
  // Em uma implementação real, isso seria persistido em um banco de dados
  
  let carrinho = carrinhos.find(c => c.usuarioId === usuarioId);
  
  // Se o carrinho não existir ou for de outra empresa, cria um novo
  if (!carrinho || carrinho.empresaId !== empresaId) {
    carrinho = {
      usuarioId,
      empresaId,
      itens: [],
      valorTotal: 0
    };
    carrinhos.push(carrinho);
  }
  
  // Verifica se o item já existe no carrinho
  const itemExistente = carrinho.itens.find(item => item.produtoId === produtoId);
  
  if (itemExistente) {
    // Atualiza a quantidade do item existente
    itemExistente.quantidade += quantidade;
  } else {
    // Adiciona um novo item ao carrinho
    const novoItem: ItemPedido = {
      id: `temp${Date.now()}`,
      produtoId,
      quantidade,
      precoUnitario,
      observacoes
    };
    carrinho.itens.push(novoItem);
  }
  
  // Recalcula o valor total do carrinho
  carrinho.valorTotal = carrinho.itens.reduce(
    (total, item) => total + (item.quantidade * item.precoUnitario),
    0
  );
  
  return carrinho;
}

export function removerItemDoCarrinho(usuarioId: string, itemId: string): Carrinho | undefined {
  // Esta função simula a remoção de um item do carrinho
  const carrinho = carrinhos.find(c => c.usuarioId === usuarioId);
  
  if (!carrinho) return undefined;
  
  // Remove o item do carrinho
  carrinho.itens = carrinho.itens.filter(item => item.id !== itemId);
  
  // Recalcula o valor total do carrinho
  carrinho.valorTotal = carrinho.itens.reduce(
    (total, item) => total + (item.quantidade * item.precoUnitario),
    0
  );
  
  // Se o carrinho ficou vazio, remove-o da lista
  if (carrinho.itens.length === 0) {
    const index = carrinhos.findIndex(c => c.usuarioId === usuarioId);
    if (index !== -1) {
      carrinhos.splice(index, 1);
      return undefined;
    }
  }
  
  return carrinho;
}

export function finalizarPedido(usuarioId: string, formaPagamento: Pedido['formaPagamento'], enderecoEntrega?: EnderecoEntrega): Pedido | undefined {
  // Esta função simula a finalização de um pedido a partir do carrinho
  const carrinho = carrinhos.find(c => c.usuarioId === usuarioId);
  
  if (!carrinho || carrinho.itens.length === 0) return undefined;
  
  // Cria um novo pedido a partir do carrinho
  const novoPedido: Pedido = {
    id: `ped${Date.now()}`,
    usuarioId,
    empresaId: carrinho.empresaId,
    itens: [...carrinho.itens],
    valorTotal: carrinho.valorTotal,
    taxaEntrega: 5.00, // Valor fixo para simplificar
    status: 'pendente',
    formaPagamento,
    enderecoEntrega,
    dataCriacao: new Date().toISOString(),
    dataAtualizacao: new Date().toISOString(),
    tempoEstimadoEntrega: 45 // Valor padrão
  };
  
  // Adiciona o pedido à lista de pedidos
  pedidos.push(novoPedido);
  
  // Remove o carrinho da lista
  const index = carrinhos.findIndex(c => c.usuarioId === usuarioId);
  if (index !== -1) {
    carrinhos.splice(index, 1);
  }
  
  return novoPedido;
}