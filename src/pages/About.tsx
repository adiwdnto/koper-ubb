import React from 'react';
import { motion } from 'motion/react';
import { Camera, Award, Newspaper, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-brand-50 min-h-screen">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">Our Identity</span>
            <h1 className="mt-6 text-6xl font-black uppercase tracking-tighter text-brand-900 md:text-8xl leading-[0.85]">
              KOPER <br />
              <span className="text-brand-400">COMMUNITY</span>
            </h1>
            <p className="editorial-text mt-12 text-brand-700 max-w-xl">
              Founded in 2012, KOPER (Komunitas Photographer) at Universitas Bangka Belitung is more than just a club. We are a collective of visual journalists, artists, and historians dedicated to capturing the soul of our island and the spirit of our university.
            </p>
            <p className="editorial-text mt-6 text-brand-600 max-w-xl leading-relaxed">
              We believe that every pixel should tell a truth. Our approach merges technical mastery with the ethical rigor of journalism, ensuring that whether we are covering a campus event or exploring a remote village, our work remains honest and impactful.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden bg-brand-900">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2548&auto=format&fit=crop" 
                alt="Student Photographer" 
                className="h-full w-full object-cover opacity-80 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-400 p-8 text-white hidden md:block">
              <span className="text-5xl font-black italic">14+</span>
              <p className="text-xs font-bold uppercase tracking-widest mt-2">Years of Legacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-brand-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Award className="h-10 w-10 text-brand-400 mb-6" />
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4">Excellence</h3>
              <p className="text-brand-300 text-sm leading-relaxed">Continuous learning of the craft, from fundamental optics to post-processing mastery.</p>
            </div>
            <div>
              <Newspaper className="h-10 w-10 text-brand-400 mb-6" />
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4">Integrity</h3>
              <p className="text-brand-300 text-sm leading-relaxed">Documenting reality without manipulation. We capture the world as it is, not as we want it to be.</p>
            </div>
            <div>
              <Globe className="h-10 w-10 text-brand-400 mb-6" />
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4">Community</h3>
              <p className="text-brand-300 text-sm leading-relaxed">A sanctuary for students of all backgrounds to find their visual voice and share perspectives.</p>
            </div>
            <div>
              <Camera className="h-10 w-10 text-brand-400 mb-6" />
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4">Equipment</h3>
              <p className="text-brand-300 text-sm leading-relaxed">From vintage analog to modern mirrorless, we embrace all tools that serve the narrative.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Roles */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="border-b-4 border-brand-900 pb-12 mb-16">
          <h2 className="text-brand-900 text-5xl font-black uppercase tracking-tighter">OUR DOCTRINE</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="p-8 border border-brand-200">
            <h4 className="text-brand-400 text-6xl font-black italic mb-4 opacity-20">01</h4>
            <h3 className="font-bold text-xl mb-4 text-brand-900 uppercase">Observe First</h3>
            <p className="editorial-text text-brand-600 text-base">Before the shutter clicks, the photographer must understand the light, the subject, and the context. Patience is our primary lens.</p>
          </div>
          <div className="p-8 border border-brand-200 bg-brand-100">
            <h4 className="text-brand-400 text-6xl font-black italic mb-4 opacity-20">02</h4>
            <h3 className="font-bold text-xl mb-4 text-brand-900 uppercase">Minimal Impact</h3>
            <p className="editorial-text text-brand-600 text-base">The photographer is a ghost. We do not interfere with the scene. We preserve the purity of the candid moment.</p>
          </div>
          <div className="p-8 border border-brand-200">
            <h4 className="text-brand-400 text-6xl font-black italic mb-4 opacity-20">03</h4>
            <h3 className="font-bold text-xl mb-4 text-brand-900 uppercase">Final Output</h3>
            <p className="editorial-text text-brand-600 text-base">Every image we release must meet our editorial standards. We don't flood; we curate. Every choice is intentional.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
