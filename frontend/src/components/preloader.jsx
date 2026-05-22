import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Preloader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [hexAddress, setHexAddress] = useState("0x000000");
  const onCompleteRef = useRef(onLoadingComplete);

  useEffect(() => {
    onCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    let timeoutId;
    const timer = setInterval(() => {
      // Generate random hex address buat simulasi pembacaan memori kernel
      const randomHex = "0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
      setHexAddress(randomHex);

      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 3;
        if (next >= 100) {
          clearInterval(timer);
          timeoutId = setTimeout(() => {
            if (onCompleteRef.current) onCompleteRef.current();
          }, 500);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => {
      clearInterval(timer);
      clearTimeout(timeoutId);
    };
  }, []);

  const pixelStyle = { fontFamily: '"Press Start 2P", cursive' };
  const monoStyle = { fontFamily: '"JetBrains Mono", monospace' };

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050507] text-[#e2e8f0]"
      initial={{ opacity: 1 }}
      // Efek transisi keluar kelas elit: Layar membelah secara horizontal
      exit={{ 
        clipPath: "polygon(0 49.5%, 100% 49.5%, 100% 50.5%, 0 50.5%)",
        opacity: 0,
        transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] }
      }}
    >
      <div className="w-full max-w-xl px-12 relative flex flex-col gap-1">
        
        {/* Top Metadata */}
        <div className="flex justify-between items-center text-[#475569] text-[8px] tracking-[0.2em]" style={monoStyle}>
          <span>SYS.LOG // ALDEN_CHRIS_MAIN_CORE</span>
          <span>STATUS: INBOUND</span>
        </div>

        {/* Main Frame Box */}
        <div className="w-full border border-cyan-500/20 bg-[#0a0a0c] p-6 relative overflow-hidden">
          {/* Subtle line grid inside box */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px)] bg-[size:10px_10px]" />
          
          <div className="flex justify-between items-center relative z-10">
            <div className="flex flex-col gap-1">
              <h1 style={pixelStyle} className="text-[10px] md:text-xs tracking-widest text-[#f8fafc]">
                HEIACHRIS
              </h1>
              <span style={monoStyle} className="text-[9px] text-cyan-400/80 tracking-mono font-light">
                FETCH_ADDR: <span className="text-white font-medium">{hexAddress}</span>
              </span>
            </div>
            
            <div className="text-right flex flex-col items-end">
              <span style={pixelStyle} className="text-xs md:text-sm text-cyan-400 font-bold">
                {progress < 100 ? `0${progress}`.slice(-3) : '100'}%
              </span>
              <span style={monoStyle} className="text-[7px] text-[#475569] tracking-widest">LOAD_SEQ</span>
            </div>
          </div>

          {/* Minimalist Tech Progress Line */}
          <div className="w-full h-[1px] bg-cyan-950/40 mt-4 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-cyan-400"
              style={{ width: `${progress}%`, boxShadow: "0 0 8px #22d3ee" }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Bottom Instruction */}
        <div className="flex justify-between items-center text-[#475569] text-[7px] tracking-widest mt-1" style={monoStyle}>
          <span>[ MASTER_KEY_DETECTED ]</span>
          <span className="animate-pulse text-cyan-500/60">INTEGRITY_CHECK_PASSED</span>
        </div>
      </div>
    </motion.div>
  );
}