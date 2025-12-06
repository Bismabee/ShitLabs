import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Plus, 
  Minus, 
  Check, 
  Globe, 
  Smartphone, 
  Zap,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ExternalLink,
  ShoppingBag,
  FileText
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-[#1E2330] overflow-x-hidden selection:bg-[#D2E823] selection:text-[#1E2330]">
      
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

      {/* --- HERO SECTION (Lime Green) --- */}
      <section className="pt-40 pb-20 bg-[#D2E823] min-h-screen flex items-center relative overflow-hidden">
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

      {/* --- OUR PRODUCTS (New Section) --- */}
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
                   className="inline-flex items-center gap-2 bg-[#502274] text-white px-8 py-4 rounded-[30px] font-bold hover:bg-[#1E2330] transition-colors"
                 >
                   Visit Now <ExternalLink size={18} />
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* --- SERVICES / PROJECTS (Lavender) --- */}
      <section id="projects" className="py-32 bg-[#E9C0E9]">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="w-full aspect-square bg-[#502274] rounded-[3rem] flex items-center justify-center p-12 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full h-full object-cover" />
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

      {/* --- PRICING SECTION --- */}
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
                 <a href="mailto:support@shitlabs.xyz" className="w-full bg-[#EFF0EC] text-[#1E2330] py-4 rounded-[30px] font-bold text-center hover:bg-[#E0E2D9]">Get Started</a>
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
                 <a href="mailto:support@shitlabs.xyz" className="w-full bg-[#D2E823] text-black py-4 rounded-[30px] font-bold text-center hover:bg-[#c2d61b]">Scale Now</a>
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
                 <a href="mailto:support@shitlabs.xyz" className="w-full bg-[#1E2330] text-white py-4 rounded-[30px] font-bold text-center hover:bg-black">Contact Sales</a>
              </div>
           </div>
        </div>
      </section>

      {/* --- CLIENTS SECTION --- */}
      <section className="py-32 bg-white text-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
           <h2 className="text-4xl md:text-6xl font-black mb-16 text-[#1E2330]">
             Trusted by <br className="hidden md:block"/>
             <span className="text-[#502274]">creators worldwide</span>
           </h2>
           
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <ClientCircle img="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80" name="Vertex" />
              <ClientCircle img="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=80" name="Smile" />
              <ClientCircle img="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&w=200&q=80" name="Studio" />
              <ClientCircle img="https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=200&q=80" name="Bolt" />
           </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-32 bg-[#F3F3F1]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-16">Questions? Answered.</h2>
          <div className="space-y-4">
             <AccordionItem question="Why do I need a website/app?" />
             <AccordionItem question="How fast can you deliver?" />
             <AccordionItem question="Do you support us after launch?" />
             <AccordionItem question="Is it affordable for small creators?" />
          </div>
        </div>
      </section>

      {/* --- JUMPSTART BANNER (Bottom CTA) --- */}
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

      {/* --- FOOTER (Replica) --- */}
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

    </div>
  );
};

// --- SUBCOMPONENTS ---

const FloatingBadge = ({ text, top, right, rotate, color }) => (
  <div 
    className={`absolute px-6 py-3 rounded-full font-bold shadow-xl border-2 border-black ${color} text-[#1E2330] z-20 hover:scale-110 transition-transform cursor-default`}
    style={{ top, right, transform: `rotate(${rotate})` }}
  >
    {text}
  </div>
);

const ClientCircle = ({ img, name }) => (
  <div className="group cursor-pointer">
     <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-black transition-all mb-4 mx-auto">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
     </div>
  </div>
);

const AccordionItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#F3F3F1] rounded-[20px] overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full p-8 flex items-center justify-between text-left hover:bg-[#EBEBE9]"
      >
        <span className="text-xl font-bold text-[#1E2330]">{question}</span>
        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 px-8 pb-8' : 'max-h-0'}`}>
        <p className="text-gray-600 font-medium">
          We provide custom solutions tailored to your specific needs, ensuring high quality and satisfaction.
        </p>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-[#D2E823] transition-colors text-[#1E2330]">
    {icon}
  </a>
);

export default App;