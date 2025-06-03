export interface Avaliacao {
  id: string;
  usuarioId: string;
  empresaId: string;
  produtoId?: string; // Opcional, caso seja avaliação apenas da empresa
  pedidoId?: string; // Opcional, referência ao pedido que gerou a avaliação
  nota: number; // 1 a 5
  comentario?: string;
  data: string;
  resposta?: RespostaAvaliacao;
  fotos?: string[];
}

export interface RespostaAvaliacao {
  usuarioId: string; // ID do administrador da empresa que respondeu
  texto: string;
  data: string;
}

// Dados mock para avaliações
export const avaliacoes: Avaliacao[] = [
  {
    id: 'aval001',
    usuarioId: 'user1',
    empresaId: '1', // Restaurante Sabor Caseiro
    produtoId: 'prod001', // Feijoada Completa
    pedidoId: 'ped001',
    nota: 5,
    comentario: 'A melhor feijoada que já comi! Ingredientes frescos e muito bem temperada. Entrega rápida e comida chegou quente.',
    data: '2023-05-11T10:30:00Z',
    resposta: {
      usuarioId: 'admin1',
      texto: 'Muito obrigado pela avaliação! Ficamos felizes que tenha gostado da nossa feijoada. Esperamos atendê-lo novamente em breve!',
      data: '2023-05-11T14:15:00Z'
    },
    fotos: [
      'https://images.unsplash.com/photo-1564671546498-aa134e5e159a?w=400&h=300&fit=crop&auto=format'
    ]
  },
  {
    id: 'aval002',
    usuarioId: 'user2',
    empresaId: '2', // Pizzaria Bella Napoli
    produtoId: 'prod101', // Pizza Margherita
    pedidoId: 'ped002',
    nota: 4,
    comentario: 'Pizza muito boa, massa fina e crocante como gosto. Só não dou 5 estrelas porque demorou um pouco mais que o previsto para entregar.',
    data: '2023-05-16T20:45:00Z',
    fotos: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format'
    ]
  },
  {
    id: 'aval003',
    usuarioId: 'user3',
    empresaId: '5', // Hamburgueria Artesanal
    produtoId: 'prod201', // Hambúrguer Clássico
    pedidoId: 'ped003',
    nota: 3,
    comentario: 'O hambúrguer estava bom, mas o pão estava um pouco seco. A batata frita estava ótima!',
    data: '2023-05-19T13:20:00Z',
    resposta: {
      usuarioId: 'admin5',
      texto: 'Agradecemos seu feedback! Vamos verificar o que aconteceu com o pão do seu hambúrguer. Sua opinião é muito importante para melhorarmos nosso serviço.',
      data: '2023-05-19T15:10:00Z'
    }
  },
  {
    id: 'aval004',
    usuarioId: 'user1',
    empresaId: '3', // Café Aroma
    produtoId: 'prod301', // Café da Manhã Completo
    nota: 5,
    comentario: 'Excelente café da manhã! Tudo muito fresco e saboroso. O café é realmente especial.',
    data: '2023-05-21T09:15:00Z',
    fotos: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format'
    ]
  },
  {
    id: 'aval005',
    usuarioId: 'user4',
    empresaId: '4', // Mercado Fresco
    nota: 4,
    comentario: 'Ótimos produtos, frescos e de qualidade. A entrega foi rápida e os produtos bem embalados. Só acho a taxa de entrega um pouco alta.',
    data: '2023-05-20T16:30:00Z',
    pedidoId: 'ped005'
  },
  {
    id: 'aval006',
    usuarioId: 'user5',
    empresaId: '1', // Restaurante Sabor Caseiro
    nota: 2,
    comentario: 'Comida boa, mas demorou muito para entregar e chegou fria. Fiquei desapontado.',
    data: '2023-05-18T19:45:00Z',
    resposta: {
      usuarioId: 'admin1',
      texto: 'Lamentamos muito pelo ocorrido. Gostaríamos de compensá-lo na próxima compra. Por favor, entre em contato conosco pelo chat para resolvermos essa situação.',
      data: '2023-05-18T20:30:00Z'
    }
  },
  {
    id: 'aval007',
    usuarioId: 'user2',
    empresaId: '5', // Hamburgueria Artesanal
    produtoId: 'prod202', // Hambúrguer Vegetariano
    nota: 5,
    comentario: 'Melhor hambúrguer vegetariano que já comi! Muito saboroso e bem apresentado.',
    data: '2023-05-17T21:10:00Z',
    fotos: [
      'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&h=300&fit=crop&auto=format'
    ]
  },
  {
    id: 'aval008',
    usuarioId: 'user3',
    empresaId: '2', // Pizzaria Bella Napoli
    produtoId: 'prod102', // Pizza Pepperoni
    nota: 5,
    comentario: 'Pizza perfeita! Muito bem recheada e a massa no ponto certo. Recomendo!',
    data: '2023-05-14T20:20:00Z',
    resposta: {
      usuarioId: 'admin2',
      texto: 'Muito obrigado pela avaliação! Estamos sempre buscando oferecer o melhor para nossos clientes.',
      data: '2023-05-15T10:05:00Z'
    }
  },
  {
    id: 'aval009',
    usuarioId: 'user4',
    empresaId: '3', // Café Aroma
    produtoId: 'prod302', // Sanduíche Natural
    nota: 3,
    comentario: 'O sanduíche estava bom, mas achei pequeno para o preço cobrado.',
    data: '2023-05-12T12:40:00Z'
  },
  {
    id: 'aval010',
    usuarioId: 'user5',
    empresaId: '4', // Mercado Fresco
    produtoId: 'prod401', // Cesta de Frutas
    nota: 4,
    comentario: 'Frutas frescas e saborosas. Recomendo!',
    data: '2023-05-13T14:50:00Z',
    fotos: [
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop&auto=format'
    ]
  }
];

// Funções para manipular os dados
export function getAvaliacoesByEmpresa(empresaId: string): Avaliacao[] {
  return avaliacoes.filter(avaliacao => avaliacao.empresaId === empresaId);
}

export function getAvaliacoesByProduto(produtoId: string): Avaliacao[] {
  return avaliacoes.filter(avaliacao => avaliacao.produtoId === produtoId);
}

export function getAvaliacoesByUsuario(usuarioId: string): Avaliacao[] {
  return avaliacoes.filter(avaliacao => avaliacao.usuarioId === usuarioId);
}

export function getMediaAvaliacoesEmpresa(empresaId: string): number {
  const avaliacoesEmpresa = getAvaliacoesByEmpresa(empresaId);
  if (avaliacoesEmpresa.length === 0) return 0;
  
  const somaNotas = avaliacoesEmpresa.reduce((soma, avaliacao) => soma + avaliacao.nota, 0);
  return parseFloat((somaNotas / avaliacoesEmpresa.length).toFixed(1));
}

export function getMediaAvaliacoesProduto(produtoId: string): number {
  const avaliacoesProduto = getAvaliacoesByProduto(produtoId);
  if (avaliacoesProduto.length === 0) return 0;
  
  const somaNotas = avaliacoesProduto.reduce((soma, avaliacao) => soma + avaliacao.nota, 0);
  return parseFloat((somaNotas / avaliacoesProduto.length).toFixed(1));
}

export function getDistribuicaoAvaliacoes(empresaId: string): Record<number, number> {
  const avaliacoesEmpresa = getAvaliacoesByEmpresa(empresaId);
  const distribuicao: Record<number, number> = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  
  avaliacoesEmpresa.forEach(avaliacao => {
    distribuicao[avaliacao.nota]++;
  });
  
  return distribuicao;
}

export function adicionarAvaliacao(avaliacao: Omit<Avaliacao, 'id' | 'data'>): Avaliacao {
  // Esta função simula a adição de uma nova avaliação
  const novaAvaliacao: Avaliacao = {
    ...avaliacao,
    id: `aval${Date.now()}`,
    data: new Date().toISOString()
  };
  
  avaliacoes.push(novaAvaliacao);
  return novaAvaliacao;
}

export function responderAvaliacao(avaliacaoId: string, usuarioId: string, texto: string): Avaliacao | undefined {
  // Esta função simula a adição de uma resposta a uma avaliação existente
  const avaliacao = avaliacoes.find(a => a.id === avaliacaoId);
  
  if (!avaliacao) return undefined;
  
  avaliacao.resposta = {
    usuarioId,
    texto,
    data: new Date().toISOString()
  };
  
  return avaliacao;
}