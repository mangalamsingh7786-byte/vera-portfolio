import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background texture/color */}
        <div className="absolute inset-0 z-0 bg-[#080B0C]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        {/* Center Vertical Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] md:w-[380px] h-full z-10 overflow-hidden"
        >
           <motion.img 
             initial={{ scale: 1.08 }}
             animate={{ scale: 1 }}
             transition={{ duration: 2.5, ease: "easeOut", delay: 1.2 }}
             src="/chatgpt-hero.png" 
             alt="VÉRA Dentals Hero" 
             className="w-full h-full object-cover grayscale opacity-90"
           />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-20 w-full h-full min-h-[100vh] px-5 sm:px-12 lg:px-16 flex flex-col justify-center pt-24 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
            className="w-full max-w-6xl mx-auto flex flex-col items-start mt-[12vh] sm:mt-[15vh] md:mt-24 pointer-events-none"
          >
            {/* Heading */}
            <div className="w-full flex flex-col relative z-30">
              <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.3] font-serif text-white tracking-[0.18em] font-light z-30 uppercase drop-shadow-md">
                REDEFINING DENTAL<br/>EXCELLENCE
              </h1>
              
              <div className="w-full flex justify-end mt-4 sm:mt-6 pr-2 sm:pr-8 md:pr-16 relative z-30">
                <h2 className="text-[11px] sm:text-sm md:text-xl font-sans font-medium text-brand-gold tracking-[0.3em] sm:tracking-[0.4em] uppercase drop-shadow-md">
                  BANDRA, MUMBAI
                </h2>
              </div>
            </div>

            {/* Description Box */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.1, ease: "easeOut" }}
              className="mt-10 sm:mt-12 md:mt-16 self-center md:self-end w-[85%] sm:w-auto max-w-[90%] md:max-w-md bg-[#1a1a1a]/60 backdrop-blur-md p-6 sm:p-8 pointer-events-auto relative z-40 border-t border-white/5"
            >
              <p className="text-white/90 text-[13px] sm:text-sm md:text-base leading-[1.8] font-light mb-6 md:mb-8 text-left sm:text-left">
                VÉRA Dentals redefines luxury care by combining state-of-the-art technology with individualized concierge service. With an emphasis on whole-body health, comfort, and aesthetics, we create a seamless and transformative experience for every patient.
              </p>
              <Link to="/contact" className="inline-block text-brand-gold text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] uppercase hover:text-white transition-colors border-b border-brand-gold/40 pb-1 font-medium">
                REQUEST AN APPOINTMENT
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dr. Ved Sharma Section */}
      <section className="py-32 px-6 lg:px-12 bg-white dark:bg-[#080B0C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="lg:col-span-7 relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] md:aspect-[4/3] bg-brand-dark overflow-hidden shadow-2xl group">
               <img src="/image-22.png" alt="Dr. Ved Sharma" className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105" />
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
             className="lg:col-span-4 lg:col-start-9 order-1 lg:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal dark:text-white tracking-[0.1em] mb-6 leading-tight uppercase">
              DR. VED<br/>
              SHARMA
            </h2>
            <div className="space-y-4 mb-12">
              <p className="text-brand-charcoal/70 dark:text-white/70 font-light leading-relaxed">
                With over 10 years of clinical experience, Dr. Ved Sharma brings exceptional precision and an artistic eye to comprehensive dentistry. He earned his Doctor of Dental Surgery with honors, dedicating his career to mastering advanced restorative techniques.
              </p>
              <p className="text-brand-charcoal/70 dark:text-white/70 font-light leading-relaxed">
                He has successfully helped over 900 patients achieve their dream smiles, transforming not just their confidence, but their overall health and well-being.
              </p>
            </div>
            <div className="w-8 border-t-2 border-brand-gold mb-8"></div>
            <Link to="/about" className="inline-block border border-brand-charcoal/30 dark:border-white/30 text-brand-charcoal dark:text-white hover:bg-brand-charcoal dark:hover:bg-white hover:text-white dark:hover:text-brand-dark transition-colors text-xs tracking-[0.2em] px-8 py-3 uppercase font-medium">
              LEARN MORE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-white dark:bg-[#080B0C] py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h4 className="text-brand-charcoal/50 text-xs tracking-[0.2em] uppercase mb-4">SMILE MAKEOVER</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal dark:text-white mb-6">CASE 01</h2>
            <p className="text-brand-charcoal/80 dark:text-white/80 font-light max-w-2xl leading-relaxed">
              The patient wore down her teeth after years of grinding/clenching stemming from poor tooth alignment. Dr. Thacker placed 18 Unit Lithium Disilicate Minimal Prep Veneers after orthodontic tooth movement with clear aligners (Candid Pro).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {/* Top Row */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2"
            >
              <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-[#151515]">
                <img src="/before.png" alt="Before" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gray-50 dark:bg-[#1a1a1a] text-center py-2 md:py-3 text-[10px] md:text-xs tracking-[0.2em] text-brand-charcoal/60 dark:text-white/60 uppercase">BEFORE</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-2"
            >
              <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-[#151515]">
                 <img src="/after.png" alt="After" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gray-50 dark:bg-[#1a1a1a] text-center py-2 md:py-3 text-[10px] md:text-xs tracking-[0.2em] text-brand-charcoal/60 dark:text-white/60 uppercase">AFTER</div>
            </motion.div>

            {/* Bottom Row */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2"
            >
              <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-[#151515]">
                 <img src="/before.png" alt="Before close up" className="w-full h-full object-cover scale-110" />
              </div>
              <div className="bg-gray-50 dark:bg-[#1a1a1a] text-center py-2 md:py-3 text-[10px] md:text-xs tracking-[0.2em] text-brand-charcoal/60 dark:text-white/60 uppercase">BEFORE</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-2"
            >
              <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-[#151515]">
                <img src="/after.png" alt="After close up" className="w-full h-full object-cover scale-110" />
              </div>
              <div className="bg-gray-50 dark:bg-[#1a1a1a] text-center py-2 md:py-3 text-[10px] md:text-xs tracking-[0.2em] text-brand-charcoal/60 dark:text-white/60 uppercase">AFTER</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
