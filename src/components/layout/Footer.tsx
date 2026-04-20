import React from 'react';
import { Camera, Globe, Mail, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-200 bg-brand-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-6 w-6 text-brand-800" />
              <span className="font-sans text-xl font-black uppercase tracking-tighter text-brand-900">
                KOPER <span className="text-brand-500 font-medium">UBB</span>
              </span>
            </div>
            <p className="editorial-text text-brand-600 max-w-md">
              The official photography club of Universitas Bangka Belitung. Capturing the essence of life, truth, and society through a journalistic lens.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm font-semibold text-brand-600 uppercase tracking-wider">
              <li><a href="/" className="hover:text-brand-900 transition-colors">Home</a></li>
              <li><a href="/gallery" className="hover:text-brand-900 transition-colors">Gallery</a></li>
              <li><a href="/about" className="hover:text-brand-900 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-4">Contact</h3>
            <div className="flex gap-4">
              <a href="#" className="text-brand-500 hover:text-brand-900 transition-colors"><Globe className="h-5 w-5" /></a>
              <a href="#" className="text-brand-500 hover:text-brand-900 transition-colors"><Mail className="h-5 w-5" /></a>
              <a href="#" className="text-brand-500 hover:text-brand-900 transition-colors"><Share2 className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-brand-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-brand-400 uppercase tracking-widest">
            © {new Date().getFullYear()} KOPER UBB. All rights reserved.
          </p>
          <p className="text-xs font-medium text-brand-300 uppercase tracking-widest italic">
            Visual Storytelling for the Next Generation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
