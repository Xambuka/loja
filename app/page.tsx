import Link from 'next/link';
import HeroBanner from '../components/HeroBanner';
import CategoriaCard from '../components/CategoriaCard';
import EmpresaCard from '../components/EmpresaCard';
import ProdutoCard from '../components/ProdutoCard';
import { categorias } from '../mocks/categorias';
import { getEmpresasDestaque } from '../mocks/empresas';
import { getProdutosDestaque } from '../mocks/produtos';
import { getAnunciosAtivos, getAnunciosByTipo } from '../mocks/anuncios';

export default function Home() {
  const categoriasDestaque = categorias.slice(0, 4);
  const empresasDestaque = getEmpresasDestaque();
  const produtosDestaque = getProdutosDestaque("1"); // Usa id fixo "1" que existe no mock
//const produtosDestaque = getProdutosDestaque();
  const anunciosDestaque = getAnunciosByTipo('tipo1');

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="mb-12">
        <HeroBanner />
      </section>

      {/* Categorias */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Categorias</h2>
          <Link href="/categorias" className="text-primary hover:text-primary-dark transition-colors">
            Ver todas
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoriasDestaque.map((categoria) => (
            <CategoriaCard key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </section>

      {/* Empresas em Destaque */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Empresas em Destaque</h2>
          <Link href="/empresas" className="text-primary hover:text-primary-dark transition-colors">
            Ver todas
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {empresasDestaque.map((empresa) => (
            <EmpresaCard key={empresa.id} empresa={empresa} destacado={true} />
          ))}
        </div>
      </section>

      {/* Banner de Anúncio */}
      {anunciosDestaque.length > 0 && (
        <section className="container mx-auto px-4 mb-12">
          <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
            <img 
              src={anunciosDestaque[0].imagem || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=300&fit=crop&auto=format'} 
              alt={anunciosDestaque[0].titulo}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-6 md:p-10 max-w-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{anunciosDestaque[0].titulo}</h3>
                <p className="text-white/90 mb-4">{anunciosDestaque[0].descricao}</p>
                <Link 
                  href={`/empresa/${anunciosDestaque[0].empresaId}`}
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block"
                >
                  Conhecer
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Produtos em Destaque */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Produtos em Destaque</h2>
          <Link href="/produtos" className="text-primary hover:text-primary-dark transition-colors">
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtosDestaque.map((produto) => (
            <Link key={produto.id} href={`/empresa/${produto.empresaId}/produto/${produto.id}`}>
              <ProdutoCard produto={produto} destacado={true} />
            </Link>
          ))}
        </div>
      </section>

      {/* Chamada para Ação - Cadastro de Empresas */}
      <section className="bg-gray-100 py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tem um estabelecimento?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Cadastre sua empresa no LocalMarket e alcance mais clientes. Oferecemos planos para todos os tamanhos de negócio, com ferramentas para impulsionar suas vendas.
            </p>
            <Link 
              href="/empresa/cadastro"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Cadastrar minha empresa
            </Link>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Encontre</h3>
            <p className="text-gray-600">
              Descubra os melhores estabelecimentos locais, filtrando por categoria, localização ou avaliações.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Escolha</h3>
            <p className="text-gray-600">
              Navegue pelo cardápio ou catálogo de produtos, adicione itens ao carrinho e personalize seu pedido.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Aproveite</h3>
            <p className="text-gray-600">
              Receba seu pedido no conforto da sua casa ou retire no local. Avalie sua experiência e ajude outros usuários.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}