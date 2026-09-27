import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const noiseSourceRef = useRef(null);

  const startAudio = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Warm vinyl crackle / soft brown noise simulation
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 1.8; // soft coffeehouse vinyl warmth
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      // Filter: warm lowpass
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      noise.connect(filter);
      filter.connect(masterGain);
      noise.start();
      noiseSourceRef.current = noise;

      setIsPlaying(true);
    } catch {
      // Audio context policy fallback
    }
  };

  const stopAudio = () => {
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <motion.button
      onClick={toggleAudio}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient cafe sound'}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-espresso-900/80 backdrop-blur-md border border-gold-500/30 text-cream-100 hover:text-gold-300 hover:border-gold-500/60 shadow-lg transition-colors text-[10px] tracking-widest uppercase font-mono select-none"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end gap-0.5 h-3 w-3.5">
            <span className="w-0.5 h-full bg-gold-400 animate-[bounce_1s_infinite_100ms]" />
            <span className="w-0.5 h-2 bg-gold-400 animate-[bounce_1.2s_infinite_200ms]" />
            <span className="w-0.5 h-3.5 bg-gold-400 animate-[bounce_0.8s_infinite_300ms]" />
          </div>
          <span>Ambience On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-cream-300/60" />
          <span className="text-cream-300/60">Ambience Off</span>
        </>
      )}
    </motion.button>
  );
}
