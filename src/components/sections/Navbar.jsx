import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../../data/cafeData';
import MagneticButton from '../common/MagneticButton';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Our Story', href: '#story' },
  { name: 'Menu', href: '#menu' },
  { name: 'Experience', href: '#experience' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Visit Us', href: '#visit' },
];

export default function Navbar({ onOpenReserve }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-espresso-950/85 backdrop-blur-md border-b border-gold-500/15 py-4 shadow-xl'
            : 'bg-gradient-to-b from-espresso-950/70 via-espresso-950/25 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex flex-col tracking-widest text-left"
          >
            <span className="font-serif text-2xl sm:text-3xl text-cream-50 font-normal tracking-[0.2em] group-hover:text-gold-400 transition-colors">
              {BRAND.name}
            </span>
            <span className="text-[8px] uppercase tracking-[0.35em] text-gold-400/80 -mt-1 font-sans">
              Coffee & Pâtisserie
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-xs uppercase tracking-[0.2em] text-cream-200/80 hover:text-gold-300 transition-colors py-1 group font-medium"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center space-x-5">
            <MagneticButton onClick={onOpenReserve} strength={15}>
              <div className="relative overflow-hidden group border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500 text-cream-100 hover:text-espresso-950 px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-glow-gold/20">
                <span className="relative z-10 flex items-center gap-1.5">
                  Reserve a Table
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-cream-100 hover:text-gold-400 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-espresso-950/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-8"
          >
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500/80 block">
                Menu Directory
              </span>
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    className="text-2xl font-serif text-cream-100 hover:text-gold-400 transition-colors flex items-center justify-between border-b border-white/5 pb-3"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-sans tracking-widest text-gold-500/60">0{idx + 1}</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="w-full py-3.5 bg-gold-500 text-espresso-950 text-xs font-medium uppercase tracking-[0.25em] flex items-center justify-center gap-2"
              >
                <span>Reserve a Table</span>
                <span>→</span>
              </button>
              <div className="text-center text-[10px] tracking-widest text-cream-300/50 uppercase font-mono">
                {BRAND.address}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
