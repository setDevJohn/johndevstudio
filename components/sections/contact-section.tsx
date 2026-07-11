'use client';

import { Mail, Linkedin, Smartphone, Send } from 'lucide-react';

import { SectionTitle } from '@/components/section-title';
import { SectionWrapper } from '@/components/section-wrapper';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Profissional',
    val: 'setdevjohn@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    val: 'linkedin.com/in/jhony-freitas',
  },
  {
    icon: Smartphone,
    label: 'WhatsApp',
    val: '+55 (11) 94812-7577',
  },
];

export function ContactSection() {
  return (
    <SectionWrapper>
      <div className="bg-[#1a1d20] border border-white/5 rounded-[40px] overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-8 bg-gradient-to-br from-emerald-500/10 to-transparent p-12 lg:p-20">
            <SectionTitle
              subtitle="Contato"
              title="Vamos construir algo extraordinário?"
            />
            <p className="text-slate-400 text-lg">
              Estou disponível para novos projetos freelance, oportunidades PJ ou
              propostas CLT de alto nível.
            </p>
            <div className="flex flex-col gap-6">
              {contactInfo.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div className="flex items-center gap-4" key={i}>
                    <div className="flex justify-center items-center bg-white/5 rounded-xl w-12 h-12 text-emerald-500">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-tighter">
                        {c.label}
                      </p>
                      <p className="font-medium text-white">{c.val}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-12 lg:p-20">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="gap-6 grid md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-500 text-xs uppercase">
                    Nome
                  </label>
                  <input
                    className="bg-white/5 p-4 border border-white/10 focus:border-emerald-500 rounded-xl focus:outline-none w-full text-white transition-colors"
                    placeholder="Seu nome"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-500 text-xs uppercase">
                    Email
                  </label>
                  <input
                    className="bg-white/5 p-4 border border-white/10 focus:border-emerald-500 rounded-xl focus:outline-none w-full text-white transition-colors"
                    placeholder="seu@email.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-500 text-xs uppercase">
                  Assunto
                </label>
                <select className="bg-white/5 p-4 border border-white/10 focus:border-emerald-500 rounded-xl focus:outline-none w-full text-white transition-colors">
                  <option className="bg-[#1a1d20]">Novo Projeto Freelance</option>
                  <option className="bg-[#1a1d20]">Oportunidade CLT/PJ</option>
                  <option className="bg-[#1a1d20]">Consultoria Técnica</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-500 text-xs uppercase">
                  Mensagem
                </label>
                <textarea
                  className="bg-white/5 p-4 border border-white/10 focus:border-emerald-500 rounded-xl focus:outline-none w-full text-white transition-colors"
                  placeholder="Como posso te ajudar?"
                  rows={4}
                ></textarea>
              </div>
              <button className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20 shadow-lg py-4 rounded-xl w-full font-bold text-white active:scale-[0.98] transition-all">
                Enviar Mensagem <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
            <p className="mt-6 text-slate-500 text-xs text-center">
              Vamos transformar sua ideia em algo{'  '}
              <span className="font-bold text-white">profissional e lucrativo.</span>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
