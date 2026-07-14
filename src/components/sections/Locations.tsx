import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Tasso Fragoso", state: "MA", type: "Loja" },
  { city: "Alto Parnaíba", state: "MA", type: "Loja" },
  { city: "Baixa Grande do Ribeiro", state: "PI", type: "Loja" },
  { city: "Araguaína", state: "TO", type: "Distribuidora" },
];

export function Locations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lojas" className="py-24 bg-[#050106] text-white relative overflow-hidden border-t border-white/5">
      
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-black mb-6 uppercase tracking-tighter"
          >
            Onde estamos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-lg font-light"
          >
            Encontre a ITAKATI mais próxima de você.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-green transition-all duration-300">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{loc.city}</h3>
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">{loc.state}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{loc.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
