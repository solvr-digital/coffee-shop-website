import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SIGNATURE_ITEMS } from '../../data/cafeData';
import TiltCard from '../common/TiltCard';
import AnimatedText from '../common/AnimatedText';

export default function SignatureMenu({ onOpenReserve }) {
  return (
    <section
      id="favourites"
      className="py-28 md:py-36 bg-cream-50 text-espresso-900 overflow-hidden relative"
    >
      {/* Background subtle floating gradient orb */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial section header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 md:mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand-300 pb-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold flex items-center gap-2 mb-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Highlights · Signature Creations</span>
            </motion.span>

            <AnimatedText
              text="A few of our favourites"
              className="text-3xl sm:text-5xl lg:text-6xl font-serif text-espresso-900 font-normal tracking-tight"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-xs tracking-widest uppercase text-espresso-600 font-sans"
          >
            <span>Roasted fresh daily in Melbourne</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <a
              href="#menu"
              className="text-gold-600 hover:text-espresso-900 font-medium underline underline-offset-4 transition-colors"
            >
              View Full Menu ↓
            </a>
          </motion.div>
        </div>
      </div>

      {/* Product Cards Grid with 3D Tilt Physics */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SIGNATURE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <TiltCard
                maxAngle={7}
                className="group relative bg-white border border-sand-300/80 hover:border-gold-500/60 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-luxury-lg overflow-hidden h-full"
              >
                {/* Top Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-espresso-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle vignette on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge Number (01, 02, 03, 04) */}
                  <div className="absolute top-4 left-4 bg-espresso-950/85 backdrop-blur-sm border border-gold-500/30 px-2.5 py-1 text-[11px] font-mono tracking-widest text-gold-400">
                    {item.id}
                  </div>

                  {/* Tag & Temperature */}
                  <div className="absolute top-4 right-4 bg-cream-50/95 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase tracking-widest font-sans font-semibold text-espresso-900 shadow-sm">
                    {item.tag}
                  </div>

                  {/* Circular Hover Arrow icon with spring jump */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gold-500 text-espresso-950 flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </motion.div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl text-espresso-900 font-normal tracking-wide group-hover:text-gold-600 transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-medium text-espresso-850 ml-2 group-hover:scale-105 transition-transform inline-block">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-xs text-espresso-600 font-sans tracking-wide mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sand-200/80 flex items-center justify-between text-[11px] text-espresso-500/80 font-light">
                    <span className="italic">{item.notes}</span>
                  </div>
                </div>

                {/* Animated Gold Bottom Border on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
