import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-white/10 py-4 lg:py-4' : 'bg-transparent border-transparent py-6 lg:py-6'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start group relative z-50">
          <span className={`font-serif tracking-[0.2em] text-[15px] sm:text-lg lg:text-xl transition-colors duration-300 ${isHome && !scrolled ? 'text-white' : (scrolled ? 'text-white' : 'text-brand-charcoal dark:text-white')}`}>
            VÉRA
          </span>
          <span className="text-brand-gold text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.3em] font-medium mt-0.5">
            DENTALS
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center space-x-3 sm:space-x-8 lg:space-x-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
            <Link
              key={link.name}
              to={link.path}
              className={`relative py-2 text-[8px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] hover:text-brand-gold transition-colors ${
                isHome && !scrolled ? 'text-white/80' : (scrolled ? 'text-white/80' : 'text-brand-charcoal/80 dark:text-white/80')
              } ${isActive ? (isHome && !scrolled ? 'text-white' : 'text-brand-gold') : ''}`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className={`absolute bottom-0 left-0 right-0 h-[1px] ${isHome && !scrolled ? 'bg-white' : 'bg-brand-gold'}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          )})}
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-1 sm:p-2 transition-colors rounded-full ${
              isHome && !scrolled ? 'text-white hover:bg-white/10' : (scrolled ? 'text-white hover:bg-white/10' : 'text-brand-charcoal dark:text-white hover:bg-brand-charcoal/5 dark:hover:bg-white/10')
            }`}
          >
            {isDark ? <Sun size={14} className="sm:w-4 sm:h-4" /> : <Moon size={14} className="sm:w-4 sm:h-4" />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
