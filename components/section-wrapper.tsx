'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto py-12 lg:py-24 w-full max-w-6xl"
      exit={{ opacity: 0, y: -20 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
