import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND } from '../../data/cafeData';
import MagneticButton from '../common/MagneticButton';

export default function Hero({ onOpenReserve }) {
  const canvasRef = useRef(null);

  // Upgraded dynamic steam wisps & warm golden light particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Steam wisps rising organically
    const particles = Array.from({ length: 45 }, () => ({
      x: canvas.width * 0.3 + Math.random() * (canvas.width * 0.4),
      y: canvas.height * 0.65 + Math.random() * (canvas.height * 0.35),
      radius: Math.random() * 2.5 + 1,
      speedY: Math.random() * 0.7 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.35 + 0.05,
      fadeSpeed: Math.random() * 0.006 + 0.002,
      fadingIn: true,
      swirlAngle: Math.random() * Math.PI * 2,
      swirlSpeed: (Math.random() - 0.5) * 0.03,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.swirlAngle += p.swirlSpeed;
        p.x += Math.sin(p.swirlAngle) * 0.6 + p.speedX;

        if (p.fadingIn) {
          p.opacity += p.fadeSpeed;
          if (p.opacity >= 0.4) p.fadingIn = false;
        } else {
          p.opacity -= p.fadeSpeed;
          if (p.opacity <= 0.02) p.fadingIn = true;
        }

        if (p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
          p.y = canvas.height * 0.75 + Math.random() * 100;
          p.x = canvas.width * 0.25 + Math.random() * (canvas.width * 0.5);
          p.opacity = 0.02;
          p.fadingIn = true;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214, 180, 130, ${p.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(214, 180, 130, 0.4)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const titleChars = BRAND.name.split('');

  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const introEl = document.getElementById('intro');
    if (introEl) introEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-espresso-950 text-cream-50 select-none"
    >
      {/* Background Image with Ambient Slow Zoom Drift */}
      <motion.div
        animate={{
          scale: [1.05, 1.12, 1.05],
          filter: ['brightness(0.6)', 'brightness(0.68)', 'brightness(0.6)'],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2400&q=88"
          alt="Aurelia Café Atmosphere"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-espresso-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/70 via-transparent to-espresso-950/70" />
      </motion.div>

      {/* Floating Canvas Steam Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Floating Ambient Corner Accents */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="hidden lg:flex absolute left-12 top-1/3 z-20 items-center gap-3 px-4 py-2 border border-gold-500/20 bg-espresso-950/60 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-cream-200 font-mono">
          Single Origin Roast · Geisha 89pts
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute right-12 bottom-1/3 z-20 items-center gap-3 px-4 py-2 border border-gold-500/20 bg-espresso-950/60 backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-cream-200 font-mono">
          Hand-Laminated Pastry Daily
        </span>
      </motion.div>

      {/* Center Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Editorial Subtitle Pill with subtle glow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2 border border-gold-500/30 bg-espresso-950/70 backdrop-blur-md mb-8 shadow-glow-gold/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-cream-200/95 font-medium">
            MELBOURNE · {BRAND.est}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
        </motion.div>

        {/* Brand Name Character Reveal */}
        <div className="overflow-hidden mb-2">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-[0.18em] text-cream-50 flex items-center justify-center">
            {titleChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: '120%', opacity: 0, rotateZ: 4 }}
                animate={{ y: '0%', opacity: 1, rotateZ: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.7 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block hover:text-gold-400 transition-colors duration-300 cursor-default"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Sub-Brand Name with subtle gold shimmer */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.45em' }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm md:text-base font-sans font-light text-gold-400/95 uppercase mb-8 gold-shimmer-text"
        >
          {BRAND.subname}
        </motion.div>

        {/* Animated Expanding Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-8"
        />

        {/* Main Heading / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          &ldquo;{BRAND.tagline}&rdquo;
        </motion.p>

        {/* Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full sm:w-auto"
        >
          <MagneticButton
            onClick={handleScrollToMenu}
            strength={18}
            className="w-full sm:w-auto"
          >
            <div className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gold-500/50 hover:border-gold-400 text-cream-100 hover:text-gold-300 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-sm group flex items-center justify-center gap-2">
              <span>Explore Menu</span>
              <span className="transform group-hover:translate-y-1 transition-transform duration-300">↓</span>
            </div>
          </MagneticButton>

          <MagneticButton
            onClick={onOpenReserve}
            strength={22}
            className="w-full sm:w-auto"
          >
            <div className="w-full sm:w-auto px-9 py-4 bg-gold-500 hover:bg-gold-400 text-espresso-950 text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-glow-gold flex items-center justify-center gap-2 group">
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator at bottom with bouncing animation */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 2, duration: 1 }}
        whileHover={{ opacity: 1, y: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cream-300/70 hover:text-gold-400 transition-colors cursor-pointer"
        aria-label="Scroll down to explore"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium font-mono">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 stroke-[1.5]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
