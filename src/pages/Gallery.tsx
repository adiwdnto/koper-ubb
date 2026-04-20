import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Documentary', 'Street', 'Events', 'Nature'];
  
  const items = [
    { id: 1, title: 'The Fishermen', category: 'Documentary', image: 'https://images.unsplash.com/photo-1500313327693-01058bb3801f?q=80&w=2574&auto=format&fit=crop' },
    { id: 2, title: 'Bangka Morning', category: 'Street', image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2658&auto=format&fit=crop' },
    { id: 3, title: 'Graduation Day', category: 'Events', image: 'https://images.unsplash.com/photo-1523050853023-8c2d2909f4d3?q=80&w=2574&auto=format&fit=crop' },
    { id: 4, title: 'Wild Coast', category: 'Nature', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop' },
    { id: 5, title: 'Market Chaos', category: 'Documentary', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2574&auto=format&fit=crop' },
    { id: 6, title: 'Library Study', category: 'Street', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2673&auto=format&fit=crop' },
    { id: 7, title: 'Protest', category: 'Events', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2669&auto=format&fit=crop' },
    { id: 8, title: 'Sunset at UBB', category: 'Nature', image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2670&auto=format&fit=crop' },
    { id: 9, title: 'Shadow Play', category: 'Street', image: 'https://images.unsplash.com/photo-1510133769068-ad0a019488a4?q=80&w=2670&auto=format&fit=crop' },
  ];

  const filteredItems = filter === 'All' ? items : items.filter(i => i.category === filter);

  return (
    <div className="bg-brand-50 min-h-screen">
      {/* Header */}
      <header className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">Captured Moments</span>
              <h1 className="mt-4 text-5xl font-black uppercase tracking-tighter md:text-7xl">The Archive</h1>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-2 backdrop-blur-sm border border-white/10 rounded-full">
              <Search className="ml-4 h-5 w-5 text-brand-400" />
              <input 
                type="text" 
                placeholder="SEARCH STORIES..." 
                className="bg-transparent border-none outline-none text-xs font-bold uppercase tracking-widest py-2 pr-4 w-48 md:w-64"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-brand-50 border-b border-brand-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex space-x-12 py-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                  filter === cat ? 'text-brand-900 border-b-2 border-brand-900 pb-2 -mb-2' : 'text-brand-400 hover:text-brand-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden bg-brand-200 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white p-4 h-12 w-12 rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Camera className="text-brand-900 h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 border-l-2 border-brand-200 pl-4 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400">{item.category}</span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-brand-900 mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="py-24 text-center">
          <p className="editorial-text text-brand-400">No stories found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
