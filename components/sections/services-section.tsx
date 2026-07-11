'use client';

import {
  Code2,
  Server,
  CloudCog,
  MonitorSmartphone,
  Workflow,
  Wrench,
  ChevronRight,
} from 'lucide-react';

import { SectionTitle } from '@/components/section-title';
import { SectionWrapper } from '@/components/section-wrapper';
import type { TabId } from '@/lib/data';
import { SERVICES, type Service } from '@/lib/data';

interface ServicesSectionProps {
  onNavigate: (tab: TabId) => void;
}

const iconMap = {
  Code2,
  Server,
  CloudCog,
  MonitorSmartphone,
  Workflow,
  Wrench,
};

function ServiceIcon({ iconName }: { iconName: Service['iconName'] }) {
  const Icon = iconMap[iconName];
  return <Icon className="w-8 h-8" />;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  return (
    <SectionWrapper>
      <SectionTitle subtitle="Como posso ajudar" title="Soluções e Serviços" />
      <div className="gap-8 grid md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div
            className="group flex flex-col items-center gap-6 bg-[#1a1d20] p-10 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-center transition-all"
            key={i}
          >
            <div className="flex justify-center items-center bg-emerald-500/10 group-hover:bg-emerald-500 rounded-2xl w-16 h-16 text-emerald-500 group-hover:text-white transition-all duration-300">
              <ServiceIcon iconName={s.iconName} />
            </div>
            <h3 className="font-bold text-white text-xl">{s.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
            <button
              className="flex items-center hover:opacity-80 font-bold text-emerald-500 text-xs uppercase tracking-widest transition-opacity cursor-pointer"
              onClick={() => onNavigate('contato')}
            >
              Saiba Mais <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
