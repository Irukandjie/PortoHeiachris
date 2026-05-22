import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import LandingLayout from "./components/layouts/LandingLayouts"
import Hero from "./components/Hero"
import TechTicker from "./components/techticker" 
import About from "./components/About"
import Exp from "./components/Exp"
import Certifications from "./components/Certificate"
import Terminal from "./components/terminal" // <-- IMPORT TERMINAL DI SINI
import Contact from "./components/contactme"
import Preloader from "./components/preloader"
import CustomCursor from "./components/customcursor"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <LandingLayout>
          {/* Data Stream Scrollbar */}
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
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <main className="w-full flex flex-col bg-[#050507] min-h-screen overflow-hidden relative">
              <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]"></div>
              
              <Hero />
              <TechTicker />
              <About />
              <Exp />
              <Certifications />
              
              {/* ============ TERMINAL INTERAKTIF DIPASANG DI SINI ============ */}
              <Terminal />
              
              <Contact />
            </main>
          </motion.div>
        </LandingLayout>
      )}
    </>
  )
}

export default App