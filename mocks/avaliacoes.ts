// Tipagens
export interface Avaliacao {
  id: string;
  usuarioId: string;
  empresaId: string;
  produtoId?: string; // Opcional, caso seja avaliação apenas da empresa
  pedidoId?: string;   // Opcional, referência ao pedido que gerou a avaliação
  nota: 1 | 2 | 3 | 4 | 5; // Restrito a 1-5
  comentario?: string;
  data: string;
  resposta?: RespostaAvaliacao;
  fotos?: string[];
}

export interface RespostaAvaliacao {
  usuarioId: string; // ID do administrador que respondeu
  texto: string;
  data: string;
}

// Dados mock
export const avaliacoes: Avaliacao[] = [
  {
    id: 'aval001',
    usuarioId: 'user1',
    empresaId: '1',
    produtoId: 'prod001',
    pedidoId: 'ped001',
    nota: 5,
    comentario: 'A melhor feijoada que já comi!',
    data: '2023-05-11T10:30:00Z',
    resposta: {
      usuarioId: 'admin1',
      texto: 'Muito obrigado pela avaliação!',
      data: '2023-05-11T14:15:00Z'
    },
    fotos: [
      'https://images.unsplash.com/photo-1564671546498-aa134e5e159a?w=400&h=300&fit=crop&auto=format'
    ]
  },
  {
    id: 'aval002',
    usuarioId: 'user2',
    empresaId: '2',
    produtoId: 'prod101',
    pedidoId: 'ped002',
    nota: 4,
    comentario: 'Pizza muito boa, só demorou um pouco.',
    data: '2023-05-16T20:45:00Z',
    fotos: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format'
    ]
  },
  {
    id: 'aval003',
    usuarioId: 'user3',
    empresaId: '5',
    produtoId: 'prod201',
    pedidoId: 'ped003',
    nota: 3,
    comentario: 'Hambúrguer bom, pão seco.',
    data: '2023-05-19T13:20:00Z',
    resposta: {
      usuarioId: 'admin5',
      texto: 'Agradecemos seu feedback!',
      data: '2023-05-19T15:10:00Z'
    }
  },
  {
    id: 'aval004',
    usuarioId: 'user1',
    empresaId: '3',
    produtoId: 'prod301',
    nota: 5,
    comentario: 'Excelente café da manhã!',
    data: '2023-05-21T09:15:00Z',
    fotos: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format'
    ]
  },
  {
    id: 'aval005',
    usuarioId: 'user4',
    empresaId: '4',
    nota: 4,
    comentario: 'Ótimos produtos, mas taxa alta.',
    data: '2023-05-20T16:30:00Z',
    pedidoId: 'ped005'
  },
  {
    id: 'aval006',
    usuarioId: 'user5',
    empresaId: '1',
    nota: 2,
    comentario: 'Comida boa, mas chegou fria.',
    data: '2023-05-18T19:45:00Z',
    resposta: {
      usuarioId: 'admin1',
      texto: 'Lamentamos, entre em contato.',
      data: '2023-05-18T20:30:00Z'
    }
  },
  {
    id: 'aval007',
    usuarioId: 'user2',
    empresaId: '5',
    produtoId: 'prod202',
    nota: 5,
    comentario: 'Melhor hambúrguer vegetariano!',
    data: '2023-05-17T21:10:00Z',
    fotos: [
      'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&h=300&fit=crop&auto=format'
    ]
  },
  {
    id: 'aval008',
    usuarioId: 'user3',
    empresaId: '2',
    produtoId: 'prod102',
    nota: 5,
    comentario: 'Pizza perfeita!',
    data: '2023-05-14T20:20:00Z',
    resposta: {
      usuarioId: 'admin2',
      texto: 'Obrigado pela avaliação!',
      data: '2023-05-15T10:05:00Z'
    }
  },
  {
    id: 'aval009',
    usuarioId: 'user4',
    empresaId: '3',
    produtoId: 'prod302',
    nota: 3,
    comentario: 'Sanduíche bom, mas pequeno.',
    data: '2023-05-12T12:40:00Z'
  },
  {
    id: 'aval010',
    usuarioId: 'user5',
    empresaId: '4',
    produtoId: 'prod401',
    nota: 4,
    comentario: 'Frutas frescas e saborosas.',
    data: '2023-05-13T14:50:00Z',
    fotos: [
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop&auto=format'
    ]
  }
];


// 🔍 Funções de busca
export function getAvaliacoesByEmpresa(empresaId: string): Avaliacao[] {
  return avaliacoes.filter(avaliacao => avaliacao.empresaId === empresaId);
}

export function getAvaliacoesByProduto(produtoId: string): Avaliacao[] {
  return avaliacoes.filter(avaliacao => avaliacao.produtoId === produtoId);
}

export function getAvaliacoesByUsuario(usuarioId: string): Avaliacao[] {
  return avaliacoes.filter(avaliacao => avaliacao.usuarioId === usuarioId);
}


// 📊 Cálculo de média
export function getMediaAvaliacoesEmpresa(empresaId: string): number {
  const avaliacoesEmpresa = getAvaliacoesByEmpresa(empresaId);
  if (avaliacoesEmpresa.length === 0) return 0;

  const somaNotas = avaliacoesEmpresa.reduce((acc, a) => acc + a.nota, 0);
  return parseFloat((somaNotas / avaliacoesEmpresa.length).toFixed(1));
}

export function getMediaAvaliacoesProduto(produtoId: string): number {
  const avaliacoesProduto = getAvaliacoesByProduto(produtoId);
  if (avaliacoesProduto.length === 0) return 0;

  const somaNotas = avaliacoesProduto.reduce((acc, a) => acc + a.nota, 0);
  return parseFloat((somaNotas / avaliacoesProduto.length).toFixed(1));
}


// 📈 Distribuição de notas
export function getDistribuicaoAvaliacoes(empresaId: string): Record<1 | 2 | 3 | 4 | 5, number> {
  const avaliacoesEmpresa = getAvaliacoesByEmpresa(empresaId);

  const distribuicao: Record<1 | 2 | 3 | 4 | 5, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };

  avaliacoesEmpresa.forEach(avaliacao => {
    distribuicao[avaliacao.nota]++;
  });

  return distribuicao;
}


// ➕ Adicionar avaliação
export function adicionarAvaliacao(avaliacao: Omit<Avaliacao, 'id' | 'data'>): Avaliacao {
  const novaAvaliacao: Avaliacao = {
    ...avaliacao,
    id: `aval${Date.now()}`,
    data: new Date().toISOString()
  };

  avaliacoes.push(novaAvaliacao);
  return novaAvaliacao;
}


// 💬 Responder avaliação
export function responderAvaliacao(
  avaliacaoId: string,
  usuarioId: string,
  texto: string
): Avaliacao | undefined {
  const avaliacao = avaliacoes.find(a => a.id === avaliacaoId);
  if (!avaliacao) return undefined;

  avaliacao.resposta = {
    usuarioId,
    texto,
    data: new Date().toISOString()
  };

  return avaliacao;
}
