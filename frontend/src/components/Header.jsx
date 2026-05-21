import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Instagram Link Maut Lu
  const instagramLink = "https://www.instagram.com/heiachris/";

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "navbar-glass shadow-lg " : "bg-transparent"}`}>
      <nav className="navbar w-full max-w-[1200px] mx-auto px-6 md:px-12 bg-transparent shadow-none border-none relative z-50 py-3 md:py-4">
        
        {/* LOGO */}
        <div className="navbar-start">
          <Link
            smooth
            to="/#home"
            className="navbar-item text-2xl font-bold tracking-tighter pl-0 group"
            onClick={closeMenu}
          >
            Heiachris<span className="text-primary group-hover:text-cyan-400 transition-colors">!</span>
          </Link>
        </div>

        <div className="navbar-end flex gap-3 md:gap-4 items-center pr-0">
          
          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-4">
            <Link smooth to="/#about" className="navbar-item font-medium hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link smooth to="/#experience" className="navbar-item font-medium hover:text-cyan-400 transition-colors">
              Works
            </Link>
          </div>

          {/* THEME TOGGLE */}
          <button 
            onClick={toggleTheme} 
            className="btn btn-outline btn-circle border-border hover:bg-backgroundSecondary transition-all flex items-center justify-center bg-backgroundSecondary/50 backdrop-blur-sm"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <Icon icon="lucide:sun" className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            ) : (
              <Icon icon="lucide:moon" className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
            )}
          </button>

          {/* CTA DESKTOP: Gradient Blue-Cyan-Teal maut, direct ke Instagram */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex rounded-full px-6 py-2.5 font-semibold text-sm bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 border-none items-center justify-center gap-2"
          >
            <Icon icon="mdi:instagram" className="w-4 h-4 text-white" />
            Let's Talk
          </a>

          {/* HAMBURGER BUTTON (Mobile & Tablet) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn btn-outline btn-circle border-border flex md:hidden items-center justify-center bg-backgroundSecondary"
          >
            <Icon 
              icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} 
              className="w-5 h-5 text-content1" 
            />
          </button>
        </div>
      </nav>

      {/* DROPDOWN MENU MOBILE DENGAN ANIMASI SAKTI */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-backgroundPrimary/95 backdrop-blur-xl border-b border-border shadow-2xl py-6 px-6 flex flex-col gap-5 md:hidden z-40"
          >
            <Link 
              smooth 
              to="/#about" 
              onClick={closeMenu}
              className="text-lg font-bold text-content1 hover:text-cyan-400 transition-colors flex items-center gap-3 border-b border-border/50 pb-3"
            >
              <Icon icon="lucide:user" className="text-primary w-5 h-5" />
              About Me
            </Link>
            <Link 
              smooth 
              to="/#experience" 
              onClick={closeMenu}
              className="text-lg font-bold text-content1 hover:text-cyan-400 transition-colors flex items-center gap-3 border-b border-border/50 pb-3"
            >
              <Icon icon="lucide:briefcase" className="text-primary w-5 h-5" />
              My Works
            </Link>
            
            {/* CTA MOBILE DROPDOWN */}
            <a 
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="rounded-full w-full font-semibold shadow-xl shadow-cyan-500/20 mt-2 py-3.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white hover:scale-[1.03] transition-transform flex items-center justify-center gap-3 border-none"
            >
              <Icon icon="mdi:instagram" className="w-5 h-5 text-white" />
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}