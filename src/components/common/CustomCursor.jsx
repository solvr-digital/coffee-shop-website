import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({
    active: false,
    text: '',
    variant: 'default', // default, hover, view, text
  });
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device to disable custom cursor on mobile
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorState({
          active: true,
          text: text || (type === 'view' ? 'VIEW' : ''),
          variant: type,
        });
      } else if (e.target.closest('button, a, input, [role="button"]')) {
        setCursorState({
          active: true,
          text: '',
          variant: 'hover',
        });
      } else {
        setCursorState({
          active: false,
          text: '',
          variant: 'default',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gold-500"
        style={{
          width: 6,
          height: 6,
        }}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: cursorState.active ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 700,
          mass: 0.1,
        }}
      />

      {/* Outer fluid trailing ring / capsule */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full border border-gold-500/40 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (cursorState.variant === 'view' ? 36 : cursorState.active ? 28 : 18),
          y: mousePosition.y - (cursorState.variant === 'view' ? 36 : cursorState.active ? 28 : 18),
          width: cursorState.variant === 'view' ? 72 : cursorState.active ? 56 : 36,
          height: cursorState.variant === 'view' ? 72 : cursorState.active ? 56 : 36,
          backgroundColor: cursorState.variant === 'view' 
            ? 'rgba(197, 168, 128, 0.95)' 
            : cursorState.active 
              ? 'rgba(197, 168, 128, 0.18)' 
              : 'rgba(20, 15, 11, 0.05)',
          borderColor: cursorState.variant === 'view'
            ? 'rgba(255, 255, 255, 0.8)'
            : cursorState.active
              ? 'rgba(197, 168, 128, 0.7)'
              : 'rgba(197, 168, 128, 0.3)',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        {cursorState.text && (
          <span className="text-[10px] tracking-widest font-semibold uppercase text-espresso-950 select-none">
            {cursorState.text}
          </span>
        )}
      </motion.div>
    </>
  );
}
