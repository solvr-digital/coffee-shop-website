import React, { useState } from 'react';
import { ArrowRight, Check, Instagram, Facebook } from 'lucide-react';
import { BRAND } from '../../data/cafeData';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Our Story', href: '#story' },
  { name: 'Menu', href: '#menu' },
  { name: 'Experience', href: '#experience' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Visit Us', href: '#visit' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-espresso-950 text-cream-100 border-t border-gold-500/15 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-4 space-y-4">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="inline-block">
              <span className="font-serif text-3xl sm:text-4xl text-cream-50 tracking-[0.2em] font-normal block">
                {BRAND.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-gold-400 font-sans block mt-1">
                Coffee & Pâtisserie · Melbourne
              </span>
            </a>
            <p className="text-xs sm:text-sm text-cream-300/60 font-light leading-relaxed max-w-sm pt-2">
              Slow mornings, bold coffee, and handcrafted European pâtisserie nestled in Melbourne&apos;s historic Market Street.
            </p>
            <div className="pt-2 text-[11px] text-gold-400/80 font-mono">
              {BRAND.phone} · {BRAND.email}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-xs uppercase tracking-widest text-cream-200/70 hover:text-gold-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Hours Quick View */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-6">
              Social
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-cream-200/70 hover:text-gold-300 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-gold-500/80" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-cream-200/70 hover:text-gold-300 transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-3.5 h-3.5 text-gold-500/80" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-cream-200/70 hover:text-gold-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-gold-500/80 font-bold text-xs">♫</span>
                  <span>TikTok</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-4">
              Newsletter
            </h4>
            <p className="text-xs text-cream-300/70 font-light mb-4">
              Get coffee stories in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-espresso-900 border border-gold-500/25 px-4 py-3 text-xs text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 transition-colors pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gold-400 hover:text-gold-300 p-1.5"
                  aria-label="Submit newsletter"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-gold-400 font-serif italic">
                  Merci. You have been added to our private dispatch list.
                </p>
              )}

              <p className="text-[10px] text-cream-300/40 font-light">
                We respect your inbox. Unsubscribe at any time.
              </p>
            </form>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-cream-300/50 font-light">
          <div>
            © 2026 Aurelia Coffee & Pâtisserie. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-gold-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-gold-400 transition-colors cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-gold-400 transition-colors cursor-pointer">Editorial Credits</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
