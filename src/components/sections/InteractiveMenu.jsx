import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_CATEGORIES } from '../../data/cafeData';
import AnimatedText from '../common/AnimatedText';

const categories = [
  { id: 'COFFEE', label: 'Coffee', subtitle: 'Single Origin & Espresso' },
  { id: 'BREAKFAST', label: 'Breakfast', subtitle: 'Farm-to-Table Mornings' },
  { id: 'PASTRIES', label: 'Pastries', subtitle: 'Laminated French Pâtisserie' },
  { id: 'DESSERTS', label: 'Desserts', subtitle: 'Sweet Confections & Dolci' },
];

export default function InteractiveMenu({ onOpenReserve }) {
  const [activeCategory, setActiveCategory] = useState('COFFEE');
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section
      id="menu"
      className="py-28 md:py-36 bg-cream-100 text-espresso-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.35em] text-gold-600 font-semibold block mb-2"
          >
            Handcrafted Selection
          </motion.span>
          
          <AnimatedText
            text="The Aurelia Menu"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-espresso-900 font-normal tracking-tight mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-espresso-700/80 text-sm sm:text-base font-light max-w-lg mx-auto"
          >
            Prepared with single-origin beans, pasture-raised eggs, and cultured French Normandy butter.
          </motion.p>
        </div>

        {/* Category Navigation Tabs with Fluid Liquid Pill Indicator */}
        <div className="flex justify-center mb-14 md:mb-16">
          <div className="inline-flex flex-wrap justify-center gap-1 sm:gap-2 p-1.5 bg-cream-200/80 border border-sand-300 shadow-inner rounded-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 sm:px-8 py-3 text-xs uppercase tracking-[0.25em] font-medium transition-colors duration-300 z-10 ${
                    isActive
                      ? 'text-cream-50'
                      : 'text-espresso-700 hover:text-espresso-950'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="menuActiveIndicator"
                      className="absolute inset-0 bg-espresso-900 shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    >
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Subtitle */}
        <motion.div
          key={activeCategory + '-sub'}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 text-xs tracking-widest uppercase text-gold-600 font-sans"
        >
          <span>{categories.find((c) => c.id === activeCategory)?.subtitle}</span>
        </motion.div>

        {/* Menu Items Grid with Fluid Cascade Transitions */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 lg:gap-x-16"
            >
              {MENU_CATEGORIES[activeCategory].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group relative pb-4 border-b border-sand-300/60 hover:border-gold-500/80 transition-all duration-300 cursor-default"
                >
                  {/* Item Row */}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl text-espresso-900 font-medium tracking-wide group-hover:text-gold-600 transition-colors flex items-center gap-2">
                      <span>{item.name}</span>
                      {hoveredItem === item.name && (
                        <motion.span
                          layoutId="starGlow"
                          className="w-1.5 h-1.5 rounded-full bg-gold-500"
                        />
                      )}
                    </h3>
                    <div className="flex-1 border-b border-dotted border-sand-400/80 group-hover:border-gold-500/60 transition-colors mx-2" />
                    <span className="font-serif text-lg font-medium text-espresso-850 tabular-nums group-hover:scale-105 transition-transform">
                      {item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-espresso-600 font-light mt-1.5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Micro Metadata */}
                  <div className="flex items-center gap-3 mt-2 text-[10px] text-espresso-500/70 font-sans tracking-wider uppercase">
                    <span className="group-hover:text-espresso-800 transition-colors">{item.origin}</span>
                    <span>•</span>
                    <span>{item.calories}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Menu Footer Callout */}
        <div className="mt-16 text-center pt-8 border-t border-sand-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-espresso-600">
          <span>* Plant-based oat milk, almond milk, and decaffeinated alternatives available upon request.</span>
          <button
            onClick={onOpenReserve}
            className="text-gold-600 hover:text-espresso-900 uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors group"
          >
            <span>Reserve Table For Tasting</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
