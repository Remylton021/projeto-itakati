import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { orderModalEvent } from "@/lib/events";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O Açaí", href: "#produtos" },
    { name: "Nossa Qualidade", href: "#qualidade" },
    { name: "Lojas", href: "#lojas" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-[#0A020B]/80 backdrop-blur-lg shadow-sm py-4 border-b border-white/10" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-sans font-black text-2xl tracking-tighter text-white uppercase">
            ITAKATI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="sm" onClick={() => orderModalEvent.emit()}>
            Pedir Agora
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A020B] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold uppercase tracking-widest text-white/60 hover:text-white py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-2" variant="whatsapp" onClick={() => {
                setMobileMenuOpen(false);
                orderModalEvent.emit();
              }}>
                Pedir Agora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
