import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ isMenuOpen, setIsMenuOpen, scrolled, scrollTo }) => {
  return (
    <>
      {/* --- NAVBAR (Ultra Glassy) --- */}
      <nav className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 rounded-full transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-2xl shadow-sm py-3 px-6' : 'bg-transparent py-4 px-0'}`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="font-black text-2xl tracking-tighter">ShitLabs<span className="text-[#D2E823]">.</span></span>
          </div>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-8 font-semibold text-sm ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            <button onClick={() => scrollTo('products')} className="hover:opacity-60 transition-opacity">Our Products</button>
            <button onClick={() => scrollTo('projects')} className="hover:opacity-60 transition-opacity">Services</button>
            <button onClick={() => scrollTo('pricing')} className="hover:opacity-60 transition-opacity">Pricing</button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a href="mailto:support@shitlabs.xyz" className="bg-[#1E2330] text-white px-6 py-3 rounded-[30px] font-bold text-sm hover:scale-105 transition-transform">
              Start Project
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 bg-white rounded-full shadow-sm">
               {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6">
           <button onClick={() => scrollTo('products')} className="text-left font-black text-3xl">Our Products</button>
           <button onClick={() => scrollTo('projects')} className="text-left font-black text-3xl">Services</button>
           <button onClick={() => scrollTo('pricing')} className="text-left font-black text-3xl">Pricing</button>
           <div className="h-px bg-gray-100 w-full my-4"></div>
           <a href="mailto:support@shitlabs.xyz" className="bg-[#D2E823] text-[#1E2330] w-full py-4 rounded-[30px] font-bold text-lg text-center">Start Project</a>
        </div>
      )}
    </>
  );
};
