import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import LandingLayout from "./components/layouts/LandingLayouts";
import Hero from "./components/Hero";
import TechTicker from "./components/techticker"; 
import About from "./components/about";
import Exp from "./components/exp";
import Certifications from "./components/Certificate";
import Contact from "./components/contactme";
import Preloader from "./components/preloader";
import CustomCursor from "./components/customcursor";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Track scroll user untuk progress bar stream di pinggir layar
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Kursor Interaktif Tactical Reticle */}
      <CustomCursor />
      
      {/* Preloader Screen (Luxury Core Boot) */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onLoadingComplete={() => setIsLoading(false)} key="preloader" />
        )}
      </AnimatePresence>

      {/* OPTIMASI CORE PERFORMANCE (ANTI LCP DROP!): 
        Konten web dirender secara paralel sejak awal (tidak memakai kondisional JS {!isLoading && ...}),
        namun disembunyikan menggunakan utility class CSS agar browser bisa melakukan pre-fetching 
        dan rendering aset berat (seperti gambar profil LCP) di background selagi preloader berputar.
      */}
      <div 
        className={
          isLoading 
            ? "h-screen overflow-hidden opacity-0 pointer-events-none" 
            : "opacity-100 transition-opacity duration-700 ease-in-out min-h-screen bg-[#050507]"
        }
      >
        <LandingLayout>
          
          {/* ============ ELEGANT DATA STREAM SCROLLBAR ============ */}
          <div className="fixed top-0 right-0 bottom-0 w-[3px] bg-white/5 z-[99998] border-l border-white/5" />
          
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-[3px] z-[99999] origin-top shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            style={{ 
              scaleY: scrollYProgress,
              backgroundImage: 'repeating-linear-gradient(to bottom, #22d3ee, #22d3ee 2px, transparent 2px, transparent 4px)'
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-white shadow-[0_0_15px_white,0_0_20px_#22d3ee] rounded-full"></div>
          </motion.div>
          
          <main className="w-full flex flex-col bg-[#050507] min-h-screen overflow-hidden relative">
            {/* Overlay Vignette Premium Monitor CRT */}
            <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]"></div>
            
            <Hero />
            
            {/* Infinite Running Tech Ticker */}
            <TechTicker />
            
            <About />
            <Exp />
            <Certifications />
            <Contact />
          </main>
        </LandingLayout>
      </div>
    </>
  );
}

export default App;