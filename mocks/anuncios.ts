export interface TipoAnuncio {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  duracao: number; // em dias
  posicao: 'topo' | 'destaque' | 'banner' | 'categoria' | 'busca';
  disponivel: boolean;
}

export interface Anuncio {
  id: string;
  empresaId: string;
  tipoAnuncioId: string;
  titulo: string;
  descricao?: string;
  imagem?: string;
  url?: string;
  dataInicio: string;
  dataFim: string;
  status: 'ativo' | 'pendente' | 'expirado' | 'cancelado';
  visualizacoes: number;
  cliques: number;
}

export const tiposAnuncios: TipoAnuncio[] = [
  {
    id: 'tipo1',
    nome: 'Destaque na Página Inicial',
    descricao: 'Sua empresa aparece em destaque na página inicial do marketplace',
    preco: 99.90,
    duracao: 30,
    posicao: 'destaque',
    disponivel: true
  },
  {
    id: 'tipo2',
    nome: 'Topo da Lista',
    descricao: 'Sua empresa aparece no topo da lista de resultados',
    preco: 79.90,
    duracao: 30,
    posicao: 'topo',
    disponivel: true
  },
  {
    id: 'tipo3',
    nome: 'Banner Rotativo',
    descricao: 'Banner rotativo na página inicial e páginas internas',
    preco: 149.90,
    duracao: 15,
    posicao: 'banner',
    disponivel: true
  },
  {
    id: 'tipo4',
    nome: 'Destaque na Categoria',
    descricao: 'Sua empresa aparece em destaque na página da categoria',
    preco: 59.90,
    duracao: 30,
    posicao: 'categoria',
    disponivel: true
  },
  {
    id: 'tipo5',
    nome: 'Destaque na Busca',
    descricao: 'Sua empresa aparece em destaque nos resultados de busca',
    preco: 69.90,
    duracao: 30,
    posicao: 'busca',
    disponivel: true
  }
];

export const anuncios: Anuncio[] = [
  {
    id: 'anuncio1',
    empresaId: '1',
    tipoAnuncioId: 'tipo1',
    titulo: 'Experimente nossa feijoada aos sábados!',
    descricao: 'A melhor feijoada da cidade com ingredientes selecionados',
    imagem: 'https://images.unsplash.com/photo-1564671546498-aa134e5e159a?w=800&h=400&fit=crop&auto=format',
    dataInicio: '2023-05-01',
    dataFim: '2023-05-31',
    status: 'ativo',
    visualizacoes: 1250,
    cliques: 320
  },
  {
    id: 'anuncio2',
    empresaId: '2',
    tipoAnuncioId: 'tipo2',
    titulo: 'Pizzas com 20% de desconto às terças!',
    descricao: 'Todas as pizzas tradicionais com desconto especial',
    imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop&auto=format',
    dataInicio: '2023-05-10',
    dataFim: '2023-06-10',
    status: 'ativo',
    visualizacoes: 980,
    cliques: 210
  },
  {
    id: 'anuncio3',
    empresaId: '4',
    tipoAnuncioId: 'tipo3',
    titulo: 'Produtos orgânicos com entrega grátis',
    descricao: 'Compre produtos orgânicos e receba em casa sem taxa de entrega',
    imagem: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop&auto=format',
    dataInicio: '2023-04-15',
    dataFim: '2023-04-30',
    status: 'expirado',
    visualizacoes: 1500,
    cliques: 350
  },
  {
    id: 'anuncio4',
    empresaId: '5',
    tipoAnuncioId: 'tipo4',
    titulo: 'Novo hambúrguer premium com blend especial',
    descricao: 'Experimente nossa nova criação com ingredientes importados',
    imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop&auto=format',
    dataInicio: '2023-05-20',
    dataFim: '2023-06-20',
    status: 'ativo',
    visualizacoes: 750,
    cliques: 180
  },
  {
    id: 'anuncio5',
    empresaId: '3',
    tipoAnuncioId: 'tipo5',
    titulo: 'Café da manhã completo por apenas R$24,90',
    descricao: 'Café, suco, pão na chapa, ovos e frutas',
    imagem: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop&auto=format',
    dataInicio: '2023-05-15',
    dataFim: '2023-06-15',
    status: 'ativo',
    visualizacoes: 620,
    cliques: 145
  }
];

function parseDate(dateStr: string): Date {
  return new Date(`${dateStr}T00:00:00`);
}

export function getAnunciosAtivos(): Anuncio[] {
  const hoje = new Date();

  return anuncios.filter(anuncio => {
    const inicio = parseDate(anuncio.dataInicio);
    const fim = parseDate(anuncio.dataFim);
    return (
      anuncio.status === 'ativo' &&
      inicio <= hoje &&
      fim >= hoje
    );
  });
}

export function getAnunciosByTipo(tipoId: string): Anuncio[] {
  return getAnunciosAtivos().filter(anuncio => anuncio.tipoAnuncioId === tipoId);
}

export function getAnunciosByEmpresa(empresaId: string): Anuncio[] {
  return anuncios.filter(anuncio => anuncio.empresaId === empresaId);
}

export function getTipoAnuncioById(id: string): TipoAnuncio | undefined {
  return tiposAnuncios.find(tipo => tipo.id === id);
}
