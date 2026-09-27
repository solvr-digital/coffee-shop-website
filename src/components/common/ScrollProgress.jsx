import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none bg-transparent">
      <motion.div
        style={{ scaleX }}
        className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-cream-50 origin-left shadow-glow-gold"
      />
    </div>
  );
}
