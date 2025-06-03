export interface Usuario {
  id: string;
  nome: string;
  email: string;
  tipo: 'cliente' | 'empresa' | 'admin';
  empresaId?: string; // Para usuários do tipo 'empresa'
  telefone?: string;
  foto?: string;
  dataCadastro: string;
  status: 'ativo' | 'inativo';
}

export interface Cliente extends Usuario {
  tipo: 'cliente';
  endereco?: {
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  empresasFavoritas: string[];
  pedidos: string[];
}

export interface EmpresaAdmin extends Usuario {
  tipo: 'empresa';
  empresaId: string;
  cargo: string;
  permissoes: {
    gerenciarProdutos: boolean;
    gerenciarFuncionarios: boolean;
    visualizarRelatorios: boolean;
    gerenciarConfiguracoes: boolean;
  };
}

export interface Admin extends Usuario {
  tipo: 'admin';
  permissoes: {
    gerenciarEmpresas: boolean;
    gerenciarUsuarios: boolean;
    gerenciarPlanos: boolean;
    gerenciarConfiguracoes: boolean;
    visualizarRelatorios: boolean;
  };
}

export const usuarios: (Cliente | EmpresaAdmin | Admin)[] = [
  // Clientes
  {
    id: 'u1',
    nome: 'João Silva',
    email: 'joao.silva@exemplo.com',
    tipo: 'cliente',
    telefone: '(11) 98765-4321',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format',
    dataCadastro: '2023-01-15',
    status: 'ativo',
    endereco: {
      rua: 'Rua das Flores',
      numero: '123',
      bairro: 'Jardim Primavera',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567'
    },
    empresasFavoritas: ['1', '2'], // IDs das empresas favoritas
    pedidos: ['ped1', 'ped2'] // IDs dos pedidos
  },
  {
    id: 'u2',
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@exemplo.com',
    tipo: 'cliente',
    telefone: '(11) 98765-4322',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format',
    dataCadastro: '2023-02-20',
    status: 'ativo',
    endereco: {
      rua: 'Avenida Paulista',
      numero: '1000',
      complemento: 'Apto 123',
      bairro: 'Bela Vista',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01310-100'
    },
    empresasFavoritas: ['3', '5'], // IDs das empresas favoritas
    pedidos: ['ped3', 'ped4'] // IDs dos pedidos
  },

  // Administradores de Empresas
  {
    id: 'u3',
    nome: 'Carlos Restaurante',
    email: 'carlos@saborCaseiro.com',
    tipo: 'empresa',
    empresaId: '1', // Restaurante Sabor Caseiro
    cargo: 'Proprietário',
    telefone: '(11) 98765-4323',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format',
    dataCadastro: '2022-12-10',
    status: 'ativo',
    permissoes: {
      gerenciarProdutos: true,
      gerenciarFuncionarios: true,
      visualizarRelatorios: true,
      gerenciarConfiguracoes: true
    }
  },
  {
    id: 'u4',
    nome: 'Ana Pizzaria',
    email: 'ana@bellaNapoli.com',
    tipo: 'empresa',
    empresaId: '2', // Pizzaria Bella Napoli
    cargo: 'Gerente',
    telefone: '(11) 98765-4324',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&auto=format',
    dataCadastro: '2023-01-05',
    status: 'ativo',
    permissoes: {
      gerenciarProdutos: true,
      gerenciarFuncionarios: false,
      visualizarRelatorios: true,
      gerenciarConfiguracoes: false
    }
  },

  // Administradores do Sistema
  {
    id: 'u5',
    nome: 'Admin Sistema',
    email: 'admin@marketplace.com',
    tipo: 'admin',
    telefone: '(11) 98765-4325',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&auto=format',
    dataCadastro: '2022-10-01',
    status: 'ativo',
    permissoes: {
      gerenciarEmpresas: true,
      gerenciarUsuarios: true,
      gerenciarPlanos: true,
      gerenciarConfiguracoes: true,
      visualizarRelatorios: true
    }
  }
];

export function getUsuarioById(id: string): Usuario | undefined {
  return usuarios.find(usuario => usuario.id === id);
}

export function getClienteById(id: string): Cliente | undefined {
  return usuarios.find(usuario => usuario.id === id && usuario.tipo === 'cliente') as Cliente | undefined;
}

export function getEmpresaAdminByEmpresaId(empresaId: string): EmpresaAdmin[] {
  return usuarios.filter(usuario => 
    usuario.tipo === 'empresa' && 
    (usuario as EmpresaAdmin).empresaId === empresaId
  ) as EmpresaAdmin[];
}

export function getAdmins(): Admin[] {
  return usuarios.filter(usuario => usuario.tipo === 'admin') as Admin[];
}