import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/cafeData';
import AnimatedText from '../common/AnimatedText';

export default function Gallery({ onSelectImage }) {
  return (
    <section
      id="gallery"
      className="py-28 md:py-36 bg-cream-50 text-espresso-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-sand-300 pb-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold flex items-center gap-2 mb-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Narrative · Moments at Aurelia</span>
            </motion.span>

            <AnimatedText
              text="Life in the Café"
              className="text-3xl sm:text-5xl lg:text-6xl font-serif text-espresso-900 font-normal tracking-tight"
            />
          </div>
          <p className="text-xs sm:text-sm text-espresso-600 font-light max-w-sm">
            Glimpses of daily rituals, architectural serenity, and morning light through our lens. Click any frame to view full resolution.
          </p>
        </div>

        {/* Editorial Responsive Grid / Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[280px]">
          {GALLERY_ITEMS.map((item, index) => {
            let spanClass = 'col-span-1 row-span-1';
            if (index === 0) spanClass = 'col-span-2 row-span-2';
            else if (index === 3) spanClass = 'col-span-1 row-span-2';
            else if (index === 6) spanClass = 'col-span-2 row-span-1';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: (index % 4) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                onClick={() => onSelectImage(item)}
                data-cursor="view"
                data-cursor-text="VIEW"
                className={`relative group overflow-hidden bg-espresso-900 cursor-pointer shadow-sm hover:shadow-luxury-lg ${spanClass}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-espresso-950/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold-400 font-medium bg-espresso-900/80 px-2.5 py-1 border border-gold-500/20">
                      {item.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-gold-500 text-espresso-950 flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom Bar */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif text-lg sm:text-xl text-cream-50 font-normal">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-cream-300/80 line-clamp-1 mt-1 font-light italic">
                      {item.caption}
                    </p>
                    <div className="mt-2 text-[9px] uppercase tracking-widest text-gold-300 flex items-center gap-1.5 font-medium">
                      <span>Click to view</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>

                {/* Outer frame border */}
                <div className="absolute inset-0 border border-sand-300/40 pointer-events-none group-hover:border-gold-500/50 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
