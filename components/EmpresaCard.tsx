import Image from 'next/image';
import Link from 'next/link';
import type { Empresa } from '../mocks/empresas';
import { getMediaAvaliacoesEmpresa } from '../mocks/avaliacoes';
import { verificarHorarioFuncionamento } from '../mocks/empresas';
import { categorias } from '../mocks/categorias';

interface EmpresaCardProps {
  empresa: Empresa;
  destaque?: boolean;
}

export default function EmpresaCard({ empresa, destaque }: EmpresaCardProps) {
  return (
    <div className={`border rounded p-4 ${destaque ? 'bg-yellow-100' : 'bg-white'}`}>
      <h2 className="text-xl font-bold">{empresa.nome}</h2>
      <p>{empresa.descricao}</p>
    </div>
  );
}