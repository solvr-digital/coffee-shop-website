import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Navigation, ArrowUpRight } from 'lucide-react';
import { BRAND, OPENING_HOURS } from '../../data/cafeData';
import AnimatedText from '../common/AnimatedText';
import MagneticButton from '../common/MagneticButton';

export default function VisitUs({ onOpenReserve }) {
  const handleDirections = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=123+Market+Street+Melbourne+Australia',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="visit"
      className="py-28 md:py-36 bg-espresso-950 text-cream-100 relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold block mb-2"
              >
                Find Our Sanctuary
              </motion.span>
              
              <AnimatedText
                text="COME SAY HELLO."
                className="text-4xl sm:text-6xl font-serif text-cream-50 font-normal tracking-tight uppercase"
              />

              <p className="text-cream-300/70 text-sm sm:text-base font-light mt-4 max-w-md">
                Located on historic Market Street in Melbourne&apos;s CBD. Steps from Flinders Street and the Yarra River.
              </p>
            </div>

            {/* Address & Hours details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-b border-white/10 py-8">
              {/* Address */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Address</span>
                </div>
                <div className="text-sm text-cream-100 font-light leading-relaxed">
                  <p className="font-serif text-lg text-cream-50">{BRAND.address.split(',')[0]}</p>
                  <p>{BRAND.address.split(',')[1] || 'Melbourne, Australia'}</p>
                  <p className="text-xs text-cream-300/60 mt-1">Valet parking & tram stop #4 nearby</p>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Opening Hours</span>
                </div>
                <div className="text-xs text-cream-200/90 space-y-2.5 font-light">
                  {OPENING_HOURS.map((oh) => (
                    <div key={oh.days}>
                      <div className="font-medium text-cream-100">{oh.days}</div>
                      <div className="text-gold-400/90 font-mono text-[11px]">{oh.hours}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="flex flex-wrap gap-6 text-xs text-cream-300/80">
              <div className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>{BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-gold-500" />
                <span>{BRAND.email}</span>
              </div>
            </div>

            {/* Magnetic Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <MagneticButton
                onClick={handleDirections}
                strength={18}
                className="w-full sm:w-auto"
              >
                <div className="w-full sm:w-auto px-7 py-4 bg-transparent border border-gold-500/50 hover:border-gold-400 text-cream-100 hover:text-gold-300 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 group">
                  <Navigation className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>Get Directions</span>
                </div>
              </MagneticButton>

              <MagneticButton
                onClick={onOpenReserve}
                strength={22}
                className="w-full sm:w-auto"
              >
                <div className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-espresso-950 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-glow-gold">
                  <span>Reserve a Table</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Minimalist Stylized Architectural Map Visual with Animated Radar */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square max-w-lg mx-auto bg-[#18130E] border border-gold-500/20 p-8 flex flex-col justify-between overflow-hidden shadow-2xl group cursor-pointer"
              onClick={handleDirections}
            >
              {/* Stylized Grid Lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C5A880" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Minimalist street map outlines */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full stroke-gold-500/20 fill-none pointer-events-none"
              >
                <line x1="0" y1="120" x2="400" y2="120" strokeWidth="2" />
                <line x1="0" y1="260" x2="400" y2="260" strokeWidth="3" stroke="#C5A880" strokeOpacity="0.3" />
                <line x1="160" y1="0" x2="160" y2="400" strokeWidth="3" stroke="#C5A880" strokeOpacity="0.3" />
                <line x1="300" y1="0" x2="300" y2="400" strokeWidth="1.5" />
                <line x1="40" y1="380" x2="380" y2="40" strokeWidth="1" strokeDasharray="4,4" />
                <path
                  d="M 0,340 Q 120,310 240,350 T 400,320"
                  strokeWidth="8"
                  stroke="#342921"
                  strokeOpacity="0.6"
                />
              </svg>

              {/* Map Header */}
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-mono">
                    ZONE 01 · MELBOURNE CBD
                  </span>
                  <div className="font-serif text-lg text-cream-100 font-normal mt-0.5">
                    Market Street Precinct
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-espresso-900 border border-gold-500/40 text-[9px] uppercase tracking-widest text-gold-300 font-mono">
                  -37.8136° S, 144.9631° E
                </div>
              </div>

              {/* Center Landmark Pin (Aurelia) with animated radar ripple */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut' }}
                    className="w-16 h-16 rounded-full bg-gold-500/30 absolute"
                  />
                  <div className="w-10 h-10 rounded-full bg-gold-500/30 flex items-center justify-center relative">
                    <div className="w-4 h-4 rounded-full bg-gold-400 shadow-glow-gold" />
                  </div>
                </div>
                <div className="mt-3 px-3 py-1 bg-espresso-950/90 border border-gold-500 text-center shadow-lg group-hover:border-gold-400 transition-colors">
                  <span className="text-xs font-serif font-semibold tracking-wider text-cream-50 block">
                    AURELIA
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-gold-400 block font-mono">
                    Click to Open Google Maps ↗
                  </span>
                </div>
              </div>

              {/* Map Footer Bar */}
              <div className="relative z-10 flex justify-between items-end text-[10px] text-cream-300/60 font-mono border-t border-white/10 pt-3">
                <span>YARRA RIVER SOUTH</span>
                <span>OPEN DAILY FROM 7AM</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
