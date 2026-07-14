import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Cup3D } from "@/components/3d/Cup3D";

export function Quality() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="qualidade" ref={containerRef} className="py-32 bg-[#0A020B] relative overflow-hidden border-t border-white/5">
      
      {/* Decorative text */}
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 1], [-200, 200]) }}
        className="absolute top-20 left-0 text-[15vw] font-display font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none leading-none"
      >
        100% NATURAL
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1 relative">
          <motion.div 
            style={{ y }}
            className="relative rounded-[2rem] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-gradient-to-br from-[#2D0B3D] to-[#0A020B] border border-white/10 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 z-0">
              <Cup3D />
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/40 font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
              Padrão Itakati
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase">
              A excelência<br/>que você <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-green">merece</span>.
            </h2>
            
            <div className="space-y-10">
              <Feature 
                title="Textura Incomparável" 
                desc="Nosso açaí passa por um processo exclusivo que garante a consistência perfeita, nem líquido demais, nem congelado demais." 
              />
              <Feature 
                title="Sabor Autêntico" 
                desc="Mantemos a essência do verdadeiro açaí, sem misturas que alterem o sabor original que nossos clientes amam." 
              />
              <Feature 
                title="Ambiente Premium" 
                desc="Nossas lojas são projetadas para oferecer não apenas um lanche, mas um momento agradável e sofisticado." 
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function Feature({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{title}</h4>
        <p className="text-white/60 font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
