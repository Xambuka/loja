export interface Produto {
  id: string;
  empresaId: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoriaId: string;
  destaque: boolean;
  disponivel: boolean;
}

export interface CategoriaProduto {
  id: string;
  empresaId: string;
  nome: string;
  descricao: string;
}

export const categoriasProdutos: CategoriaProduto[] = [
  {
    id: 'cat1',
    empresaId: '1', // Restaurante Sabor Caseiro
    nome: 'Pratos Executivos',
    descricao: 'Pratos completos com entrada, prato principal e sobremesa'
  },
  {
    id: 'cat2',
    empresaId: '1', // Restaurante Sabor Caseiro
    nome: 'Pratos Principais',
    descricao: 'Pratos principais para compartilhar'
  },
  {
    id: 'cat3',
    empresaId: '1', // Restaurante Sabor Caseiro
    nome: 'Sobremesas',
    descricao: 'Doces e sobremesas caseiras'
  },
  {
    id: 'cat4',
    empresaId: '2', // Pizzaria Bella Napoli
    nome: 'Pizzas Tradicionais',
    descricao: 'Pizzas com sabores clássicos'
  },
  {
    id: 'cat5',
    empresaId: '2', // Pizzaria Bella Napoli
    nome: 'Pizzas Especiais',
    descricao: 'Pizzas com ingredientes premium'
  },
  {
    id: 'cat6',
    empresaId: '2', // Pizzaria Bella Napoli
    nome: 'Bebidas',
    descricao: 'Refrigerantes, sucos e bebidas alcoólicas'
  },
  {
    id: 'cat7',
    empresaId: '3', // Café Aroma
    nome: 'Cafés Especiais',
    descricao: 'Cafés com grãos selecionados'
  },
  {
    id: 'cat8',
    empresaId: '3', // Café Aroma
    nome: 'Salgados',
    descricao: 'Salgados frescos e assados na hora'
  },
  {
    id: 'cat9',
    empresaId: '3', // Café Aroma
    nome: 'Doces',
    descricao: 'Bolos, tortas e doces'
  },
  {
    id: 'cat10',
    empresaId: '5', // Hamburgueria Artesanal
    nome: 'Hambúrgueres',
    descricao: 'Hambúrgueres artesanais'
  },
  {
    id: 'cat11',
    empresaId: '5', // Hamburgueria Artesanal
    nome: 'Acompanhamentos',
    descricao: 'Batatas fritas, onion rings e outros acompanhamentos'
  },
  {
    id: 'cat12',
    empresaId: '5', // Hamburgueria Artesanal
    nome: 'Bebidas',
    descricao: 'Refrigerantes, sucos e milk-shakes'
  },
  {
    id: 'cat13',
    empresaId: '6', // Doceria Doce Sabor
    nome: 'Bolos',
    descricao: 'Bolos inteiros e fatias'
  },
  {
    id: 'cat14',
    empresaId: '6', // Doceria Doce Sabor
    nome: 'Doces para Festas',
    descricao: 'Doces para eventos e festas'
  },
];

export const produtos: Produto[] = [
  // Restaurante Sabor Caseiro
  {
    id: 'p1',
    empresaId: '1',
    nome: 'Executivo Filé Mignon',
    descricao: 'Filé mignon grelhado, arroz, feijão, batata frita e salada',
    preco: 39.90,
    imagem: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat1',
    destaque: true,
    disponivel: true
  },
  {
    id: 'p2',
    empresaId: '1',
    nome: 'Executivo Frango Grelhado',
    descricao: 'Peito de frango grelhado, arroz, feijão, purê de batata e salada',
    preco: 29.90,
    imagem: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat1',
    destaque: false,
    disponivel: true
  },
  {
    id: 'p3',
    empresaId: '1',
    nome: 'Feijoada Completa',
    descricao: 'Feijoada tradicional com arroz, couve, farofa, laranja e torresmo',
    preco: 45.90,
    imagem: 'https://images.unsplash.com/photo-1564671546498-aa134e5e159a?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat2',
    destaque: true,
    disponivel: true
  },
  {
    id: 'p4',
    empresaId: '1',
    nome: 'Pudim de Leite',
    descricao: 'Pudim de leite condensado com calda de caramelo',
    preco: 12.90,
    imagem: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat3',
    destaque: false,
    disponivel: true
  },

  // Pizzaria Bella Napoli
  {
    id: 'p5',
    empresaId: '2',
    nome: 'Pizza Margherita',
    descricao: 'Molho de tomate, mussarela, tomate e manjericão',
    preco: 49.90,
    imagem: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat4',
    destaque: true,
    disponivel: true
  },
  {
    id: 'p6',
    empresaId: '2',
    nome: 'Pizza Calabresa',
    descricao: 'Molho de tomate, mussarela e calabresa',
    preco: 52.90,
    imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat4',
    destaque: false,
    disponivel: true
  },
  {
    id: 'p7',
    empresaId: '2',
    nome: 'Pizza Especial da Casa',
    descricao: 'Molho de tomate, mussarela, presunto, champignon, palmito e azeitonas',
    preco: 62.90,
    imagem: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat5',
    destaque: true,
    disponivel: true
  },

  // Café Aroma
  {
    id: 'p8',
    empresaId: '3',
    nome: 'Café Espresso',
    descricao: 'Café espresso tradicional',
    preco: 6.90,
    imagem: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat7',
    destaque: true,
    disponivel: true
  },
  {
    id: 'p9',
    empresaId: '3',
    nome: 'Cappuccino',
    descricao: 'Café espresso, leite vaporizado e espuma de leite',
    preco: 9.90,
    imagem: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat7',
    destaque: false,
    disponivel: true
  },
  {
    id: 'p10',
    empresaId: '3',
    nome: 'Croissant',
    descricao: 'Croissant tradicional francês',
    preco: 8.90,
    imagem: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat8',
    destaque: true,
    disponivel: true
  },

  // Hamburgueria Artesanal
  {
    id: 'p11',
    empresaId: '5',
    nome: 'Hambúrguer Clássico',
    descricao: 'Hambúrguer 180g, queijo cheddar, alface, tomate e molho especial',
    preco: 28.90,
    imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat10',
    destaque: true,
    disponivel: true
  },
  {
    id: 'p12',
    empresaId: '5',
    nome: 'Hambúrguer Especial',
    descricao: 'Hambúrguer 200g, queijo gorgonzola, bacon, cebola caramelizada e molho barbecue',
    preco: 34.90,
    imagem: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat10',
    destaque: true,
    disponivel: true
  },
  {
    id: 'p13',
    empresaId: '5',
    nome: 'Batata Frita',
    descricao: 'Porção de batata frita crocante',
    preco: 15.90,
    imagem: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat11',
    destaque: false,
    disponivel: true
  },

  // Doceria Doce Sabor
  {
    id: 'p14',
    empresaId: '6',
    nome: 'Bolo de Chocolate',
    descricao: 'Bolo de chocolate com cobertura de ganache',
    preco: 45.90,
    imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat13',
    destaque: true,
    disponivel: true
  },
  {
    id: 'p15',
    empresaId: '6',
    nome: 'Brigadeiros Gourmet',
    descricao: 'Caixa com 12 brigadeiros gourmet sortidos',
    preco: 36.90,
    imagem: 'https://images.unsplash.com/photo-1589375890993-7b568c0b8b1c?w=500&h=300&fit=crop&auto=format',
    categoriaId: 'cat14',
    destaque: true,
    disponivel: true
  },
];

export function getProdutosByEmpresa(empresaId: string): Produto[] {
  return produtos.filter(produto => produto.empresaId === empresaId && produto.disponivel);
}

export function getProdutosByCategoria(categoriaId: string): Produto[] {
  return produtos.filter(produto => produto.categoriaId === categoriaId && produto.disponivel);
}

export function getProdutosDestaque(empresaId: string): Produto[] {
  return produtos.filter(produto => produto.empresaId === empresaId && produto.destaque && produto.disponivel);
}

export function getCategoriasProdutosByEmpresa(empresaId: string): CategoriaProduto[] {
  return categoriasProdutos.filter(categoria => categoria.empresaId === empresaId);
}