import Image from 'next/image';
import Link from 'next/link';
import { Categoria } from '../mocks/categorias';

interface CategoriaCardProps {
  categoria: Categoria;
}

export default function CategoriaCard({ categoria }: CategoriaCardProps) {
  return (
    <Link href={`/categorias/${categoria.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative h-40 w-full">
          <Image 
            src={categoria.imagem || '/images/placeholder-categoria.jpg'} 
            alt={categoria.nome}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-4 w-full">
              <h3 className="text-white text-xl font-bold">{categoria.nome}</h3>
              <p className="text-gray-200 text-sm mt-1">{categoria.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}