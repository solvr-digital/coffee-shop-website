import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from '../common/AnimatedText';

export default function Introduction() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax transform
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotateWatermark = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative py-28 md:py-40 bg-cream-100 text-espresso-900 overflow-hidden"
    >
      {/* Editorial Watermark background element with parallax rotation */}
      <motion.div 
        style={{ rotate: rotateWatermark }}
        aria-hidden="true" 
        className="absolute -top-10 -right-20 text-[20vw] font-serif text-sand-200/35 pointer-events-none select-none font-normal leading-none"
      >
        Aurelia
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with masked clip-path and circular badge */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0 }}
              whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden shadow-2xl bg-espresso-950 aspect-[4/5] sm:aspect-[3/4]"
            >
              <motion.div style={{ y: yImage }} className="w-full h-[120%] -mt-[10%]">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=88"
                  alt="Aurelia Slow Pourover Coffee"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  data-cursor="view"
                />
              </motion.div>

              {/* Image border frame */}
              <div className="absolute inset-0 border border-gold-500/20 pointer-events-none" />
            </motion.div>

            {/* Circular rotating badge: 100% ARABICA */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -90 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 180, damping: 18 }}
              whileHover={{ scale: 1.08 }}
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-28 h-28 sm:w-36 sm:h-36 z-20 group cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating SVG Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
                  whileHover={{ transition: { duration: 4 } }}
                  className="w-full h-full"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full fill-current text-espresso-900 drop-shadow-md"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[9px] font-sans uppercase tracking-[0.24em] font-bold fill-espresso-850">
                      <textPath href="#circlePath" startOffset="0%">
                        ★ 100% ARABICA SINGLE ORIGIN ★ SLOW BREW
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Center Seal */}
                <div className="absolute inset-3 rounded-full bg-espresso-900 text-gold-400 flex flex-col items-center justify-center border border-gold-500/40 shadow-xl group-hover:bg-espresso-950 transition-colors">
                  <span className="text-[9px] font-serif tracking-widest text-cream-200">PUR</span>
                  <span className="text-xs font-serif font-bold tracking-wider text-gold-400">100%</span>
                  <span className="text-[7px] font-sans tracking-widest text-cream-300/70 uppercase">BEANS</span>
                </div>
              </div>
            </motion.div>

            {/* Subtle small secondary editorial photo offset */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              whileHover={{ scale: 1.04 }}
              className="hidden sm:block absolute -left-8 -bottom-10 w-44 h-56 z-10 border-4 border-cream-100 shadow-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=85"
                alt="Roasted coffee beans"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Right Column: Editorial Typography & Story */}
          <div className="lg:col-span-6 lg:pl-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Small Label */}
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-gold-500/60" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold">
                  EST. 2018 · THE AURELIA PHILOSOPHY
                </span>
              </div>

              {/* Main Heading with AnimatedText word reveals */}
              <div>
                <AnimatedText
                  text="Coffee made slowly."
                  className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso-900 font-normal leading-[1.12] tracking-tight"
                />
                <AnimatedText
                  text="Moments made beautifully."
                  delay={0.2}
                  className="font-serif italic font-light text-espresso-700 text-3xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight"
                />
              </div>

              {/* Decorative rule */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-16 h-[1.5px] bg-gold-500/50 origin-left"
              />

              {/* Paragraph */}
              <p className="text-espresso-700 text-base sm:text-lg leading-relaxed font-light">
                From carefully selected beans to handcrafted drinks and freshly baked pastries,
                every detail at Aurelia is designed to make ordinary moments feel a little more special.
              </p>

              {/* Secondary details */}
              <p className="text-espresso-600/80 text-sm leading-relaxed font-light">
                We roast exclusively in micro-lots, pairing time-honored European pâtisserie techniques with Melbourne&apos;s pioneering specialty coffee craft. Each morning, butter is laminated, beans are calibrated, and doors open to the comforting hum of steam and shared company.
              </p>

              {/* Signature note */}
              <div className="pt-4 flex items-center gap-6 border-t border-sand-300/60">
                <div>
                  <div className="font-serif text-lg text-espresso-900 font-medium">Marc & Hélène Laurent</div>
                  <div className="text-[11px] uppercase tracking-widest text-gold-600 font-sans mt-0.5">Founders & Master Roasters</div>
                </div>
                <div className="font-serif italic text-2xl text-gold-600/60 select-none">
                  Aurelia
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
