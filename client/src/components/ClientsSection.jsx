import React from 'react';

const ClientCircle = ({ img, name }) => (
  <div className="group cursor-pointer">
     <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-black transition-all mb-4 mx-auto">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
     </div>
  </div>
);

export const ClientsSection = () => {
  return (
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
  );
};
