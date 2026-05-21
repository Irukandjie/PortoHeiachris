import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function Certifications() {
  const pixelStyle = { fontFamily: '"Press Start 2P", cursive' };
  
  const certs = [
    { title: "ReactJs Fundamental", provider: "Dicoding Indonesia", date: "December 2024", icon: "logos:react", id: "CERT-RX", skills: ["State Mgt", "Hooks", "React Router", "SPAs"], description: "Mastered the React ecosystem, state management, component lifecycle, and routing mechanisms." },
    { title: "Vue JavaScript Framework", provider: "Dicoding Indonesia", date: "August 2024", icon: "logos:vue", id: "CERT-VU", skills: ["Vuex", "Composition API", "Reactivity"], description: "Gained comprehensive understanding of Vue.js fundamentals, its reactive system, and component-based architecture." },
    { title: "Bootstrap UI Design", provider: "Dicoding Indonesia", date: "April 2024", icon: "logos:bootstrap", id: "CERT-BS", skills: ["Responsive Grid", "Flexbox Utilities"], description: "Implemented responsive, mobile-first web designs utilizing Bootstrap's robust grid system." },
  ]

  return (
    <section id="certifications" className="py-24 relative w-full overflow-hidden bg-backgroundPrimary transition-colors duration-300">
      {/* Background Pixel Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="mb-16"
        >
          <h2 style={pixelStyle} className="text-xl md:text-2xl text-content1 flex items-center gap-4">
            <span className="w-3 h-3 bg-primary animate-pulse"></span> CREDENTIALS
          </h2>
          <p className="text-content2 mt-4 text-sm max-w-2xl font-light">Sertifikasi resmi yang memvalidasi kapabilitas teknis saya dalam ekosistem pengembangan web modern.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1, ease: "steps(4)" }}
              whileHover={{ y: -8, x: -8 }}
              className="group relative bg-backgroundSecondary border-2 border-border p-7 flex flex-col h-full transition-all duration-100 hover:border-primary hover:shadow-[8px_8px_0px_rgba(var(--color-primary),1)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              {/* Scanline Animation Overlay (Hanya muncul saat hover) */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.05] overflow-hidden z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
                <div className="w-full h-full animate-[scan_3s_linear_infinite] bg-gradient-to-b from-transparent via-white/20 to-transparent h-20 -top-20 relative"></div>
              </div>

              <div className="relative z-10 flex justify-between items-start mb-8">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.2, ease: "steps(3)" }}
                  className="w-14 h-14 bg-backgroundPrimary border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors shadow-[4px_4px_0px_rgba(var(--color-border),0.2)]"
                >
                  <Icon icon={cert.icon} className="w-8 h-8" />
                </motion.div>
                <div className="text-right">
                  <span style={pixelStyle} className="text-[7px] text-primary block mb-2 tracking-tighter">{cert.id}</span>
                  <div className="inline-block bg-backgroundPrimary border border-border px-2 py-1">
                    <span style={pixelStyle} className="text-[5px] text-content3 block uppercase">{cert.date}</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="font-bold text-lg text-content1 mb-3 group-hover:text-primary transition-colors leading-tight">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-primary/40 group-hover:bg-primary transition-colors"></div>
                  <p style={pixelStyle} className="text-[6px] text-content3 uppercase tracking-widest">{cert.provider}</p>
                </div>
                <p className="text-content2 text-xs leading-relaxed font-light mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {cert.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t-2 border-border border-dashed">
                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      style={pixelStyle} 
                      className="text-[5px] px-2 py-1.5 bg-backgroundPrimary border border-border text-content2 hover:bg-primary hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                       <Icon icon="lucide:shield-check" className="w-4 h-4 text-emerald-500 relative z-10" />
                       <div className="absolute inset-0 bg-emerald-500/20 blur-sm animate-pulse"></div>
                    </div>
                    <span style={pixelStyle} className="text-[6px] text-content1">STATUS: OK</span>
                  </div>
                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    className="p-1 border border-border group-hover:border-primary transition-colors"
                  >
                    <Icon icon="lucide:arrow-up-right" className="w-4 h-4 text-content3 group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          from { top: -20%; }
          to { top: 120%; }
        }
      `}</style>
    </section>
  )
}