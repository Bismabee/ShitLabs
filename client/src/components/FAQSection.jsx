import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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

export const FAQSection = () => {
  return (
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
  );
};
