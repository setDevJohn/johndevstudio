'use client';

import { CheckCircle2 } from 'lucide-react';

import { SectionTitle } from '@/components/section-title';
import { SectionWrapper } from '@/components/section-wrapper';

const highlights = [
  {
    title: 'Foco em Performance',
    description:
      'Aplicações rápidas, leves e otimizadas para Core Web Vitals, SEO e conversão.',
  },
  {
    title: 'Arquitetura Escalável',
    description: 'Código limpo, organizado e preparado para crescer com qualidade.',
  },
  {
    title: 'Visão de Negócio',
    description:
      'Desenvolvimento alinhado às metas reais da empresa e experiência do usuário.',
  },
];

const yearExperience = new Date().getFullYear() - 2022;

const infoCards = [
  { value: 'Full Stack', label: 'Front + Back' },
  { value: '+50%', label: 'Ganho em Performance' },
  { value: yearExperience.toString().padStart(2, '0'), label: 'Anos de Experiência' },
  { value: 'React / Next', label: 'Stack Principal' },
];

export function AboutSection() {
  return (
    <SectionWrapper>
      <div className="items-center gap-16 grid lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionTitle
            subtitle="Sobre Mim"
            title={`${yearExperience} anos entregando sistemas completos`}
          />
          <p className="text-slate-400 text-lg leading-relaxed">
            Desenvolvo aplicações web, APIs e sistemas que vão além de simplesmente
            funcionar. Meu foco é criar soluções organizadas, escaláveis e fáceis de
            evoluir, sempre entendendo primeiro o problema para então escolher a melhor
            tecnologia. Acredito que crescer como desenvolvedor significa nunca se
            acomodar, e é isso que me motiva a buscar constantemente novos desafios e
            formas de entregar mais valor em cada projeto.
          </p>
          <div className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <div className="flex items-start gap-4" key={i}>
                <div className="bg-emerald-500/10 mt-1 p-2 rounded-lg text-emerald-500">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gap-5 grid grid-cols-12">
          {infoCards.map((card, i) => {
            const layout = [
              'col-span-7 min-h-[180px]',
              'col-span-5 min-h-[180px]',
              'col-span-5 min-h-[180px]',
              'col-span-7 min-h-[180px]',
            ];

            return (
              <div
                key={i}
                className={`
                  group relative overflow-hidden rounded-[2rem]
                  border border-white/5 bg-[#1a1d20]/90 p-7
                  transition-all duration-300 hover:-translate-y-1
                  hover:border-emerald-500/20 hover:bg-[#202428]
                  hover:shadow-[0_0_35px_rgba(16,185,129,0.08)]
                  ${layout[i]}
                `}
              >
                <div className="top-0 left-0 absolute bg-gradient-to-b from-emerald-500/70 via-emerald-500/10 to-transparent w-[3px] h-full" />

                <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="z-10 relative flex flex-col justify-between h-full">
                  <div className="flex justify-end items-center">
                    <div className="bg-emerald-500/50 rounded-full w-2 h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="font-bold text-emerald-500 text-4xl tracking-tight">
                      {card.value}
                    </div>

                    <div className="max-w-[220px] font-medium text-slate-400 text-sm uppercase tracking-[0.18em]">
                      {card.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
