import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-light dark:bg-[#080B0C] py-20 px-6 lg:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <span className="font-serif tracking-[0.2em] text-2xl md:text-3xl text-brand-charcoal dark:text-white">
              VÉRA
            </span>
            <span className="text-brand-gold text-xs tracking-[0.4em] font-medium mt-2">
              DENTALS
            </span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <span className="text-xl md:text-2xl tracking-[0.3em] text-brand-charcoal dark:text-white font-medium">
              +91 92345 99999
            </span>
            <Link to="/contact" className="border border-brand-gold text-brand-charcoal dark:text-white hover:bg-brand-gold hover:text-white dark:hover:text-brand-dark transition-colors text-xs tracking-[0.2em] px-8 py-3 uppercase font-medium">
              NEW PATIENTS
            </Link>
          </div>
        </div>

        <div className="w-full h-px bg-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-brand-charcoal/70 dark:text-white/70">
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <p>
              15 Hill Road, Bandra West<br />
              Mumbai, Maharashtra 400050
            </p>
            <a href="#" className="text-brand-gold text-xs tracking-[0.1em] hover:text-brand-gold-dark transition-colors uppercase">
              Get Directions &raquo;
            </a>
            <p className="mt-4">
              +91 92345 99999<br />
              breezedentals@gmail.com
            </p>
          </div>

          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-brand-charcoal dark:text-white mb-2">Hours</h4>
            <div className="grid grid-cols-2 gap-2 max-w-[200px] mx-auto md:mx-0">
              <span className="text-brand-gold">Sun &ndash; Sat,</span>
              <span>9:00a - 6:00p</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-6">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-brand-charcoal dark:text-white">Share On</span>
              <div className="flex space-x-4 text-brand-gold">
                <a href="#" className="hover:text-brand-gold-dark transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-brand-gold-dark transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-brand-gold-dark transition-colors"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-24 text-center text-xs text-gray-400 flex flex-col md:flex-row justify-center items-center gap-4">
          <p>&copy; {new Date().getFullYear()} VÉRA Dentals - All Rights Reserved &reg;</p>
          <div className="hidden md:block h-3 w-px bg-gray-300"></div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
