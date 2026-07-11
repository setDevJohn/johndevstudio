'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import { Footer } from '@/components/footer';
import { LoadingScreen } from '@/components/loading-screen';
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HomeSection,
  ProjectsSection,
  ServicesSection,
} from '@/components/sections';
import { SkillsSection } from '@/components/sections/skills-section';
import { Sidebar } from '@/components/sidebar';
import type { TabId } from '@/lib/data';

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <HomeSection onNavigate={setActiveTab} />;
      case 'sobre':
        return <AboutSection />;
      case 'projetos':
        return <ProjectsSection />;
      case 'habilidades':
        return <SkillsSection />;
      case 'experiencia':
        return <ExperienceSection />;
      case 'servicos':
        return <ServicesSection onNavigate={setActiveTab} />;
      case 'contato':
        return <ContactSection />;
      default:
        return <HomeSection onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="bg-[#0f1113] selection:bg-emerald-500 min-h-screen font-sans selection:text-white">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="top-[-10%] right-[-10%] absolute bg-emerald-500/5 blur-[120px] rounded-full w-[40%] h-[40%]"></div>
        <div className="bottom-[-10%] left-[-10%] absolute bg-emerald-500/5 blur-[120px] rounded-full w-[40%] h-[40%]"></div>
      </div>

      <Sidebar
        activeTab={activeTab}
        mobileMenuOpen={mobileMenuOpen}
        setActiveTab={setActiveTab}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex flex-col lg:pl-64 min-h-screen transition-all duration-300 -300">
        <div className="flex-1 px-6 md:px-12 pt-20 lg:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              initial={{ opacity: 0, x: 10 }}
              key={activeTab}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
      </main>
    </div>
  );
}
