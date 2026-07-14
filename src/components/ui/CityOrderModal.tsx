import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { orderModalEvent } from "@/lib/events";
import { Button } from "./Button";

const locations = [
  { city: "Tasso Fragoso", state: "MA", phone: "5599984557356" },
  { city: "Alto Parnaíba", state: "MA", phone: "5599999546157" },
  { city: "Baixa Grande do Ribeiro", state: "PI", phone: "558981464756" },
  { city: "Araguaína", state: "TO", phone: "5563992623270" },
];

export function CityOrderModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("Olá, gostaria de fazer um pedido!");

  useEffect(() => {
    const unsubscribe = orderModalEvent.subscribe((data) => {
      setIsOpen(true);
      setSelectedCity("");
      setError(false);
      if (data?.message) {
        setMessage(data.message);
      } else {
        setMessage("Olá, gostaria de fazer um pedido!");
      }
    });
    return unsubscribe;
  }, []);

  const handleOrder = () => {
    if (!selectedCity) {
      setError(true);
      return;
    }
    
    const location = locations.find((loc) => loc.city === selectedCity);
    if (location) {
      window.open(`https://wa.me/${location.phone}?text=${encodeURIComponent(message)}`, "_blank");
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#0A020B] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/60 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-8 mt-2">
              <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                Onde você está?
              </h2>
              <p className="text-white/60 text-sm">
                Selecione sua cidade para ser direcionado ao WhatsApp da loja mais próxima.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {locations.map((loc) => (
                <label
                  key={loc.city}
                  className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedCity === loc.city
                      ? "border-brand-green bg-brand-green/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="city"
                    value={loc.city}
                    checked={selectedCity === loc.city}
                    onChange={(e) => {
                      setSelectedCity(e.target.value);
                      setError(false);
                    }}
                    className="w-5 h-5 accent-brand-green bg-transparent border-white/20"
                  />
                  <div>
                    <div className="font-bold text-white">{loc.city}</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">{loc.state}</div>
                  </div>
                </label>
              ))}
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium mb-4 text-center">
                Por favor, selecione uma cidade para continuar.
              </p>
            )}

            <Button
              variant="primary"
              className="w-full justify-center"
              onClick={handleOrder}
            >
              Continuar para o WhatsApp
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
