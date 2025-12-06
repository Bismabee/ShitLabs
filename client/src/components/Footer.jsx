import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const SocialIcon = ({ icon }) => (
  <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-[#D2E823] transition-colors text-[#1E2330]">
    {icon}
  </a>
);

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12">
       <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
             
             {/* Column 1 */}
             <div className="space-y-6">
                <h4 className="font-black text-xl">Company</h4>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                   <li><a href="#" className="hover:underline">The ShitLabs Blog</a></li>
                   <li><a href="#" className="hover:underline">Engineering Blog</a></li>
                   <li><a href="#" className="hover:underline">Products</a></li>
                   <li><a href="#" className="hover:underline">Careers</a></li>
                </ul>
             </div>

             {/* Column 2 */}
             <div className="space-y-6">
                <h4 className="font-black text-xl">Community</h4>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                   <li><a href="#" className="hover:underline">ShitLabs for Enterprise</a></li>
                   <li><a href="#" className="hover:underline">2025 Creator Report</a></li>
                   <li><a href="#" className="hover:underline">Charities</a></li>
                </ul>
             </div>

             {/* Column 3 */}
             <div className="space-y-6">
                <h4 className="font-black text-xl">Support</h4>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                   <li><a href="#" className="hover:underline">Help Topics</a></li>
                   <li><a href="#" className="hover:underline">Getting Started</a></li>
                   <li><a href="#" className="hover:underline">Contact Support</a></li>
                </ul>
             </div>

             {/* Column 4 */}
             <div className="space-y-6">
                <h4 className="font-black text-xl">Trust & Legal</h4>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                   <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                   <li><a href="#" className="hover:underline">Privacy Notice</a></li>
                   <li><a href="#" className="hover:underline">Cookie Notice</a></li>
                </ul>
             </div>

             {/* Buttons Column */}
             <div className="col-span-2 lg:col-span-1 space-y-4">
                <button className="w-full bg-[#E9C0E9] text-[#1E2330] py-3 rounded-[30px] font-bold text-sm hover:bg-[#D8A0D8]">
                   Log in
                </button>
                <button className="w-full bg-[#1E2330] text-white py-3 rounded-[30px] font-bold text-sm hover:bg-black">
                   Get started for free
                </button>
             </div>
          </div>

          {/* Social & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left border-t border-gray-100 pt-12">
             <div className="flex gap-6">
                <SocialIcon icon={<Instagram size={24}/>} />
                <SocialIcon icon={<Twitter size={24}/>} />
                <SocialIcon icon={<Linkedin size={24}/>} />
                <SocialIcon icon={<Youtube size={24}/>} />
             </div>
             
             <div className="flex flex-col md:items-end">
                <p className="text-xs text-gray-500 max-w-md">
                   We acknowledge the Traditional Custodians of the land on which our office stands, The Regal Chowk people of the Srinagar Nation.
                </p>
                <p className="text-xs text-gray-400 mt-2">© 2025 ShitLabs Agency</p>
             </div>
          </div>
       </div>
    </footer>
  );
};
