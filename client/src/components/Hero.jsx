import React from 'react';

const FloatingBadge = ({ text, top, right, rotate, color }) => (
  <div 
    className={`absolute px-6 py-3 rounded-full font-bold shadow-xl border-2 border-black ${color} text-[#1E2330] z-20 hover:scale-110 transition-transform cursor-default`}
    style={{ top, right, transform: `rotate(${rotate})` }}
  >
    {text}
  </div>
);

export const Hero = () => {
  return (
    <section className="pt-40 pb-20 bg-[#ffde21] min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-[#1E2330]">
            Tech built for <br/>
            creators & <br/>
            <span className="text-white">businesses.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-md leading-relaxed text-[#1E2330]/80">
            We help small to medium creators and businesses launch their dream apps and websites. Plus, we build our own tools to help you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
             <div className="relative flex-grow max-w-sm">
               <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400 select-none">shitlabs.xyz/</span>
               <input 
                 type="text" 
                 placeholder="your-idea" 
                 className="w-full pl-28 pr-6 py-4 rounded-[20px] border-none bg-white font-bold text-[#1E2330] focus:ring-4 focus:ring-[#1E2330]/20 outline-none shadow-sm"
               />
             </div>
             <button className="bg-[#E9C0E9] text-[#1E2330] px-8 py-4 rounded-[30px] font-bold hover:bg-[#D8A0D8] transition-colors whitespace-nowrap">
               Let's Build It
             </button>
          </div>
        </div>

        {/* Floating Cards (Right Side) */}
        <div className="relative h-[600px] hidden lg:block">
           <div className="absolute top-0 right-10 w-[300px] h-[580px] bg-[#254f1a] rounded-[3rem] border-8 border-[#254f1a] shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-4">
                 <div className="w-24 h-24 bg-white rounded-full mb-2"></div>
                 <div className="w-full bg-white/90 backdrop-blur-md p-4 rounded-[30px] text-center font-bold shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
                    My Online Store
                 </div>
                 <div className="w-full bg-white/90 backdrop-blur-md p-4 rounded-[30px] text-center font-bold shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
                    Creator Portfolio
                 </div>
                 <div className="w-full bg-white/90 backdrop-blur-md p-4 rounded-[30px] text-center font-bold shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
                    Book Services
                 </div>
              </div>
           </div>
           <FloatingBadge text="@shitlabs" top="20%" right="60%" rotate="-12deg" color="bg-[#E9C0E9]" />
           <FloatingBadge text="For Creators" top="60%" right="70%" rotate="6deg" color="bg-white" />
        </div>
      </div>
    </section>
  );
};
