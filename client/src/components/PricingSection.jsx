import React from 'react';
import { Check } from 'lucide-react';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 bg-[#F3F3F1]">
      <div className="max-w-[1200px] mx-auto px-6">
         <h2 className="text-5xl md:text-7xl font-black text-center mb-16 text-[#1E2330]">
           Simple pricing <br/> for creators.
         </h2>
         
         <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-10 rounded-[40px] bg-white border-2 border-transparent hover:border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col">
               <h3 className="text-2xl font-black mb-2">Starter</h3>
               <div className="text-4xl font-black mb-6">$2,500</div>
               <p className="text-gray-600 font-medium mb-8">Perfect for a new app idea or a professional portfolio website.</p>
               <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 font-bold text-sm"><Check size={18} className="text-gray-400"/> Mobile or Web App</li>
                  <li className="flex items-center gap-3 font-bold text-sm"><Check size={18} className="text-gray-400"/> Core Features</li>
                  <li className="flex items-center gap-3 font-bold text-sm"><Check size={18} className="text-gray-400"/> 2 Weeks Delivery</li>
               </ul>
               <a href="mailto:shakirarly@gmail.com" className="w-full bg-[#EFF0EC] text-[#1E2330] py-4 rounded-[30px] font-bold text-center hover:bg-[#E0E2D9]">Get Started</a>
            </div>

            {/* Pro (Popular) */}
            <div className="p-10 rounded-[40px] bg-[#502274] text-white relative transform md:-translate-y-4 hover:scale-[1.02] transition-transform duration-300 flex flex-col shadow-2xl">
               <div className="absolute top-6 right-8 bg-[#D2E823] text-black px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                 Most Popular
               </div>
               <h3 className="text-2xl font-black mb-2 text-[#D2E823]">Growth</h3>
               <div className="text-4xl font-black mb-6">$5,000</div>
               <p className="text-white/80 font-medium mb-8">For businesses ready to scale with custom designs and features.</p>
               <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 font-bold text-sm"><Check size={18} className="text-[#D2E823]"/> Custom UI/UX Design</li>
                  <li className="flex items-center gap-3 font-bold text-sm"><Check size={18} className="text-[#D2E823]"/> Admin Dashboard</li>
                  <li className="flex items-center gap-3 font-bold text-sm"><Check size={18} className="text-[#D2E823]"/> Payment Integration</li>
               </ul>
               <a href="mailto:shakirarly@gmail.com" className="w-full bg-[#D2E823] text-black py-4 rounded-[30px] font-bold text-center hover:bg-[#c2d61b]">Scale Now</a>
            </div>

            {/* Enterprise */}
            <div className="p-10 rounded-[40px] bg-white border-2 border-transparent hover:border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col">
               <h3 className="text-2xl font-black mb-2">Business</h3>
               <div className="text-4xl font-black mb-6">Custom</div>
               <p className="text-gray-600 font-medium mb-8">Complex platforms for established brands and large organizations.</p>
               <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 font-bold text-sm"><Check size={18} className="text-gray-400"/> Dedicated Team</li>
                  <li className="flex items-center gap-3 font-bold text-sm"><Check size={18} className="text-gray-400"/> Cloud Architecture</li>
                  <li className="flex items-center gap-3 font-bold text-sm"><Check size={18} className="text-gray-400"/> 24/7 SLA Support</li>
               </ul>
               <a href="mailto:shakirarly@gmail.comshitlabs.xyz" className="w-full bg-[#1E2330] text-white py-4 rounded-[30px] font-bold text-center hover:bg-black">Contact Sales</a>
            </div>
         </div>
      </div>
    </section>
  );
};
