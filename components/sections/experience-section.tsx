'use client';

import { SectionTitle } from '@/components/section-title';
import { SectionWrapper } from '@/components/section-wrapper';
import { EXPERIENCES } from '@/lib/data';

export function ExperienceSection() {
  return (
    <SectionWrapper>
      <SectionTitle subtitle="Trajetória" title="Experiência Profissional" />
      <div className="relative flex flex-col gap-12 ml-4 md:ml-8 pl-8 border-emerald-500/30 border-l">
        {EXPERIENCES.map((exp, i) => (
          <div className="relative" key={i}>
            <div className="top-0 -left-[41px] absolute bg-[#0f1113] border-4 border-emerald-500 rounded-full w-5 h-5"></div>
            <div className="flex flex-col gap-2">
              <span className="font-mono font-bold text-emerald-500 text-xs">
                {exp.year}
              </span>
              <h3 className="font-bold text-white text-xl">{exp.role}</h3>
              <p className="font-medium text-emerald-500/80 text-sm">{exp.company}</p>
              <p className="max-w-2xl text-slate-400 text-sm">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
