import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-200 bg-brand-50/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Camera className="h-6 w-6 text-brand-800" />
          <span className="font-sans text-xl font-black uppercase tracking-tighter text-brand-900">
            KOPER <span className="text-brand-500 font-medium">UBB</span>
          </span>
        </Link>
        
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-semibold uppercase tracking-widest transition-colors",
                  location.pathname === item.path
                    ? "text-brand-900 underline underline-offset-8 decoration-2"
                    : "text-brand-500 hover:text-brand-800"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="md:hidden">
          {/* Simple Mobile Toggle (could be expanded) */}
          <button className="text-brand-800">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
