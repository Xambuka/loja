export interface Categoria {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  slug: string;
}

export const categorias: Categoria[] = [
  {
    id: '1',
    nome: 'Restaurantes',
    descricao: 'Estabelecimentos com serviço completo de refeições',
    icone: 'restaurant',
    slug: 'restaurantes'
  },
  {
    id: '2',
    nome: 'Lanchonetes',
    descricao: 'Fast-food e lanches rápidos',
    icone: 'fastfood',
    slug: 'lanchonetes'
  },
  {
    id: '3',
    nome: 'Pizzarias',
    descricao: 'Especialistas em pizzas',
    icone: 'local_pizza',
    slug: 'pizzarias'
  },
  {
    id: '4',
    nome: 'Cafeterias',
    descricao: 'Cafés especiais e lanches leves',
    icone: 'coffee',
    slug: 'cafeterias'
  },
  {
    id: '5',
    nome: 'Mercados',
    descricao: 'Mercados e minimercados',
    icone: 'shopping_cart',
    slug: 'mercados'
  },
  {
    id: '6',
    nome: 'Docerias',
    descricao: 'Sobremesas e doces artesanais',
    icone: 'cake',
    slug: 'docerias'
  },
  {
    id: '7',
    nome: 'Padarias',
    descricao: 'Pães e produtos de panificação',
    icone: 'bakery_dining',
    slug: 'padarias'
  },
  {
    id: '8',
    nome: 'Açaí',
    descricao: 'Especialistas em açaí e sorvetes',
    icone: 'icecream',
    slug: 'acai'
  },
];