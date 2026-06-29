import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080B0C] pt-24">
      {/* Hero Section */}
      <section className="bg-brand-dark relative h-[40vh] md:h-[50vh] flex items-center px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center sepia-[0.3]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-gold tracking-[0.2em] font-light">
              CONTACT US
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Info Column */}
          <div className="md:col-span-4 space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-brand-charcoal dark:text-white mb-2">VÉRA Dentals</h3>
              <a href="mailto:breezedentals@gmail.com" className="text-brand-charcoal/70 dark:text-white/70 text-sm hover:text-brand-gold transition-colors">
                breezedentals@gmail.com
              </a>
            </div>

            <div className="text-brand-charcoal/70 dark:text-white/70 text-sm leading-relaxed">
              <p>15 Hill Road, Bandra West</p>
              <p>Mumbai, Maharashtra 400050</p>
              <p className="mt-4"><strong className="text-brand-charcoal dark:text-white font-medium">Phone:</strong> +91 92345 99999</p>
            </div>

            <div>
              <h4 className="font-serif text-xl text-brand-charcoal dark:text-white mb-4">Hours</h4>
              <div className="text-brand-charcoal/70 dark:text-white/70 text-sm space-y-2">
                <p>Sun &ndash; Sat, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs text-brand-charcoal dark:text-white mb-2">Name: (required)</label>
                  <input type="text" required className="border border-gray-300 p-3 focus:outline-none focus:border-brand-gold transition-colors bg-brand-light dark:bg-[#080B0C]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-brand-charcoal dark:text-white mb-2">Company:</label>
                  <input type="text" className="border border-gray-300 p-3 focus:outline-none focus:border-brand-gold transition-colors bg-brand-light dark:bg-[#080B0C]" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs text-brand-charcoal dark:text-white mb-2">Phone Number:</label>
                  <input type="tel" className="border border-gray-300 p-3 focus:outline-none focus:border-brand-gold transition-colors bg-brand-light dark:bg-[#080B0C]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-brand-charcoal dark:text-white mb-2">Email: (required)</label>
                  <input type="email" required className="border border-gray-300 p-3 focus:outline-none focus:border-brand-gold transition-colors bg-brand-light dark:bg-[#080B0C]" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs text-brand-charcoal dark:text-white mb-2">Comment: (required)</label>
                <textarea required rows={6} className="border border-gray-300 p-3 focus:outline-none focus:border-brand-gold transition-colors resize-none bg-brand-light dark:bg-[#080B0C]"></textarea>
                <span className="text-[10px] text-gray-500 mt-2 italic">Links will be considered spam.</span>
              </div>

              <div className="space-y-2 pt-4">
                <p className="text-xs text-brand-charcoal dark:text-white mb-4">How did you hear about us? (check all that apply)</p>
                {['Brochure', 'Email', 'Existing Client', 'Web Search', 'Word of Mouth', 'Other'].map((option) => (
                  <label key={option} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="border-gray-300 rounded-none text-brand-gold focus:ring-brand-gold" />
                    <span className="text-sm text-brand-charcoal/80 dark:text-white/80">{option}</span>
                  </label>
                ))}
              </div>

              <div className="pt-8">
                <button type="submit" className="border border-gray-300 text-brand-charcoal dark:text-white text-xs tracking-[0.2em] px-10 py-3 hover:bg-brand-charcoal dark:hover:bg-white hover:border-brand-charcoal dark:border-white hover:text-white dark:hover:text-brand-dark transition-all">
                  SEND
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
