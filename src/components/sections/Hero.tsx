import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import heroImage from "@/assets/images/regenerated_image_1784052493011.jpg";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0A020B] pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[80%] bg-[radial-gradient(circle,#4B0082_0%,rgba(75,0,130,0)_70%)] opacity-40 blur-[80px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          style={{ opacity, y: y2 }}
          className="text-left z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[110px] font-display font-black text-white leading-[0.85] tracking-tighter uppercase mb-6"
          >
            A evolução<br/>
            do sabor.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 max-w-md mb-10 font-light leading-relaxed"
          >
            Experimente o açaí e o shawarma que redefiniram o padrão de qualidade internacional. Textura, frescor e uma experiência memorável.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-5 mt-10"
          >
            <div className="p-5 border border-white/10 rounded-2xl w-36 bg-white/5 backdrop-blur-sm">
              <div className="text-[10px] uppercase opacity-40 tracking-widest font-bold">Açaí Real</div>
              <div className="text-2xl font-bold mt-2">100%</div>
            </div>
            <div className="p-5 border border-white/10 rounded-2xl w-36 bg-white/5 backdrop-blur-sm">
              <div className="text-[10px] uppercase opacity-40 tracking-widest font-bold">Artesanal</div>
              <div className="text-2xl font-bold mt-2">Sabor</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visuals */}
        <motion.div 
          style={{ y: y1 }}
          className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end"
        >
          {/* Main Cup Floating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative z-20 w-[300px] md:w-[460px] aspect-square rounded-full flex items-center justify-center bg-gradient-to-br from-[#2D0B3D] to-[#0A020B] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-4 rounded-full border border-dashed border-white/20 bg-gradient-to-b from-[#4B0082]/20 to-transparent pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute top-[20%] left-[-20px] bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-[11px] uppercase tracking-widest z-30 font-bold"
            >
              Cremosidade Única
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-[25%] right-[-30px] bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-[11px] uppercase tracking-widest z-30 font-bold"
            >
              Frutas Frescas
            </motion.div>

            <div className="absolute w-[80%] h-[80%] bg-[radial-gradient(circle,#6a0dad_0%,transparent_80%)] blur-[30px] opacity-60 pointer-events-none z-10" />

            <motion.img 
              animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src={heroImage}
              alt="Açaí Itakati"
              className="w-[70%] h-[70%] object-cover rounded-3xl shadow-2xl z-20 rotate-12 border border-white/10"
            />
          </motion.div>

          {/* Floating Ingredients */}
          <motion.img 
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -15 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
            src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=200&q=80"
            className="absolute top-20 right-0 w-32 h-32 rounded-full object-cover shadow-xl z-10 border-2 border-white/20"
            alt="Banana"
          />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-sm font-medium tracking-widest uppercase">Descubra</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-orange to-transparent"
        />
      </motion.div>
    </section>
  );
}
