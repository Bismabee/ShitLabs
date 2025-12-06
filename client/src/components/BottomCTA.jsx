import React from 'react';

export const BottomCTA = () => {
  return (
    <section className="py-32 bg-[#502274] text-center px-6">
       <h2 className="text-5xl md:text-7xl font-black text-[#E9C0E9] mb-12 max-w-4xl mx-auto leading-tight">
          Jumpstart your corner of the internet today
       </h2>
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
           <div className="relative w-full">
               <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400 select-none text-sm">shitlabs.xyz/</span>
               <input 
                 type="text" 
                 placeholder="yourname" 
                 className="w-full pl-28 pr-6 py-4 rounded-[12px] border-none bg-white font-bold text-[#1E2330] focus:ring-4 focus:ring-[#E9C0E9]/50 outline-none"
               />
           </div>
           <button className="w-full sm:w-auto bg-[#E9C0E9] text-[#1E2330] px-8 py-4 rounded-[30px] font-bold hover:bg-[#D8A0D8] transition-colors whitespace-nowrap">
             Start Building
           </button>
       </div>
    </section>
  );
};
