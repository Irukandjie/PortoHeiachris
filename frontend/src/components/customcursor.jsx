import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Sembunyikan kursor default sistem murni
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none';
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* ============ ELEGANT RETRO SVG POINTER ============ */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:flex items-center justify-center drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        style={{ width: 24, height: 24 }}
        animate={{
          x: mousePosition.x - 2, // Offset nyesuaiin tip ujung panah SVG
          y: mousePosition.y - 2,
          scale: isHovering ? 0.85 : 1, // Menyusut dikit pas hover buat efek "klik" elegan
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        {/* Custom SVG: Classic 90s OS Pointer, tapi desain Hollow Neon yang premium */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M2 2L9 22L12.5 13.5L21 10L2 2Z" 
            fill={isHovering ? "#22d3ee" : "#050505"} // Isi hitam saat normal, nyala cyan saat hover
            stroke={isHovering ? "#ffffff" : "#22d3ee"} // Stroke neon
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* ============ TARGETING MATRIX TRAIL (SUPER ELEGAN) ============ */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] hidden md:block"
        style={{ width: 36, height: 36 }}
        animate={{
          x: mousePosition.x - 18, // Tengahin reticle ke kursor
          y: mousePosition.y - 18,
          scale: isHovering ? 1.4 : 1,
          rotate: isHovering ? 45 : 0, // Muter estetik jadi bentuk diamond pas hover
          opacity: isHovering ? 0.9 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 14, mass: 0.5 }}
      >
        {/* 4 Sudut Targeting Brackets ala UI Sci-Fi / Retro Terminal */}
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-cyan-400 drop-shadow-[0_0_4px_#22d3ee]"></div>
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-cyan-400 drop-shadow-[0_0_4px_#22d3ee]"></div>
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] border-cyan-400 drop-shadow-[0_0_4px_#22d3ee]"></div>
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-cyan-400 drop-shadow-[0_0_4px_#22d3ee]"></div>
          
          {/* Titik tengah halus */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1px] h-[1px] bg-cyan-400 opacity-50"></div>
        </div>
      </motion.div>
    </>
  );
}