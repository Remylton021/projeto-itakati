/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Products } from './components/sections/Products';
import { Quality } from './components/sections/Quality';
import { Locations } from './components/sections/Locations';
import { Footer } from './components/layout/Footer';
import { CityOrderModal } from './components/ui/CityOrderModal';
import { orderModalEvent } from './lib/events';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="bg-[#0A020B] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Quality />
      <Locations />
      <Footer />
      <CityOrderModal />

      <motion.button
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, type: 'spring' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => orderModalEvent.emit()}
        className="fixed bottom-10 right-10 z-50 flex items-center gap-3 bg-[#25D366] px-6 py-4 rounded-full text-white font-bold text-sm shadow-[0_20px_40px_rgba(37,211,102,0.3)] uppercase tracking-widest cursor-pointer"
      >
        <span>Pedir no WhatsApp</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </motion.button>
    </main>
  );
}
