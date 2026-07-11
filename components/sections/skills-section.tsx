'use client';

import { CheckCircle2, LayoutGrid, Cpu, Database, TrendingUp } from 'lucide-react';

import { SectionTitle } from '@/components/section-title';
import { SectionWrapper } from '@/components/section-wrapper';
import type { SkillGroup } from '@/lib/data';
import { SKILLS, type Skill } from '@/lib/data';

const iconMap = {
  LayoutGrid,
  Cpu,
  Database,
  TrendingUp,
};

function SkillIcon({ iconName }: { iconName: Skill['iconName'] }) {
  const Icon = iconMap[iconName];
  return <Icon className="w-5 h-5" />;
}

function isSkillGroup(skill: Skill | SkillGroup): skill is SkillGroup {
  return 'father' in skill;
}

export function SkillsSection() {
  return (
    <SectionWrapper>
      <SectionTitle subtitle="Stack Técnica" title="Habilidades & Ferramentas" />
      <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill, idx) => {
          if (isSkillGroup(skill)) {
            return (
              <div
                className="group flex flex-col gap-14 bg-[#1a1d20] hover:bg-emerald-500/[0.02] p-6 border border-white/5 rounded-2xl transition-colors"
                key={idx}
              >
                {skill.childrens.map((child, childIdx) => (
                  <div key={`${idx}-${childIdx}`}>
                    <div className="flex justify-center items-center bg-emerald-500/10 mb-4 rounded-lg w-10 h-10 text-emerald-500 group-hover:scale-110 transition-transform">
                      <SkillIcon iconName={child.iconName} />
                    </div>

                    <h3 className="mb-4 font-bold text-white text-lg">
                      {child.category}
                    </h3>

                    <ul className="flex flex-col gap-3">
                      {child.items.map((item) => (
                        <li
                          className="flex items-center text-slate-400 text-sm"
                          key={item}
                        >
                          <CheckCircle2 className="mr-2 w-4 h-4 text-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          }

          return (
            <div
              className="group bg-[#1a1d20] hover:bg-emerald-500/[0.02] p-6 border border-white/5 rounded-2xl transition-colors"
              key={idx}
            >
              <div className="flex justify-center items-center bg-emerald-500/10 mb-4 rounded-lg w-10 h-10 text-emerald-500 group-hover:scale-110 transition-transform">
                <SkillIcon iconName={skill.iconName} />
              </div>

              <h3 className="mb-4 font-bold text-white text-lg">{skill.category}</h3>

              <ul className="flex flex-col gap-3">
                {skill.items.map((item) => (
                  <li className="flex items-center text-slate-400 text-sm" key={item}>
                    <CheckCircle2 className="mr-2 w-4 h-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
