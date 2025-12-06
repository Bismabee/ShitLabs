import React from 'react';
import { FileText, ShoppingBag, ExternalLink } from 'lucide-react';

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-[#780016] text-[#E9C0E9]">
      <div className="max-w-[1200px] mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-[#E9C0E9]">
              Tools we made <br/> for you.
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We don't just build for clients. We build our own products to solve real problems for creators like you.
            </p>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
            {/* Product 1: InvoiceGPT */}
            <div className="bg-[#5B0011] p-10 rounded-[40px] border border-white/10 hover:border-[#D2E823] transition-colors group">
               <div className="w-16 h-16 bg-[#D2E823] rounded-2xl flex items-center justify-center text-[#1E2330] mb-6 group-hover:scale-110 transition-transform">
                  <FileText size={32} strokeWidth={2.5} />
               </div>
               <h3 className="text-3xl font-black text-white mb-2">InvoiceGPT</h3>
               <p className="text-[#E9C0E9]/80 font-medium mb-8 text-lg">
                  AI-powered invoicing for freelancers and creators. Create professional invoices in seconds just by chatting.
               </p>
               <a 
                 href="https://invoicegpt.org" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-[#1E2330] px-8 py-4 rounded-[30px] font-bold hover:bg-[#D2E823] transition-colors"
               >
                 Visit Now <ExternalLink size={18} />
               </a>
            </div>

            {/* Product 2: ImageSmith */}
            <div className="bg-[#E9C0E9] p-10 rounded-[40px] border border-transparent hover:border-white transition-colors group">
               <div className="w-16 h-16 bg-[#502274] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag size={32} strokeWidth={2.5} />
               </div>
               <h3 className="text-3xl font-black text-[#502274] mb-2">ImageSmith</h3>
               <p className="text-[#502274]/80 font-medium mb-8 text-lg">
                  Premium digital asset store. High-quality mockups, templates, and graphics for your next big project.
               </p>
               <a 
                 href="https://imagesmith.store" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-[#502274] text-white px-8 py-4 rounded-[30px] font-bold hover:bg-[#1E2330] transition-colors"
               >
                 Visit Now <ExternalLink size={18} />
               </a>
            </div>
         </div>
      </div>
    </section>
  );
};
