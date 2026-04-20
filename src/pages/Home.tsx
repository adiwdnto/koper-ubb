import React from 'react';
import Hero from '@/src/components/sections/Hero';
import { motion } from 'motion/react';
import { Camera, Newspaper, Users } from 'lucide-react';

const Home: React.FC = () => {
  const highlights = [
    {
      title: "Documentary",
      icon: <Newspaper className="h-8 w-8" />,
      description: "Capturing real-world events and social issues with integrity and precision."
    },
    {
      title: "Street Photography",
      icon: <Camera className="h-8 w-8" />,
      description: "Exploring the candid moments of campus life and urban Bangka Belitung."
    },
    {
      title: "Portraits",
      icon: <Users className="h-8 w-8" />,
      description: "Revealing the human soul through intimate and professional portraiture."
    }
  ];

  return (
    <div className="bg-brand-50 pb-20">
      <Hero />
      
      {/* Featured Quote / Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-brand-900 text-4xl md:text-5xl mb-6">
              REDEFINING <span className="text-brand-400">VISION</span>
            </h2>
            <p className="editorial-text text-brand-700 italic border-l-4 border-brand-200 pl-6 py-2">
              "Photography is the only language that can be understood anywhere in the world. At KOPER, we speak that language fluently to bridge the gap between witness and audience."
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] overflow-hidden bg-brand-200">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop" 
                alt="Camera gear" 
                className="h-full w-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-brand-200 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2548&auto=format&fit=crop" 
                alt="Lens" 
                className="h-full w-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-brand-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">Our Core Pillars</span>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter sm:text-5xl">Technique & Truth</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="border border-white/10 p-8 hover:bg-white/5 transition-all group"
              >
                <div className="mb-6 text-brand-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="editorial-text text-brand-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newspaper Style Grid Preview */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-brand-200 pb-4 flex justify-between items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Featured Releases</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-900">Weekly Archive</h2>
          </div>
          <a href="/gallery" className="text-xs font-bold uppercase tracking-widest border-b-2 border-brand-900 pb-1">View All</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 aspect-video bg-brand-200 relative group overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1533167649158-6d508895b680?q=80&w=2664&auto=format&fit=crop" 
              alt="Feature 1" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-brand-900/90 p-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400">Field Report • 20 Apr 2026</span>
              <h3 className="text-lg font-bold uppercase leading-tight mt-1">The Silence of the Campus at Dawn</h3>
            </div>
          </div>
          <div className="aspect-square bg-brand-200 overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2658&auto=format&fit=crop" 
              alt="Feature 2" 
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-square bg-brand-200 overflow-hidden">
             <img 
              src="https://bp3l.com/image/gallery-g13.jpg?q=80&w=2664&auto=format&fit=crop" 
              alt="Feature 3" 
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
