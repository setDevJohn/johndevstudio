'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Globe,
  User,
  LayoutGrid,
  Wrench,
  Briefcase,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

import logo from '../public/logo.png';

import type { TabId } from '@/lib/data';

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const menuItems = [
  { id: 'inicio' as const, label: 'Início', icon: Globe },
  { id: 'sobre' as const, label: 'Sobre Mim', icon: User },
  { id: 'projetos' as const, label: 'Projetos', icon: LayoutGrid },
  { id: 'habilidades' as const, label: 'Habilidades', icon: Wrench },
  { id: 'experiencia' as const, label: 'Experiência', icon: Briefcase },
  { id: 'servicos' as const, label: 'Serviços', icon: Zap },
  { id: 'contato' as const, label: 'Contato', icon: Mail },
];

export function Sidebar({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}: SidebarProps) {
  const sidebarContent = (
    <div className="flex flex-col p-6 h-full text-slate-300">
      <div className="flex flex-col items-center sm:items-start mb-10">
        <Image alt="Logo da empresa" className="mb-2" src={logo} width={48} />

        <h1 className="font-bold text-white text-xl tracking-tight">
          John <span className="text-emerald-500">Dev</span>
        </h1>
        <p className="mt-1 font-medium text-slate-500 text-xs uppercase tracking-widest">
          Full Stack Developer
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`w-full flex cursor-pointer items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                activeTab === item.id
                  ? 'bg-emerald-500/10 text-emerald-500 border-r-2 border-emerald-500 shadow-sm'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
            >
              <span
                className={`${
                  activeTab === item.id
                    ? 'text-emerald-500'
                    : 'text-slate-500 group-hover:text-emerald-400'
                }`}
              >
                <Icon className="w-5 h-5" />
              </span>
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col gap-4 pt-6 border-white/5 border-t">
        <div className="flex justify-around items-center">
          <a
            className="hover:bg-white/5 p-2 rounded-full transition-colors"
            href="https://github.com/setDevJohn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            className="hover:bg-white/5 p-2 rounded-full transition-colors"
            href="https://www.linkedin.com/in/jhony-freitas/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            className="hover:bg-white/5 p-2 rounded-full transition-colors"
            href="mailto:setdevjohn@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <button
          className="bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20 shadow-lg py-3 rounded-xl w-full font-bold text-white active:scale-95 transition-all cursor-pointer"
          onClick={() => setActiveTab('contato')}
        >
          Contratar Agora
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block top-0 left-0 z-40 fixed bg-[#141618] border-white/5 border-r w-64 h-screen">
        {sidebarContent}
      </aside>

      {/* Mobile Top Header */}
      <div className="lg:hidden top-0 left-0 z-50 fixed flex justify-between items-center bg-[#141618]/90 backdrop-blur-md px-6 border-white/5 border-b w-full h-16">
        <h1 className="font-bold text-white text-lg">
          John <span className="text-emerald-500">Dev</span>
        </h1>
        <button
          className="p-2 text-emerald-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            animate={{ x: 0 }}
            className="lg:hidden z-40 fixed inset-0 bg-[#0f1113] pt-16"
            exit={{ x: '-100%' }}
            initial={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {sidebarContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
