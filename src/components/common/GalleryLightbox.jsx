import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({ isOpen, item, items, onClose, onSelect }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1050] flex items-center justify-center p-4 md:p-10 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso-950/95 backdrop-blur-xl"
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 text-cream-300/70 hover:text-gold-400 p-2 transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-8 h-8 stroke-[1.5]" />
          </button>

          {/* Prev / Next buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-20 text-cream-300/60 hover:text-gold-400 p-3 bg-espresso-900/60 border border-white/10 hover:border-gold-500/40 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-20 text-cream-300/60 hover:text-gold-400 p-3 bg-espresso-900/60 border border-white/10 hover:border-gold-500/40 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <div className="overflow-hidden border border-gold-500/20 shadow-2xl bg-espresso-950">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[70vh] w-auto object-contain select-none"
              />
            </div>

            {/* Editorial Caption Bar */}
            <div className="mt-4 text-center max-w-xl">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-medium">
                {item.category} · 0{currentIndex + 1} / 0{items.length}
              </span>
              <h4 className="text-xl font-serif text-cream-50 font-normal mt-1">
                {item.title}
              </h4>
              <p className="text-cream-300/70 text-xs sm:text-sm mt-1 font-light italic">
                {item.caption}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
