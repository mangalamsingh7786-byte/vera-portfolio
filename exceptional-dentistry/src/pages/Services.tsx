import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    "COSMETIC DENTISTRY",
    "HYGIENE & CLEANING",
    "DENTAL IMPLANTS",
    "FACIAL AESTHETICS",
    "SPORTS DENTISTRY",
    "PERIODONTAL THERAPY",
    "BIO-COMPATIBLE DENTISTRY",
    "SLEEP & AIRWAY",
    "ORTHODONTICS",
    "RESTORATIVE DENTISTRY",
    "FULL MOUTH REHABILITATION",
    "TMJ/TMD",
    "ORAL SURGERY PROCEDURES"
  ];

  return (
    <div className="min-h-screen bg-brand-light dark:bg-[#080B0C] pt-24">
      {/* Hero Section */}
      <section className="bg-brand-dark relative pt-32 pb-48 px-6 lg:px-12 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-[#080B0C]">
          <div className="absolute inset-0 opacity-70 bg-[url('/image-pos.jpg')] bg-cover bg-center md:bg-[center_top_-4rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B0C] via-[#080B0C]/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-[0.2em] font-light mb-8 drop-shadow-md">
              OUR <span className="text-white/80">SERVICES</span>
            </h1>
            <p className="text-white/80 max-w-md font-light leading-relaxed drop-shadow-md">
              Our practice blends the precision of modern dentistry with the comfort of a luxury wellness experience, because we believe your health, your time, and your smile deserve nothing less.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-32 px-6 lg:px-12 bg-white dark:bg-[#080B0C] relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-charcoal dark:text-white tracking-[0.1em] leading-tight">
              COMPREHENSIVE<br/>
              <span className="text-brand-charcoal/70 dark:text-white/70">DENTAL SERVICES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <div className="max-w-sm lg:ml-auto">
              <h3 className="text-sm tracking-[0.2em] uppercase text-brand-charcoal dark:text-white font-medium mb-6 leading-relaxed">
                STATE-OF-THE-ART<br/>
                TECHNOLOGY &<br/>
                TREATMENTS IN LAS<br/>
                VEGAS, NV
              </h3>
              <p className="text-brand-charcoal/70 dark:text-white/70 font-serif italic text-sm leading-relaxed mb-6">
                Our signature service is a comprehensive, full-scope evaluation of your oral health: An Executive Physical of the Mouth. With advanced digital imaging, 3D scanning, and functional assessments, we deliver far more than a routine exam, uncovering the complete picture of your dental, airway, and whole-body health. Every phase of treatment is then carried out under one roof, ensuring elevated quality of care by the doctor who knows your case best and guides you through every step of the process.
              </p>
            </div>

            {/* Right Column (List) */}
            <div>
              <ul className="space-y-6">
                {servicesList.map((service, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-200 pb-4"
                  >
                    <Link to="/contact" className="text-xs md:text-sm tracking-[0.2em] uppercase text-brand-charcoal/80 dark:text-white/80 hover:text-brand-gold transition-colors inline-block w-full">
                      {service}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-12 text-right">
                <Link to="/contact" className="inline-block border border-brand-charcoal/30 dark:border-white/30 text-brand-charcoal dark:text-white text-xs tracking-[0.2em] px-8 py-3 hover:bg-brand-charcoal dark:hover:bg-white hover:text-white dark:hover:text-brand-dark transition-colors">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visual Break */}
      <section className="py-24 px-6 bg-brand-light dark:bg-[#080B0C] relative overflow-hidden flex items-center justify-center">
        <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
                <h3 className="text-sm tracking-[0.2em] uppercase text-brand-charcoal dark:text-white font-medium mb-6">
                  TREATMENTS &<br/>EXAMS
                </h3>
                <p className="text-brand-charcoal/70 dark:text-white/70 font-light text-sm leading-relaxed mb-8">
                  We take a whole-body approach to your oral health. It starts with what we call the executive physical of the mouth. It's a one of a kind first appointment where we look much deeper than just your teeth and gums.
                </p>
                 <div className="w-8 border-t-2 border-brand-gold"></div>
            </div>
            
            <div className="md:w-2/3 aspect-[4/3] bg-brand-dark overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop" alt="Treatment" className="w-full h-full object-cover opacity-80 grayscale mix-blend-luminosity" />
            </div>
        </div>
      </section>
    </div>
  );
}
