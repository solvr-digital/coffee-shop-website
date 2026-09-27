import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import MagneticButton from '../common/MagneticButton';
import AnimatedText from '../common/AnimatedText';

export default function FinalCTA({ onOpenReserve }) {
  return (
    <section className="relative py-32 md:py-44 bg-espresso-900 text-cream-50 overflow-hidden flex items-center justify-center">
      {/* Background with subtle coffee texture */}
      <div className="absolute inset-0 z-0">
        <motion.img
          animate={{ scale: [1.02, 1.07, 1.02] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
          src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=2400&q=85"
          alt="Warm Coffee Glow"
          className="w-full h-full object-cover opacity-25 filter blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/80 to-espresso-950" />
      </div>

      {/* Center Ambient Gold Light Pulse */}
      <motion.div
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.1, 0.22, 0.1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute w-[600px] h-[600px] bg-gold-500/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AN UNHURRIED INVITATION</span>
          <Sparkles className="w-3.5 h-3.5" />
        </motion.span>

        <div>
          <AnimatedText
            text="Your next favourite"
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight"
          />
          <AnimatedText
            text="coffee is waiting."
            delay={0.2}
            className="font-serif italic text-gold-300 font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight mb-10"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-cream-300/80 text-sm sm:text-base font-light max-w-lg mx-auto mb-12"
        >
          Walk-ins are warmly greeted throughout the day. For groups or specific seating arrangements, we invite you to book ahead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block"
        >
          <MagneticButton
            onClick={onOpenReserve}
            strength={26}
          >
            <div className="group px-11 py-5 bg-gold-500 hover:bg-gold-400 text-espresso-950 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-glow-gold flex items-center gap-3">
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
