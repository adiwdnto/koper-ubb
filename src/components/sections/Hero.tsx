import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-brand-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2670&auto=format&fit=crop"
          alt="Photographer at work"
          className="h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
            Journalism • Storytelling • Art
          </span>
          <h1 className="mb-6 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl">
            Truth Through <br /> 
            <span className="text-transparent border-b-4 border-brand-400 [text-stroke:1px_white]">The Lens</span>
          </h1>
          <p className="editorial-text mb-10 max-w-xl text-brand-100 opacity-80">
            KOPER is the official photographer community of Universitas Bangka Belitung. We don't just take pictures; we document history, emotion, and the unspoken narratives of our environment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/gallery"
              className="flex items-center gap-2 bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-brand-950 transition-all hover:bg-brand-400 hover:text-white"
            >
              Explore Gallery <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 border border-white/30 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Learn Our Story
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical text for journalistic feel */}
      <div className="absolute bottom-10 right-10 hidden rotate-90 origin-bottom-right md:block">
        <span className="text-[10px] font-bold uppercase tracking-[1em] text-white/30 whitespace-nowrap">
          ESTABLISHED 2012 • UBB CAMPUS • BANGKA
        </span>
      </div>
    </section>
  );
};

export default Hero;
