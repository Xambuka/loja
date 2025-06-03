'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">LocalMarket</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/categorias" 
            className={`text-gray-700 hover:text-primary transition-colors ${pathname === '/categorias' ? 'font-semibold text-primary' : ''}`}
          >
            Categorias
          </Link>
          <Link 
            href="/empresas" 
            className={`text-gray-700 hover:text-primary transition-colors ${pathname === '/empresas' ? 'font-semibold text-primary' : ''}`}
          >
            Empresas
          </Link>
          <Link 
            href="/sobre" 
            className={`text-gray-700 hover:text-primary transition-colors ${pathname === '/sobre' ? 'font-semibold text-primary' : ''}`}
          >
            Sobre
          </Link>
          <Link 
            href="/contato" 
            className={`text-gray-700 hover:text-primary transition-colors ${pathname === '/contato' ? 'font-semibold text-primary' : ''}`}
          >
            Contato
          </Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button 
              onClick={toggleUserMenu}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Minha Conta</span>
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link 
                  href="/perfil" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Meu Perfil
                </Link>
                <Link 
                  href="/pedidos" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Meus Pedidos
                </Link>
                <Link 
                  href="/favoritos" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Favoritos
                </Link>
                <Link 
                  href="/empresa/dashboard" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Área da Empresa
                </Link>
                <Link 
                  href="/admin" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Área Administrativa
                </Link>
                <div className="border-t border-gray-100"></div>
                <Link 
                  href="/login" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Entrar
                </Link>
                <Link 
                  href="/cadastro" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Cadastrar
                </Link>
              </div>
            )}
          </div>

          <Link href="/carrinho" className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Carrinho</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link 
              href="/categorias" 
              className={`px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${pathname === '/categorias' ? 'font-semibold text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
            <Link 
              href="/empresas" 
              className={`px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${pathname === '/empresas' ? 'font-semibold text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Empresas
            </Link>
            <Link 
              href="/sobre" 
              className={`px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${pathname === '/sobre' ? 'font-semibold text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href="/contato" 
              className={`px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${pathname === '/contato' ? 'font-semibold text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="border-t border-gray-100 my-2"></div>
            <Link 
              href="/perfil" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Meu Perfil</span>
            </Link>
            <Link 
              href="/pedidos" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Meus Pedidos</span>
            </Link>
            <Link 
              href="/favoritos" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Favoritos</span>
            </Link>
            <Link 
              href="/carrinho" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Carrinho</span>
            </Link>
            <Link 
              href="/empresa/dashboard" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Área da Empresa</span>
            </Link>
            <Link 
              href="/admin" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Área Administrativa</span>
            </Link>
            <div className="border-t border-gray-100 my-2"></div>
            <Link 
              href="/login" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </Link>
            <Link 
              href="/cadastro" 
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Cadastrar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}