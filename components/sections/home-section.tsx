'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import potfolio from '../../public/images/portfolio.jpg';

import { SectionWrapper } from '@/components/section-wrapper';
import type { TabId } from '@/lib/data';

interface HomeSectionProps {
  onNavigate: (tab: TabId) => void;
}

const yearExperience = new Date().getFullYear() - 2022;

const stats = [
  { label: 'Projetos Entregues', val: '20+' },
  { label: 'Anos Exp.', val: yearExperience.toString().padStart(2, '0') },
  { label: 'Tecnologias', val: '15+' },
  { label: 'Satisfação', val: '100%' },
];

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <SectionWrapper>
      <div className="items-center gap-12 grid lg:grid-cols-2 min-h-[70vh]">
        <div className="flex flex-col gap-8 order-2 lg:order-1 lg:text-left text-center">
          <div className="inline-flex items-center self-center lg:self-start gap-2 bg-emerald-500/10 px-3 py-1 border border-emerald-500/20 rounded-full font-bold text-emerald-500 text-xs animate-pulse">
            <div className="bg-emerald-500 rounded-full w-2 h-2"></div>
            <span>DISPONÍVEL PARA NOVOS PROJETOS</span>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-slate-400 text-lg lg:text-xl">
              Olá, eu sou o John.
            </h3>
            <h1 className="font-extrabold text-white text-4xl md:text-6xl leading-tight">
              Desenvolvedor Full Stack criando{' '}
              <span className="text-emerald-500">sistemas de alto valor.</span>
            </h1>
            <p className="mx-auto lg:mx-0 max-w-xl text-slate-400 text-lg leading-relaxed">
              Especialista em interfaces modernas, backend robusto e soluções escaláveis
              que transformam ideias em lucro e performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              className="group flex items-center bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30 shadow-lg px-8 py-4 rounded-xl font-bold text-white transition-all cursor-pointer"
              onClick={() => onNavigate('projetos')}
            >
              Ver Projetos
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              className="bg-white/5 hover:bg-white/10 px-8 py-4 border border-white/10 rounded-xl font-bold text-white transition-all cursor-pointer"
              onClick={() => onNavigate('contato')}
            >
              Falar Comigo
            </button>
          </div>

          <div className="gap-6 grid grid-cols-2 md:grid-cols-4 pt-10">
            {stats.map((stat, i) => (
              <div className="lg:text-left text-center" key={i}>
                <div className="mb-1 font-bold text-white text-2xl">{stat.val}</div>
                <div className="text-slate-500 text-xs uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <div className="relative border-2 border-white/10 rounded-2xl w-64 md:w-80 h-64 md:h-80 overflow-hidden rotate-3 transition-transform hover:-translate-y-2 hover:translate-x-1 duration-500">
              <Image alt="Developer" className="object-cover" src={potfolio} fill />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
