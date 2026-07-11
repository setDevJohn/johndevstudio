'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import { SectionTitle } from '@/components/section-title';
import { SectionWrapper } from '@/components/section-wrapper';
import { PROJECTS } from '@/lib/data';

export function ProjectsSection() {
  return (
    <SectionWrapper>
      <SectionTitle subtitle="Portfolio" title="Projetos em Destaque" />
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <motion.div
            className="group bg-[#1a1d20] shadow-xl border border-white/5 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all duration-300"
            key={p.id}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={p.image}
              />
              <div className="top-4 left-4 absolute">
                <span className="bg-emerald-500 px-2 py-1 rounded font-bold text-[10px] text-white uppercase tracking-tighter">
                  {p.category}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <h3 className="font-bold text-white group-hover:text-emerald-400 text-xl transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    className="bg-white/5 px-2 py-1 rounded font-mono text-[10px] text-slate-500"
                    key={t}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4 border-white/5 border-t">
                <div className="text-slate-500 text-xs">
                  <strong className="text-emerald-500">Resultado:</strong>
                  {p.result}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    className="flex items-center font-bold text-white hover:text-emerald-500 text-xs transition-colors"
                    href={p.link}
                  >
                    <ExternalLink className="mr-1 w-3 h-3" /> Live Demo
                  </a>
                  <a
                    className="flex items-center font-bold text-white hover:text-emerald-500 text-xs transition-colors"
                    href={p.github}
                  >
                    <Github className="mr-1 w-3 h-3" /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
