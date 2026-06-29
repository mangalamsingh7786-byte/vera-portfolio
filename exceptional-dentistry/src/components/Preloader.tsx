import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const fontStyles = [
  { fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontStyle: 'normal', letterSpacing: '0.4em' },
  { fontFamily: '"Helvetica Neue", Helvetica, sans-serif', fontWeight: 900, fontStyle: 'normal', letterSpacing: '0.2em' },
  { fontFamily: '"Times New Roman", Times, serif', fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.5em' },
  { fontFamily: '"Arial Black", "Impact", sans-serif', fontWeight: 900, fontStyle: 'normal', letterSpacing: '0.1em' },
  { fontFamily: '"Courier New", Courier, monospace', fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.3em' },
  { fontFamily: '"Georgia", serif', fontWeight: 700, fontStyle: 'normal', letterSpacing: '0.4em' },
  { fontFamily: '"Inter", sans-serif', fontWeight: 100, fontStyle: 'normal', letterSpacing: '0.8em' },
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    // Cycle fonts rapidly to fit all 7 within 1.1 seconds
    const fontInterval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fontStyles.length);
    }, 150);

    // End preloader after 1.1 seconds
    const completeTimeout = setTimeout(() => {
      clearInterval(fontInterval);
      onComplete();
    }, 1100);

    return () => {
      clearInterval(fontInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <motion.span
          className="text-white text-[15px] md:text-[17px] absolute uppercase"
          style={{ ...fontStyles[currentFontIndex], transition: 'none' }}
        >
          VÉRA™
        </motion.span>
      </div>
    </motion.div>
  );
}
