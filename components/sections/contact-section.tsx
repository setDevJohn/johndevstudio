'use client';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Smartphone, Send } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { toast } from 'sonner';

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
  const defaultValues = {
    name: '',
    email: '',
    subject: 'Novo Projeto Freelance',
    message: '',
  };

  const [formData, setFormData] = useState(defaultValues);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.warning('Preencha todos os campos.');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Jhony Freitas',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success('Mensagem enviada com sucesso!');

      setFormData(defaultValues);
    } catch (err) {
      console.error(err);
      toast.error('Não foi possível enviar a mensagem.');
    } finally {
      setLoading(false);
    }
  };

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
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="gap-6 grid md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-500 text-xs uppercase">
                    Nome
                  </label>
                  <input
                    className="bg-white/5 p-4 border border-white/10 focus:border-emerald-500 rounded-xl focus:outline-none w-full text-white transition-colors"
                    name="name"
                    placeholder="Seu nome"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-500 text-xs uppercase">
                    Email
                  </label>
                  <input
                    className="bg-white/5 p-4 border border-white/10 focus:border-emerald-500 rounded-xl focus:outline-none w-full text-white transition-colors"
                    name="email"
                    placeholder="seu@email.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-500 text-xs uppercase">
                  Assunto
                </label>
                <select
                  className="bg-white/5 p-4 border border-white/10 focus:border-emerald-500 rounded-xl focus:outline-none w-full text-white transition-colors"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20 shadow-lg py-4 rounded-xl w-full font-bold text-white active:scale-[0.98] transition-all cursor-pointer"
                disabled={loading}
                type="submit"
              >
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
                <Send className="ml-2 w-4 h-4" />
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
