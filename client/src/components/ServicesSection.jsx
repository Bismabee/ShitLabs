import React from 'react';

export const ServicesSection = () => {
  return (
    <section id="projects" className="py-32 bg-[#E9C0E9]">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="w-full aspect-square bg-[#502274] rounded-[3rem] flex items-center justify-center p-12 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full h-full object-cover" alt="Project showcase" />
           </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-[#502274] leading-[0.95]">
            We build your <br/>
            dream app <br/>
            in weeks.
          </h2>
          <p className="text-xl font-medium text-[#502274]">
            Whether you're a TikTok star launching merch or a local business going digital, we handle the tech. Apps, websites, AI tools—custom made for you.
          </p>
          <button className="bg-[#502274] text-white px-8 py-4 rounded-[30px] font-bold hover:scale-105 transition-transform">
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
};
