import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const bootMessages = [
  "BIOS VERSION 4.20.69 - HEIACHRIS_SYS",
  "INITIALIZING CPU CORE 0... OK",
  "MOUNTING VIRTUAL FILESYSTEM... DONE",
  "LOADING NETWORK INTERFACES...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "BYPASSING FIREWALL... SUCCESS",
  "INJECTING UI MODULES...",
  "SYSTEM FULLY OPERATIONAL."
];

export default function Preloader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [hexCode, setHexCode] = useState("0x000000");

  const onCompleteRef = useRef(onLoadingComplete);
  useEffect(() => {
    onCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);

  // Import Font Retro
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Main Loading Logic
  useEffect(() => {
    let timeoutId;
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 3; 
        if (next >= 100) {
          clearInterval(timer);
          timeoutId = setTimeout(() => {
            if (onCompleteRef.current) onCompleteRef.current();
          }, 1200); // Jeda dramatis pas 100%
          return 100;
        }
        return next;
      });
    }, 120);

    return () => {
      clearInterval(timer);
      clearTimeout(timeoutId);
    };
  }, []);

  // Sync Logs with Progress
  useEffect(() => {
    const currentLogIndex = Math.min(
      Math.floor((progress / 100) * bootMessages.length),
      bootMessages.length - 1
    );
    setVisibleLogs(bootMessages.slice(0, currentLogIndex + 1));
  }, [progress]);

  // Fast Hex Data Stream Generator (Efek Hacker maut)
  useEffect(() => {
    const hexTimer = setInterval(() => {
      if (progress < 100) {
        setHexCode("0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0'));
      } else {
        setHexCode("0xSYSTEM_OK");
      }
    }, 50);
    return () => clearInterval(hexTimer);
  }, [progress]);

  const pixelStyle = { fontFamily: "'Press Start 2P', cursive" };
  const neonCyan = "0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.4)";

  const logoText = "Heiachris";
  const totalBlocks = 24;

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050507] overflow-hidden"
      initial={{ opacity: 1 }}
      // EXIT ANIMATION TV TURN OFF (Masterpiece Transition)
      exit={{ 
        scaleY: 0.005,
        opacity: [1, 1, 0],
        filter: ["brightness(1)", "brightness(3)", "brightness(0)"],
        transition: { duration: 0.5, ease: "circIn" }
      }}
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      <motion.div 
        animate={{ opacity: [0.03, 0.05, 0.02, 0.06, 0.03] }} 
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="absolute inset-0 z-10 bg-white pointer-events-none mix-blend-overlay"
      />

      {/* TOP LEFT RAPID DATA (Retro Modern Detail) */}
      <div className="absolute top-6 left-6 flex flex-col gap-1 text-cyan-500/50 font-mono text-[10px] z-30 tracking-widest hidden sm:flex">
        <span>MEM_ALLOC: {Math.floor(progress * 1.64)}MB / 164MB</span>
        <span>SYS_STATUS: {progress === 100 ? 'STABLE' : 'BOOTING'}</span>
        <span>STREAM: {hexCode}</span>
      </div>

      <div className="flex flex-col items-center w-full px-4 relative z-30">
        
        {/* ============ GLITCH LOGO ============ */}
        <motion.div 
          className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-widest mb-12 flex items-center justify-center gap-1"
          style={{ ...pixelStyle, textShadow: progress === 100 ? neonCyan : 'none' }}
        >
          {logoText.split("").map((letter, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.2 }}
              className={index === 0 ? "bg-cyan-400 text-[#050507] px-2 mr-1" : ""}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.7, ease: "steps(1)" }}
            className="w-4 h-8 sm:h-10 bg-cyan-400 -ml-1 shadow-[0_0_15px_#22d3ee]"
          />
        </motion.div>

        {/* ============ PROGRESS SECTION ============ */}
        <div className="flex flex-col items-center w-full max-w-[320px] md:max-w-[400px]">
          <div className="w-full flex justify-between text-[8px] md:text-[10px] text-cyan-400/60 mb-2 font-mono tracking-widest px-1">
            <span>SYS_LOAD</span>
            <motion.span 
              animate={{ opacity: progress === 100 ? [1, 0.5, 1] : 1 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className={progress === 100 ? "text-white" : ""}
            >
              {progress === 100 ? "OK" : "PROCESSING..."}
            </motion.span>
          </div>
          
          {/* Cyberpunk Segmented Bar */}
          <div className="w-full h-5 md:h-6 border border-cyan-500/40 bg-[#0a0a0a] p-[2px] md:p-1 relative shadow-[0_0_15px_rgba(34,211,238,0.1)_inset]">
            <div className="w-full h-full flex gap-[2px]">
              {[...Array(totalBlocks)].map((_, i) => {
                const isActive = progress >= ((i + 1) / totalBlocks) * 100;
                // Loading head (blok paling ujung yg nyala paling terang)
                const isHead = isActive && progress < (((i + 2) / totalBlocks) * 100);
                
                return (
                  <div
                    key={i}
                    className={`h-full flex-1 transition-all duration-75 ${
                      isHead 
                        ? 'bg-white shadow-[0_0_12px_#ffffff]' 
                        : isActive 
                          ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' 
                          : 'bg-cyan-900/20'
                    }`}
                  />
                );
              })}
            </div>
          </div>
          
          <div className="mt-3 text-[10px] font-mono text-cyan-400 font-bold tracking-[0.2em]" style={pixelStyle}>
            {progress}%
          </div>
        </div>
        
        {/* ============ TERMINAL LOG HISTORY ============ */}
        <div className="w-full max-w-[320px] md:max-w-[400px] h-24 mt-8 flex flex-col justify-end overflow-hidden border-l-2 border-cyan-500/30 pl-3">
          <AnimatePresence>
            {visibleLogs.map((log, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`font-mono text-[8px] md:text-[10px] tracking-widest leading-relaxed ${
                  i === visibleLogs.length - 1 ? "text-cyan-400" : "text-cyan-400/40"
                }`}
              >
                <span className="opacity-50 mr-2">{'>'}</span>{log}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ============ FOOTER BADGE ============ */}
      <motion.div 
        className="absolute bottom-8 flex flex-col items-center gap-1 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-[6px] md:text-[8px] font-mono uppercase tracking-[0.4em] text-cyan-500/40">Powered Engine</span>
        <div className="flex gap-2 items-center text-[10px] md:text-xs font-bold tracking-widest text-white/80" style={pixelStyle}>
          VITE <span className="text-cyan-400" style={{ textShadow: neonCyan }}>REACT</span>
        </div>
      </motion.div>
    </motion.div>
  );
}