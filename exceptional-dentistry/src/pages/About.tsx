import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-light dark:bg-[#080B0C]">
      {/* Hero Section */}
      <section className="bg-brand-dark pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Landscape Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full aspect-[21/9] md:aspect-[3/1] bg-gray-800 overflow-hidden mb-12 relative"
          >
             <img 
               src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop" 
               alt="Landscape" 
               className="w-full h-full object-cover opacity-70 sepia-[0.3]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
          </motion.div>
          
          <div className="max-w-4xl relative z-20">
            <h4 className="text-brand-gold text-xs tracking-[0.3em] mb-4 uppercase">About Us</h4>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white tracking-[0.1em] font-light mb-16 leading-tight">
              VÉRA<br/>
              <span className="ml-0 md:ml-32">DENTALS</span>
            </h1>
            
            <div className="max-w-md ml-0 md:ml-32 space-y-6">
              <p className="text-white/80 font-light leading-relaxed">
                As Mumbai's premier destination for high-end, comprehensive dental care, we embrace a whole-body approach that views the mouth as integral to overall wellness.
              </p>
              <p className="text-white/80 font-light leading-relaxed">
                Every detail, from advanced imaging and precision treatment planning to our tranquil environment, has been curated to exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-32 px-6 lg:px-12 bg-brand-light dark:bg-[#080B0C] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 lg:col-start-2">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal dark:text-white tracking-[0.1em] mb-6 leading-tight">
              DENTAL<br/>
              EXCELLENCE AT<br/>
              EVERY LEVEL
            </h2>
            <p className="text-brand-charcoal/70 dark:text-white/70 font-light leading-relaxed mb-12">
              We are deeply committed to caring for people. For us, excellence is more than a goal; it's a process that delivers personalized care, attention to every fine detail and a culture of comfort.
            </p>
            <div className="w-8 border-t-2 border-brand-gold"></div>
          </div>
          
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] bg-gray-200 dark:bg-[#222] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=1200&auto=format&fit=crop" alt="Smiling patient" className="w-full h-full object-cover grayscale opacity-90" />
            </div>
            <div className="absolute top-4 right-4 flex items-center bg-black/40 backdrop-blur-sm px-6 py-2">
               <span className="text-brand-gold text-xs tracking-[0.2em] mr-6">COMPREHENSIVE TREATMENTS</span>
               <Link to="/services" className="text-white text-xs tracking-[0.2em] border-b border-white/50 pb-0.5 hover:text-brand-gold transition-colors">LEARN MORE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 px-6 lg:px-12 bg-white dark:bg-[#080B0C]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
          {/* Left branding bar */}
          <div className="hidden md:flex flex-col items-center justify-end w-16 flex-shrink-0 relative h-[600px]">
             <div className="absolute top-[40%] -translate-y-1/2 -rotate-90 whitespace-nowrap text-brand-gold tracking-[0.3em] text-xs">
                DRS. THACKER & BUSTOS
             </div>
             <div className="bg-brand-dark p-4 w-full aspect-square flex items-center justify-center mt-auto">
                 <span className="font-serif text-brand-gold text-xl leading-none text-center">T<br/>B</span>
             </div>
          </div>

          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="relative aspect-[3/4] bg-brand-dark overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" alt="Dr. Thacker" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute bottom-0 right-0 bg-brand-gold text-brand-dark text-xs tracking-[0.2em] px-6 py-3 uppercase">
                 DR. THACKER
               </div>
            </div>
            
            <div className="relative aspect-[3/4] bg-brand-dark overflow-hidden group mt-0 md:mt-24">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Dr. Bustos" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute bottom-0 right-0 bg-brand-gold text-brand-dark text-xs tracking-[0.2em] px-6 py-3 uppercase">
                 DR. BUSTOS
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
