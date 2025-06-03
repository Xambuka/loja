import Image from 'next/image';
import { Produto } from '../mocks/produtos';
import { getMediaAvaliacoesProduto } from '../mocks/avaliacoes';

interface ProdutoCardProps {
  produto: Produto;
  onAddToCart?: (produto: Produto, quantidade: number) => void;
  destacado?: boolean;
}

export default function ProdutoCard({ produto, onAddToCart, destacado = false }: ProdutoCardProps) {
  const mediaAvaliacoes = getMediaAvaliacoesProduto(produto.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(produto, 1);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg ${destacado ? 'ring-2 ring-primary' : ''}`}>
      <div className="relative h-48 w-full">
        <Image 
          src={produto.imagem || '/images/placeholder-produto.jpg'} 
          alt={produto.nome}
          fill
          className="object-cover"
        />
        {produto.promocao && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            {produto.percentualDesconto ? `${produto.percentualDesconto}% OFF` : 'Promoção'}
          </div>
        )}
        {destacado && (
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md text-xs font-semibold">
            Destaque
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{produto.nome}</h3>
        
        <p className="text-gray-600 text-sm mb-2 line-clamp-2 h-10">
          {produto.descricao}
        </p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm text-gray-700">{mediaAvaliacoes.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            {produto.promocao ? (
              <div className="flex flex-col">
                <span className="text-gray-500 line-through text-sm">R$ {produto.preco.toFixed(2)}</span>
                <span className="text-primary font-bold">R$ {(produto.preco * (1 - (produto.percentualDesconto || 0) / 100)).toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-primary font-bold">R$ {produto.preco.toFixed(2)}</span>
            )}
          </div>
          
          {onAddToCart && (
            <button 
              onClick={handleAddToCart}
              className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition-colors"
              aria-label="Adicionar ao carrinho"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}