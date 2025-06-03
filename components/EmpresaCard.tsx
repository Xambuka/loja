import Image from 'next/image';
import Link from 'next/link';
import { Empresa } from '../mocks/empresas';
import { getMediaAvaliacoesEmpresa } from '../mocks/avaliacoes';
import { verificarHorarioFuncionamento } from '../mocks/configuracoes';
import { categorias } from '../mocks/categorias';

interface EmpresaCardProps {
  empresa: Empresa;
  destacado?: boolean;
}

export default function EmpresaCard({ empresa, destacado = false }: EmpresaCardProps) {
  const mediaAvaliacoes = getMediaAvaliacoesEmpresa(empresa.id);
  const aberto = verificarHorarioFuncionamento(empresa.id);

  return (
    <Link href={`/empresa/${empresa.slug}`}>
      <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${destacado ? 'ring-2 ring-primary' : ''}`}>
        <div className="relative h-48 w-full">
          <Image 
            src={empresa.imagem || 'public/images/placeholder-empresa.jpg'} 
            alt={empresa.nome}
            fill
            className="object-cover"
          />
          {destacado && (
            <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md text-xs font-semibold">
              Destaque
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white text-xl font-bold truncate">{empresa.nome}</h3>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-gray-700">{mediaAvaliacoes.toFixed(1)}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${aberto ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {aberto ? 'Aberto' : 'Fechado'}
            </span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{empresa.endereco.bairro}, {empresa.endereco.cidade}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="truncate">
              {categorias.find(cat => cat.id === empresa.categoriaId)?.nome || 'Categoria não encontrada'}
            </span>
          </div>
          
          {empresa.tempoEntrega && (
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{empresa.tempoEntrega} min</span>
              </div>
              
              {empresa.taxaEntrega !== undefined && (
                <div className="text-gray-500">
                  {empresa.taxaEntrega === 0 ? (
                    <span className="text-green-600 font-medium">Entrega grátis</span>
                  ) : (
                    <span>Entrega: R$ {empresa.taxaEntrega.toFixed(2)}</span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}