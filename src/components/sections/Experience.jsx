import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Experience({ onOpenReserve }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Cinematic slow parallax translation
  const yBg = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const opacityText = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.9], [0.6, 1, 1, 0.7]);

  const handleExploreClick = (e) => {
    e.preventDefault();
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-espresso-950 text-cream-50 select-none"
    >
      {/* Parallax Background Visual */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 -top-[15%] -bottom-[15%] w-full h-[130%]"
      >
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2400&q=88"
          alt="Aurelia Café Ambience & Light"
          className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.05]"
        />
      </motion.div>

      {/* Cinematic dark gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-espresso-950/70" />
      <div className="absolute inset-0 bg-espresso-950/30" />

      {/* Center Narrative Content */}
      <motion.div
        style={{ opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20"
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gold-400 font-medium block mb-6"
        >
          THE AMBIENCE · SANCTUARY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-cream-50 uppercase mb-8"
        >
          Come for the coffee.<br />
          <span className="italic text-gold-300/90 font-light lowercase">stay for the feeling.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-cream-200/80 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A space designed for slow conversations, creative mornings and unforgettable evenings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#gallery"
            onClick={handleExploreClick}
            className="group px-8 py-4 bg-transparent border border-gold-400/50 hover:bg-gold-500 hover:text-espresso-950 text-gold-300 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
          >
            <span>Explore Aurelia</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenReserve}
            className="px-8 py-4 bg-cream-50 text-espresso-950 hover:bg-gold-400 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center gap-2"
          >
            Reserve Your Table
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle bottom edge vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-espresso-950 to-transparent pointer-events-none" />
    </section>
  );
}
