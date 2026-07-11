'use client';

import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="z-[9999] fixed inset-0 flex justify-center items-center bg-[#0f1113]">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        className="border-4 border-emerald-500 border-t-transparent rounded-full w-12 h-12"
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    </div>
  );
}
