import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";

import imageProduct1 from "@/assets/images/regenerated_image_1784052374317.jpg";
import imageProduct2 from "@/assets/images/regenerated_image_1784052375869.jpg";
import imageProduct3 from "@/assets/images/regenerated_image_1784052373175.jpg";
import imageProduct4 from "@/assets/images/regenerated_image_1784052376727.jpg";

import { orderModalEvent } from "@/lib/events";

const products = [
  {
    id: 1,
    title: "Açaí Premium",
    desc: "Textura cremosa inconfundível, acompanhado de frutas vermelhas fresquinhas.",
    tag: "O Favorito",
    image: imageProduct1,
    color: "from-brand-purple to-brand-purple-dark",
  },
  {
    id: 2,
    title: "Açaí Tropical",
    desc: "Refrescância em dobro com kiwi, morango, banana, granola e leite condensado.",
    tag: "Refrescante",
    image: imageProduct2,
    color: "from-brand-green/90 to-brand-green",
  },
  {
    id: 3,
    title: "Shawarma",
    desc: "O verdadeiro sabor árabe, com temperos originais e preparo impecável.",
    tag: "Salgados",
    image: imageProduct3,
    color: "from-amber-700 to-amber-900",
  },
  {
    id: 4,
    title: "Açaí Supremo",
    desc: "A combinação perfeita dos melhores ingredientes, preparado com maestria.",
    tag: "Exclusivo",
    image: imageProduct4,
    color: "from-brand-orange to-orange-900",
  }
];

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produtos" className="py-24 bg-[#0A020B] relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-20" ref={ref}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white/40 font-bold tracking-[0.2em] uppercase text-[10px]"
          >
            Nosso Cardápio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black text-white mt-4 mb-6 uppercase tracking-tighter"
          >
            Qualidade em<br/>cada detalhe
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg font-light"
          >
            Escolha sua paixão. Preparamos cada produto para entregar uma experiência de sabor memorável.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: any, index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
      className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col items-start shadow-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
    >
      <div className="w-full relative h-[300px] mb-8 rounded-[1.5rem] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none`} />
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-sm">
            {product.tag}
          </span>
        </div>
      </div>
      
      <h3 className="text-3xl font-display font-black text-white mb-3 uppercase tracking-tight">{product.title}</h3>
      <p className="text-white/60 mb-8 flex-grow font-light leading-relaxed">{product.desc}</p>
      
      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => orderModalEvent.emit({ message: `Olá, gostaria de pedir um ${product.title}!` })}
      >
        Pedir no WhatsApp
      </Button>
    </motion.div>
  );
}
