import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marketplace de Restaurantes',
  description: 'Plataforma de marketplace para restaurantes e serviços locais',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <header className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold">Marketplace</a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-sm font-medium hover:text-primary-600">Início</a>
              <a href="/categorias" className="text-sm font-medium hover:text-primary-600">Categorias</a>
              <a href="/empresas" className="text-sm font-medium hover:text-primary-600">Empresas</a>
              <a href="/perfil" className="text-sm font-medium hover:text-primary-600">Perfil</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/busca" className="text-sm font-medium hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </a>
              <a href="/perfil" className="text-sm font-medium hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t bg-white py-6">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <p className="text-lg font-bold">Marketplace</p>
                <p className="mt-4 text-sm text-gray-600">Plataforma de marketplace para restaurantes e serviços locais.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2">
                <div>
                  <p className="font-medium">Sobre</p>
                  <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-600">
                    <a href="/sobre" className="hover:text-primary-600">Quem Somos</a>
                    <a href="/termos" className="hover:text-primary-600">Termos de Uso</a>
                    <a href="/privacidade" className="hover:text-primary-600">Política de Privacidade</a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">Contato</p>
                  <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-600">
                    <a href="/contato" className="hover:text-primary-600">Fale Conosco</a>
                    <a href="/ajuda" className="hover:text-primary-600">Central de Ajuda</a>
                    <a href="/anuncie" className="hover:text-primary-600">Anuncie sua Empresa</a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t pt-6">
              <p className="text-center text-sm text-gray-600">&copy; {new Date().getFullYear()} Marketplace. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}