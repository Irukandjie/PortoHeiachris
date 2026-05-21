import { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Icon } from '@iconify/react';
import ProfileImg from "../assets/image_15b552.jpeg"; // Updated with new image

export default function Hero() {
  const ref = useRef(null);
  const pixelStyle = { fontFamily: '"Press Start 2P", cursive' }; // Gaya Piksel Global Komponen

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } };
  const socialColumnVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", staggerChildren: 0.2, delay: 0.6 } } };
  const socialItemVariants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 12 } } };

  const socialLinks = [
    { label: "@heiachris", icon: "mdi:instagram", link: "https://www.instagram.com/heiachris/", color: "group-hover:text-[#E4405F]", glowColor: "rgba(228, 64, 95, 0.2)" },
    { label: "Irukandjie", icon: "mdi:github", link: "https://github.com/Irukandjie", color: "group-hover:text-primary", glowColor: "rgba(var(--color-primary), 0.2)" }
  ];

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center w-full pt-28 pb-16 overflow-hidden bg-backgroundPrimary">
      <div className="absolute inset-0 z-0 opacity-[0.03] grid-bg"></div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-16 md:gap-20 items-center">
        <motion.div className="text-left flex flex-col items-start" style={{ y: textY, opacity }}>
          <motion.div variants={itemVariants} className="mb-8">
            {/* SENTUHAN PIKSEL PADA BADGE HERO */}
            <div style={pixelStyle} className="badge badge-outline border-border/60 text-cyan-400 px-5 py-3 text-[7px] sm:text-[8px] rounded-sm bg-cyan-500/5 shadow-[0_0_15px_rgba(34,211,238,0.1)] backdrop-blur-sm tracking-widest uppercase">
              NETWORKING • IT SUPPORT • DEV
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-[36px] sm:text-[45px] md:text-[40px] lg:text-[40px] font-extrabold tracking-[-0.03em] leading-[1.0] mb-8 text-content1 min-h-[2.5em] md:min-h-[2.2em]">
            I am <br />
            <TypeAnimation
              sequence={['Alden Christian T.W', 2000, 'Heiachris', 2000, 'Network Engineer', 2000, 'Car Enthusiast', 2000]}
              wrapper="span" speed={50}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 pb-2 mt-4 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] tracking-normal"
              style={pixelStyle} repeat={Infinity}
            />
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
            <p className="text-sm sm:text-base md:text-lg text-content2 font-light leading-relaxed">
              Highly motivated <strong className="font-semibold text-content1">Informatics Engineering graduate from Universitas Semarang (IPK 3.82/4.0)</strong> specializing in robust network architecture. Currently driving operational excellence as . Ordinary isn't in my vocabulary.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
            <Link smooth to="/#experience" className="btn btn-primary rounded-md px-8 sm:px-12 font-semibold shadow-xl shadow-primary/30 transition-all hover:scale-105 flex-1 sm:flex-none text-center">Experience</Link>
            <a href="https://github.com/Irukandjie" target="_blank" rel="noreferrer" className="btn btn-outline border-border rounded-md px-8 sm:px-12 font-semibold text-content1 hover:bg-white/5 transition-all hover:scale-105 flex-1 sm:flex-none text-center">My GitHub</a>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div variants={itemVariants} style={{ y: imageY, opacity }} className="relative flex flex-col justify-center items-center mt-10 md:mt-0">
          <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-teal-400/10 blur-[100px] rounded-full z-0"></div>
          <div className="relative z-10 w-[85%] sm:w-[70%] md:w-full max-w-[420px] aspect-square rounded-[20px] border-2 border-border/50 shadow-2xl rotate-[-2deg] bg-backgroundSecondary p-3 mx-auto md:mx-0 transition-transform duration-500 hover:rotate-0 hover:border-cyan-400/30">
            <img src={ProfileImg} alt="Alden Christian T.W Profile" className="w-full h-full object-cover rounded-[12px] filter grayscale hover:grayscale-0 transition-all duration-700" />
          </div>

          <motion.div variants={socialColumnVariants} className="flex flex-row gap-5 mt-[-20px] sm:mt-[-25px] md:mt-[-30px] relative z-20">
            {socialLinks.map((social, idx) => (
              <motion.div key={idx} variants={socialItemVariants} className="group relative">
                <span style={pixelStyle} className="absolute left-1/2 bottom-full transform -translate-x-1/2 mb-3 bg-backgroundSecondary border border-border text-[8px] text-content1 px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl z-30">
                  {social.label}
                </span>
                <a href={social.link} target="_blank" rel="noreferrer" className="relative btn btn-outline btn-circle w-12 h-12 md:w-14 md:h-14 border-border/60 bg-backgroundSecondary/80 backdrop-blur-sm shadow-xl flex items-center justify-center transition-all duration-500 group-hover:border-cyan-400/40 group-hover:scale-110 group-hover:rotate-[360deg]" style={{ '--hover-glow': social.glowColor }}>
                  <div className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-100 blur-[12px] transition-opacity duration-300" style={{ background: social.glowColor }}></div>
                  <Icon icon={social.icon} className={`relative z-10 w-6 h-6 md:w-7 md:h-7 text-content2 transition-colors ${social.color}`} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}