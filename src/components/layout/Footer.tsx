import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A020B] py-12 text-white/80 border-t border-white/10 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-sans font-black text-2xl tracking-tighter text-white uppercase">
            ITAKATI
          </span>
        </div>
        
        <p className="text-[10px] uppercase tracking-widest text-white/40 text-center md:text-left font-bold">
          © {new Date().getFullYear()} Itakati. Todos os direitos reservados.
        </p>

        <a 
          href="https://instagram.com/_itakati" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all"
        >
          <Instagram size={18} className="text-white" />
        </a>
      </div>
    </footer>
  );
}
