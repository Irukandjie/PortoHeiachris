import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import LandingLayout from "./components/layouts/LandingLayouts"
import Hero from "./components/Hero"
import About from "./components/about"
import Exp from "./components/Exp"
import Certifications from "./components/Certificate"
import Contact from "./components/contactme"
import Preloader from "./components/preloader"
import CustomCursor from "./components/customcursor"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Track scroll user buat progress bar
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Kursor interaktif bertema retro PC */}
      <CustomCursor />
      
      {/* Preloader Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} key="preloader" />}
      </AnimatePresence>

      {/* Konten Web Utama (Muncul setelah loading beres) */}
      {!isLoading && (
        <LandingLayout>
          
          {/* ============ PIXELATED WATERFALL SCROLL BAR ============ */}
          {/* Posisi tetep di kanan, tapi style warnanya jadi balok-balok piksel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-2 md:w-2.5 z-[99999] origin-top shadow-[0_0_10px_rgba(34,211,238,0.5)] border-l border-white/5"
            style={{ 
              scaleY: scrollYProgress,
              // Trik CSS buat bikin balok-balok piksel cyan terpisah
              backgroundImage: 'repeating-linear-gradient(to bottom, #22d3ee, #22d3ee 4px, transparent 4px, transparent 8px)'
            }}
          />
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            <main className="w-full flex flex-col bg-backgroundPrimary min-h-screen overflow-hidden relative">
              {/* Overlay Vignette opsional buat nambah kesan monitor CRT */}
              <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]"></div>
              
              <Hero />
              <About />
              <Exp />
              <Certifications />
              <Contact />
            </main>
          </motion.div>
        </LandingLayout>
      )}
    </>
  )
}

export default App