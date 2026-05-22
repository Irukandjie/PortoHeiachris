import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
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
      {/* Core Dot Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 pointer-events-none z-[999999] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.02 }}
      />

      {/* Adaptive Targeting Box Reticle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999998] hidden md:block"
        animate={{
          x: mousePosition.x - (isHovering ? 12 : 16),
          y: mousePosition.y - (isHovering ? 12 : 16),
          width: isHovering ? 24 : 32,
          height: isHovering ? 24 : 32,
          rotate: isHovering ? 90 : 0,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.3 }}
      >
        <div className="w-full h-full relative">
          {/* Top-Left Corner */}
          <div className={`absolute top-0 left-0 w-1.5 h-1.5 border-t border-l transition-colors duration-300 ${isHovering ? 'border-cyan-400' : 'border-cyan-500/30'}`} />
          {/* Top-Right Corner */}
          <div className={`absolute top-0 right-0 w-1.5 h-1.5 border-t border-r transition-colors duration-300 ${isHovering ? 'border-cyan-400' : 'border-cyan-500/30'}`} />
          {/* Bottom-Left Corner */}
          <div className={`absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l transition-colors duration-300 ${isHovering ? 'border-cyan-400' : 'border-cyan-500/30'}`} />
          {/* Bottom-Right Corner */}
          <div className={`absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r transition-colors duration-300 ${isHovering ? 'border-cyan-400' : 'border-cyan-500/30'}`} />
        </div>
      </motion.div>
    </>
  );
}