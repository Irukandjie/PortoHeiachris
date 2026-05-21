import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('Frontend')
  const [selectedCert, setSelectedCert] = useState(null)
  const [isDecrypting, setIsDecrypting] = useState(false)
  
  const pixelStyle = { fontFamily: '"Press Start 2P", cursive' };
  
  const certs = [
    // ============ FRONTEND CATEGORY ============
    { id: "GL0520166185", category: "Frontend", title: "VUE JAVASCRIPT FRAMEWORK", provider: "Gamelab Indonesia", score: "95", date: "April 2024", icon: "logos:vue", skills: ["Reactivity", "Composition API", "Vue Router"], pdf: "/certificates/GL0520166185_certificate.pdf" },
    { id: "GL9335769426", category: "Frontend", title: "REACTJS", provider: "Gamelab Indonesia", score: "93.8", date: "Mei 2024", icon: "logos:react", skills: ["Hooks", "State Management", "SPAs"], pdf: "/certificates/GL9335769426_certificate.pdf" },
    { id: "GL1709115333", category: "Frontend", title: "JAVASCRIPT DAN JQUERY", provider: "Gamelab Indonesia", score: "99.5", date: "Maret 2024", icon: "logos:javascript", skills: ["DOM Manipulation", "AJAX", "Events"], pdf: "/certificates/GL1709115333_certificate.pdf" },
    { id: "GL6455813405", category: "Frontend", title: "HTML DAN CSS", provider: "Gamelab Indonesia", score: "98.1", date: "Maret 2024", icon: "vscode-icons:file-type-html", skills: ["Semantic", "Flexbox", "Responsive"], pdf: "/certificates/GL6455813405_certificate.pdf" },
    { id: "GL3848462137", category: "Frontend", title: "LOGIKA & ALGORITMA", provider: "Gamelab Indonesia", score: "96.8", date: "Februari 2024", icon: "mdi:brain-freeze", skills: ["Flowchart", "Pseudo-code", "Solving"], pdf: "/certificates/GL3848462137_certificate.pdf" },
    
    // ============ NETWORKING CATEGORY ============
    { id: "100c4a36-0cb5", category: "Networking", title: "CCNAv7: INTRODUCTION TO NETWORKS", provider: "Cisco Academy", score: "COMPETENT", date: "Jul 2022", icon: "simple-icons:cisco", skills: ["Routing", "Protocols", "Network Arch"], pdf: "/certificates/CCNA-_Introduction_to_Networks_certificate_aldenchristtw-gmail-com_100c4a36-0cb5-442f-9445-d6ff35db0e6c (1).pdf" },
    { id: "6db0e1a7-f937", category: "Networking", title: "CCNA: SWITCHING, ROUTING, WIRELESS", provider: "Cisco Academy", score: "COMPETENT", date: "Dec 2024", icon: "simple-icons:cisco", skills: ["Switching", "Wireless", "Routing"], pdf: "/certificates/_certificate_aldenchristtw-gmail-com_6db0e1a7-f937-4a0c-83da-f0522716124e (1).pdf" },
    
    // ============ DESIGN CATEGORY ============
    { id: "WS-UIUX-2022", category: "Design", title: "WORKSHOP DESIGN UI/UX", provider: "HIMMATISI USM", score: "PARTICIPANT", date: "Agustus 2022", icon: "lucide:layout", skills: ["UI Design", "UX Research", "Prototyping"], pdf: "/certificates/SERTIFKAT WORKSHOP UI-UX - Alden christian Totonafo Waruwu (1).pdf" },
    { id: "WS-DESIGN-2", category: "Design", title: "WORKSHOP DESIGN 2", provider: "HIMMATISI USM", score: "PARTICIPANT", date: "Sept 2021", icon: "lucide:pen-tool", skills: ["Graphic Design", "Creativity"], pdf: "/certificates/SERTIFIKAT WORKSHOP DESIGN 2 - ALDEN CHRISTIAN T W.pdf" },
    { id: "GL-DSGN-01", category: "Design", title: "UI/UX DESIGN FUNDAMENTAL", provider: "Gamelab Indonesia", score: "COMING SOON", date: "2024", icon: "logos:figma", skills: ["Wireframing", "Prototyping", "UX Research"], pdf: null },

    // ============ LANGUAGE CATEGORY ============
    { id: "UC-3f32f1ff", category: "Language", title: "LEARN PYTHON BY MAKING GAMES", provider: "Udemy", score: "COMPLETED", date: "June 2023", icon: "logos:python", skills: ["Python", "Game Dev", "Logic"], pdf: "/certificates/UC-3f32f1ff-e199-468c-9dd1-47109ad3ead8.pdf" },
    { id: "ILC-KOREA-21", category: "Language", title: "ILC LEARN KOREA", provider: "Bina Bahasa Jaya USM", score: "PARTICIPANT", date: "Nov 2021", icon: "twemoji:flag-south-korea", skills: ["Korean Language", "Culture", "Comm"], pdf: "/certificates/ILC-KOREA (16).pdf" },
    { id: "ILC-JAPAN-21", category: "Language", title: "ILC LEARN JAPAN", provider: "Bina Bahasa Jaya USM", score: "PARTICIPANT", date: "Nov 2021", icon: "twemoji:flag-japan", skills: ["Japanese Language", "Culture", "Comm"], pdf: "/certificates/ILC-JAPAN (12).pdf" },

    // ============ OTHERS CATEGORY ============
    { id: "MSIB-BATCH-6", category: "Others", title: "STUDI INDEPENDEN BERSERTIFIKAT", provider: "Kampus Merdeka", score: "COMPLETED", date: "2024", icon: "lucide:award", skills: ["Professional Dev", "Independent Study"], pdf: "/certificates/I am sharing '1725691267563' with you.pdf" },
    { id: "DICODING-BC", category: "Others", title: "KARIER BLOCKCHAIN DEVELOPER", provider: "Dicoding Indonesia", score: "ATTENDANCE", date: "April 2022", icon: "lucide:link-2", skills: ["Blockchain", "Web3", "Career"], pdf: "/certificates/peluang-karier-sebagai-blockchain-developer-certificate.pdf" },
    { id: "GL0691233250", category: "Others", title: "COLLABORATION: ERA DIGITAL", provider: "Gamelab Indonesia", score: "96", date: "Mei 2024", icon: "mdi:account-group", skills: ["Digital Tools", "Teamwork", "Agile"], pdf: "/certificates/GL0691233250_certificate.pdf" },
    { id: "GL8680170762", category: "Others", title: "COMMUNICATION KARIER", provider: "Gamelab Indonesia", score: "84", date: "April 2024", icon: "mdi:chat-processing", skills: ["Public Speaking", "Writing", "Negotiation"], pdf: "/certificates/GL8680170762_certificate.pdf" },
    { id: "GL8571008830", category: "Others", title: "CRITICAL THINKING", provider: "Gamelab Indonesia", score: "78", date: "Februari 2024", icon: "mdi:comment-question", skills: ["Analysis", "Objectivity", "Logic"], pdf: "/certificates/GL8571008830_certificate.pdf" },
    { id: "GL9920961774", category: "Others", title: "CREATIVITY SKILLS", provider: "Gamelab Indonesia", score: "78", date: "Maret 2024", icon: "mdi:lightbulb-on", skills: ["Ideation", "Innovation", "Out of Box"], pdf: "/certificates/GL9920961774_certificate.pdf" },
  ]

  const tabs = ["Frontend", "Networking", "Design", "Language", "Others"];
  const filteredCerts = certs.filter(cert => cert.category === activeTab);

  // FUNGSI PREVIEW DENGAN ANIMASI HACKING
  const handlePreview = (cert) => {
    setSelectedCert(cert);
    setIsDecrypting(true);
    // Fake loading delay biar berasa lagi decrypt data rahasia
    setTimeout(() => {
      setIsDecrypting(false);
    }, 1200);
  }

  return (
    <section id="certifications" className="py-24 relative w-full overflow-hidden bg-backgroundPrimary transition-colors duration-300">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12">
        
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="mb-12">
          <h2 style={pixelStyle} className="text-xl md:text-2xl text-content1 flex items-center gap-4">
            <span className="w-3 h-3 bg-primary animate-pulse"></span> CREDENTIALS_REPOSITORY
          </h2>
          <p className="text-content2 mt-4 text-sm max-w-2xl font-light">Kumpulan validasi kompetensi teknis dan soft-skills yang telah diakreditasi oleh industri.</p>
        </motion.div>

        {/* ============ MENU TAB ============ */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-border/30 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border-2 transition-all duration-200 ${
                activeTab === tab 
                ? 'border-primary bg-primary/10 text-primary shadow-[4px_4px_0px_rgba(var(--color-primary),0.3)]' 
                : 'border-border/40 text-content3 hover:border-content1'
              }`}
            >
              <span style={pixelStyle} className="text-[7px] md:text-[9px] uppercase">{tab}</span>
            </button>
          ))}
        </div>

        {/* ============ GRID KARTU SERTIFIKAT ============ */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3, ease: "steps(4)" }}
                whileHover={{ y: -8, x: -8 }}
                className="group relative bg-backgroundSecondary border-2 border-border p-7 flex flex-col h-full hover:border-primary hover:shadow-[8px_8px_0px_rgba(var(--color-primary),1)]"
              >
                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.05] overflow-hidden z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

                <div className="relative z-10 flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-backgroundPrimary border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors shadow-[4px_4px_0px_rgba(var(--color-border),0.2)]">
                    <Icon icon={cert.icon} className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <span style={pixelStyle} className="text-[5px] text-primary block mb-2 tracking-tighter opacity-80">ID: {cert.id}</span>
                    <div className="bg-primary/10 border border-primary/20 px-2 py-1 inline-block">
                      <span style={pixelStyle} className="text-[7px] text-primary block">SCORE: {cert.score}</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex-grow">
                  <h3 className="font-bold text-base text-content1 mb-3 group-hover:text-primary transition-colors leading-tight min-h-[3rem]">
                    {cert.title}
                  </h3>
                  <p style={pixelStyle} className="text-[5px] md:text-[6px] text-content3 uppercase tracking-widest mb-6">{cert.provider} • {cert.date}</p>
                </div>

                <div className="relative z-10 mt-auto pt-6 border-t-2 border-border border-dashed">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} style={pixelStyle} className="text-[5px] px-2 py-1.5 bg-backgroundPrimary border border-border text-content2 hover:bg-primary hover:text-white transition-colors cursor-default">{skill}</span>
                    ))}
                  </div>
                  
                  {/* Action Buttons: Status & Preview */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:shield-check" className="w-4 h-4 text-emerald-500 drop-shadow-[0_0_8px_#10b981]" />
                      <span style={pixelStyle} className="text-[5px] md:text-[6px] text-content1">VERIFIED</span>
                    </div>
                    
                    <div className="flex gap-2">
                      {/* PREVIEW BUTTON */}
                      {cert.pdf && (
                        <button 
                          onClick={() => handlePreview(cert)}
                          className="px-2.5 py-1.5 border border-border hover:border-primary bg-backgroundPrimary text-content2 hover:text-primary transition-colors flex items-center gap-1.5"
                        >
                          <Icon icon="lucide:scan-eye" className="w-3 h-3" />
                          <span style={pixelStyle} className="text-[5px] md:text-[6px] pt-0.5">PREVIEW</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredCerts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 border-2 border-dashed border-border/40">
              <Icon icon="mdi:database-off" className="text-4xl text-content3 mb-4" />
              <p style={pixelStyle} className="text-[10px] text-content3">// NO_DATA_FOUND_IN_THIS_SECTOR</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* ============ MODAL PDF PREVIEW RETRO TERMINAL (AESTHETIC & MOBILE SAFE) ============ */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-[#050505] border border-cyan-500/30 w-full max-w-5xl h-[85vh] md:h-[90vh] flex flex-col shadow-[0_0_40px_rgba(34,211,238,0.15)] relative overflow-hidden"
            >
              {/* ORNAMEN HUD CYBERPUNK DI POJOK MODAL */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-cyan-400 z-50 pointer-events-none opacity-70"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-cyan-400 z-50 pointer-events-none opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-cyan-400 z-50 pointer-events-none opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-cyan-400 z-50 pointer-events-none opacity-70"></div>

              {/* Header Terminal */}
              <div className="flex justify-between items-center px-4 md:px-6 py-4 border-b border-cyan-500/20 bg-[#0a0a0a] relative z-40">
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:terminal" className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  <span style={pixelStyle} className="text-[6px] md:text-[8px] text-content1 tracking-widest text-cyan-400">
                    SECURE_VIEWER // {selectedCert.id}.pdf
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-cyan-400 hover:text-white hover:bg-cyan-900/50 transition-all flex items-center justify-center border border-cyan-400/30 p-1.5"
                >
                  <Icon icon="lucide:x" className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              {/* Konten Viewer */}
              <div className="flex-grow bg-[#050505] p-3 md:p-6 relative z-10 flex items-center justify-center">
                
                {/* ANIMASI DECRYPTING SAKTI */}
                {isDecrypting ? (
                  <div className="flex flex-col items-center justify-center">
                    <Icon icon="mdi:matrix" className="w-12 h-12 text-cyan-400 animate-spin mb-6" />
                    <p style={pixelStyle} className="text-cyan-400 text-[8px] md:text-[10px] animate-pulse tracking-widest">
                      DECRYPTING_DATA_BLOCKS...
                    </p>
                    <div className="w-48 md:w-64 h-1.5 bg-cyan-900/50 mt-6 relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: "100%" }} 
                        transition={{ duration: 1.1, ease: "circOut" }} 
                        className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    {/* OBJEK PDF DENGAN FALLBACK PINTAR UNTUK MOBILE */}
                    <object data={`${selectedCert.pdf}#view=FitH`} type="application/pdf" className="w-full h-full relative z-20">
                      
                      {/* TAMPILAN FALLBACK JIKA BROWSER HP NGE-BLOCK PDF (Anti Auto-Download) */}
                      <div className="flex flex-col items-center justify-center w-full h-full bg-[#0a0a0a] text-center p-6 md:p-12 border border-dashed border-cyan-500/20">
                          <div className="relative mb-6">
                            <Icon icon="lucide:shield-alert" className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 opacity-80" />
                            <Icon icon="lucide:scan-line" className="w-12 h-12 md:w-16 md:h-16 text-cyan-200 absolute inset-0 animate-[scan_2s_linear_infinite]" />
                          </div>
                          <p style={pixelStyle} className="text-[7px] md:text-[8px] text-cyan-400 mb-8 leading-loose opacity-80 max-w-md">
                              [!] NATIVE_VIEWER_BLOCKED <br/><br/>
                              Sistem keamanan mendeteksi limitasi render pada perangkat Anda (Auto-download dicegah).
                          </p>
                          <a href={selectedCert.pdf} target="_blank" rel="noreferrer" className="px-6 py-4 bg-cyan-950/30 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-3 hover:shadow-[0_0_15px_#22d3ee]">
                              <Icon icon="lucide:external-link" className="w-5 h-5" />
                              <span style={pixelStyle} className="text-[8px] tracking-widest pt-1">EKSTRAK DATA MANUAL</span>
                          </a>
                      </div>
                    </object>
                    
                    {/* Efek Garis Tepi Scanline Hologram di dalem Frame PDF */}
                    <div className="absolute inset-0 pointer-events-none border border-cyan-500/10 z-30 shadow-[inset_0_0_30px_rgba(34,211,238,0.05)] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}