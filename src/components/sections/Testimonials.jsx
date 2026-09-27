import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/cafeData';
import AnimatedText from '../common/AnimatedText';
import TiltCard from '../common/TiltCard';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 md:py-36 bg-cream-100 text-espresso-900 relative overflow-hidden"
    >
      {/* Editorial Watermark background element */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14vw] font-serif text-sand-200/25 pointer-events-none select-none font-normal leading-none whitespace-nowrap"
      >
        Patrons & Friends
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.35em] text-gold-600 font-semibold block mb-2"
          >
            Words From Our Guests
          </motion.span>
          
          <AnimatedText
            text="Loved by coffee people."
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-espresso-900 font-normal tracking-tight"
          />
        </div>

        {/* 3 Testimonial Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <TiltCard
                maxAngle={6}
                className="bg-white border border-sand-300 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-luxury-lg transition-all duration-500 relative group h-full"
              >
                {/* Quote icon */}
                <div className="text-gold-500/20 group-hover:text-gold-500/40 transition-colors mb-6">
                  <Quote className="w-10 h-10 stroke-[1.2]" />
                </div>

                {/* Quote Text */}
                <div className="flex-1 mb-8">
                  <p className="font-serif italic text-xl sm:text-2xl text-espresso-900 leading-relaxed font-light">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Guest Details */}
                <div className="pt-6 border-t border-sand-200 flex items-end justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-medium text-espresso-900">
                      {t.author}
                    </h4>
                    <p className="text-xs uppercase tracking-wider text-gold-600 font-sans mt-0.5">
                      {t.role}
                    </p>
                    <p className="text-[11px] text-espresso-500/70 font-light mt-1">
                      Favourite: {t.favorite}
                    </p>
                  </div>

                  {/* 5-Star Rating Accents with stagger pulse */}
                  <div className="flex gap-0.5 text-gold-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <Star className="w-3.5 h-3.5 fill-gold-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gold-500 transition-colors duration-500" />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
