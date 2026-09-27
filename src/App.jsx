import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Introduction from './components/sections/Introduction';
import SignatureMenu from './components/sections/SignatureMenu';
import OurStory from './components/sections/OurStory';
import InteractiveMenu from './components/sections/InteractiveMenu';
import Experience from './components/sections/Experience';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import VisitUs from './components/sections/VisitUs';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';

import CustomCursor from './components/common/CustomCursor';
import FilmGrain from './components/common/FilmGrain';
import ReservationModal from './components/common/ReservationModal';
import GalleryLightbox from './components/common/GalleryLightbox';
import InitialLoader from './components/common/InitialLoader';
import ScrollProgress from './components/common/ScrollProgress';
import AmbientAudio from './components/common/AmbientAudio';
import { GALLERY_ITEMS } from './data/cafeData';

export default function App() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Initialize Lenis for silk-smooth international agency scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenReserve = () => setIsReserveOpen(true);
  const handleCloseReserve = () => setIsReserveOpen(false);

  const handleOpenGalleryItem = (item) => {
    setSelectedGalleryItem(item);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedGalleryItem(null);
  };

  return (
    <div className="relative min-h-screen bg-cream-100 text-espresso-900 font-sans selection:bg-gold-500 selection:text-espresso-950">
      {/* 1. Golden Scroll Progress Bar */}
      <ScrollProgress />

      {/* 2. Initial Page Loader Curtain with Animated Percentage */}
      <InitialLoader />

      {/* 3. Custom Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* 4. Film Grain Cinematic Overlay */}
      <FilmGrain />

      {/* 5. Ambient Cafe Audio Toggle */}
      <AmbientAudio />

      {/* 6. Table Reservation Modal */}
      <ReservationModal
        isOpen={isReserveOpen}
        onClose={handleCloseReserve}
      />

      {/* 7. Fullscreen Gallery Lightbox */}
      <GalleryLightbox
        isOpen={isLightboxOpen}
        item={selectedGalleryItem}
        items={GALLERY_ITEMS}
        onClose={handleCloseLightbox}
        onSelect={setSelectedGalleryItem}
      />

      {/* 8. Sticky Glassmorphic Navbar */}
      <Navbar onOpenReserve={handleOpenReserve} />

      {/* 9. Main Content Sections */}
      <main>
        <Hero onOpenReserve={handleOpenReserve} />
        <Introduction />
        <SignatureMenu onOpenReserve={handleOpenReserve} />
        <OurStory />
        <InteractiveMenu onOpenReserve={handleOpenReserve} />
        <Experience onOpenReserve={handleOpenReserve} />
        <Gallery onSelectImage={handleOpenGalleryItem} />
        <Testimonials />
        <VisitUs onOpenReserve={handleOpenReserve} />
        <FinalCTA onOpenReserve={handleOpenReserve} />
      </main>

      {/* 10. Editorial Footer */}
      <Footer />
    </div>
  );
}
