import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STORY_STATS } from '../../data/cafeData';

// Counter component that smoothly animates numbers when entering viewport
function Counter({ target, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      // Ease out quartic function
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOut * (end - start) + start);
      setCount(current);

      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count < 10 && target >= 10 ? `0${count}` : count < 10 && target < 10 ? `0${count}` : count}
      {suffix}
    </span>
  );
}

export default function OurStory() {
  return (
    <section
      id="story"
      className="py-28 md:py-40 bg-espresso-950 text-cream-100 relative overflow-hidden"
    >
      {/* Soft atmospheric gradient glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Vertical Café / Barista Editorial Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden border border-gold-500/30 aspect-[3/4] sm:aspect-[4/5] shadow-2xl group"
              data-cursor="view"
            >
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=88"
                alt="Aurelia Barista Crafting Specialty Espresso"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />

              {/* Inset quote over image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-espresso-900/85 backdrop-blur-md border border-gold-500/20">
                <p className="font-serif italic text-xs sm:text-sm text-cream-200">
                  &ldquo;A coffee cup is not just porcelain and crema; it is the anchor of your morning thought.&rdquo;
                </p>
                <span className="text-[9px] uppercase tracking-widest text-gold-400 block mt-2">
                  Head Roaster · Aurelia Atelier
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Counter Statistics */}
          <div className="lg:col-span-7 lg:pl-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gold-500/60" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
                  MORE THAN COFFEE
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream-50 font-normal leading-[1.15] tracking-tight">
                Every cup has a story.
              </h2>

              <p className="text-cream-200/80 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                We believe great coffee is about more than the drink itself. It is about the people, the atmosphere, the conversation and the small rituals that make a place feel like your own.
              </p>

              <p className="text-cream-300/60 text-sm font-light leading-relaxed max-w-xl">
                Founded in Melbourne&apos;s creative heart, Aurelia was envisioned as an unhurried respite from the digital rush. Here, timing is governed not by screens, but by the slow drip of cold brew, the precise 28-second extraction of espresso, and the warm morning light drifting through high arched windows.
              </p>

              {/* 3 Animated Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {STORY_STATS.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.15, duration: 0.7 }}
                    className="flex flex-col"
                  >
                    <div className="font-serif text-4xl sm:text-5xl font-normal text-gold-400 mb-1">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] font-medium text-cream-100">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-cream-300/50 mt-1 font-light">
                      {stat.sublabel}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
