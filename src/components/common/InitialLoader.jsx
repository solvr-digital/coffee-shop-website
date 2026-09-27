import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InitialLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8 + 4);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-espresso-950 text-cream-50 select-none overflow-hidden"
        >
          {/* Layer 2: Warm cream/espresso accent curtain beneath */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{
              scaleY: 0,
              transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1], delay: 0.15 },
            }}
            className="absolute inset-0 bg-[#1E1712] origin-bottom pointer-events-none"
          />

          {/* Ambient center gold glow */}
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.15, 0.3, 0.15] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Monogram Seal with Animated Rotating Orbit */}
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-gold-500/40"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-full border border-gold-500/60 bg-espresso-900/80 flex items-center justify-center shadow-lg"
              >
                <span className="font-serif text-3xl text-gold-400 font-normal italic">
                  A
                </span>
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl tracking-[0.35em] text-cream-50 font-normal"
            >
              AURELIA
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] uppercase tracking-[0.45em] text-gold-400 mt-2 font-sans"
            >
              COFFEE & PÂTISSERIE · MELBOURNE
            </motion.div>

            {/* Animated percentage & line progress */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="w-48 h-[1.5px] bg-white/10 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-cream-100 transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-gold-400/80 tracking-widest tabular-nums">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
