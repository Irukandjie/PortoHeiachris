import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function Exp() {
  const [activeTab, setActiveTab] = useState('pengalaman')
  const containerRef = useRef(null)
  
  const pixelStyle = { fontFamily: '"Press Start 2P", cursive' };

  // Optimasi scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const pacmanY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Data Timeline
  const dataPengalaman = [
    { id: "exp-1", title: "IT Support Specialist", place: "Rumah Sakit Sekar Laras", date: "June 2025 - Present", description: "As IT Support at Sekar Laras Hospital, I manage the hospital's critical network infrastructure and drive strategic relationships with multiple IT vendors. I ensure network reliability, negotiate with partners, and oversee SLA compliance to maintain a seamless and efficient technology ecosystem for healthcare operations." },
    { id: "exp-2", title: "Freelance Finance Consultant", place: "Independent", date: "October 2025 - Present", description: "Managed personal financial planning and quarterly business bookkeeping, analyzing profit margins, operational costs, inventory, and payroll to optimize financial growth." },
    { id: "exp-3", title: "Frontend Developer & Product Manager", place: "Gamelab", date: "February 2024 - June 2024", description: "Led frontend development initiatives while simultaneously serving as Product Manager. Directed project lifecycles, coordinated agile sprints, and successfully managed team deliverables, including directly supervising and mentoring team members like Mazda, to ensure the deployment of high-performance web applications." }
  ]

  const dataPendidikan = [
    { id: "edu-1", title: "Teknik Informatika", place: "Universitas Semarang (USM)", date: "Graduated", description: "Focused on software engineering, web development technologies, and scalable system architecture." },
    { id: "edu-2", title: "Sekolah Menengah Atas", place: "SMA 1 Toroh", date: "2018 - 2021", description: "Graduated with a focus on Natural Sciences (MIPA), building strong analytical, mathematical, and logical thinking foundations." }
  ]

  const dataProjects = [
    { title: "Enterprise Network Architecture", client: "RS Sekar Laras", role: "Network Engineer", icon: "lucide:network", tech: ["Mikrotik", "Packet Filtering", "QoS", "Enterprise IT", "Network Security", "RB1100AHX4"], description: "Designed and deployed a high-availability network infrastructure featuring advanced packet filtering and enterprise-grade bandwidth management tailored for critical healthcare operations and data security." },
    { title: "SIMRS (Hospital Info System)", client: "RS Sekar Laras", role: "Product Manager", icon: "lucide:activity", tech: ["Product Strategy", "MERN Stack", "Agile", "EMR"], description: "Led the end-to-end product development lifecycle of an integrated EMR and hospital management system, bridging clinical workflows with robust technical solutions." },
    { title: "School Network Gateway", client: "SMP KRISTEN 1 PUROWODADI", role: "Network Engineer", icon: "lucide:router", tech: ["Mikrotik RB941", "Bandwidth Mgt", "Firewall"], description: "Implemented comprehensive packet filtering, internet access restrictions, and bandwidth management (QoS) using Mikrotik RB941 to ensure a secure, stable, and abuse-free digital learning environment." },
    { title: "Banazza Shoes E-Commerce", client: "MSIB Batch 5 - Gamelab", role: "UI/UX & PM", icon: "lucide:shopping-bag", tech: ["Figma", "UX Research", "Wireframing", "Roadmap"], github: "https://github.com/trainerfe5gamelab/miniproject-bootstrap-k5", description: "Spearheaded the product strategy and crafted intuitive, conversion-focused user experiences for a modern footwear e-commerce platform." },
    { title: "Digital Wedding Platform (NIKAH DONG)", client: "MSIB Batch 5 - Gamelab", role: "UI/UX & PM", icon: "lucide:heart-handshake", tech: ["UI/UX Design", "Prototyping", "User Flow"], description: "Managed the product roadmap and designed elegant, highly responsive interfaces for a customizable and modern digital wedding invitation service." }
  ]

  const hardSkills = [
    { name: "Network Engineering", desc: "Architecture & Config", icon: "flat-color-icons:data-configuration" },
    { name: "Mikrotik", desc: "Routing & Bandwidth", icon: "simple-icons:mikrotik", color: "text-content1" },
    { name: "Cisco", desc: "Enterprise Switching", icon: "simple-icons:cisco", color: "text-[#1BA0D7]" },
    { name: "React.js", desc: "Dynamic UI Dev", icon: "logos:react" },
    { name: "SQL", desc: "Relational Databases", icon: "vscode-icons:file-type-sql" },
    { name: "DaVinci Resolve", desc: "Video Editing & Color", icon: "simple-icons:davinciresolve", color: "text-red-500" },
    { name: "Laravel", desc: "PHP Framework", icon: "logos:laravel" },
    { name: "HTML5", desc: "Semantic Structure", icon: "logos:html-5" },
    { name: "CSS3", desc: "Styling & Animations", icon: "logos:css-3" },
    { name: "Bootstrap", desc: "CSS Framework", icon: "logos:bootstrap" },
    { name: "Tailwind CSS", desc: "Utility-First CSS", icon: "logos:tailwindcss-icon" },
    { name: "Figma", desc: "UI/UX Design", icon: "logos:figma" },
    { name: "Adobe Lightroom", desc: "Photo Grading", icon: "logos:adobe-lightroom" },
    { name: "Ms. Excel", desc: "Data Analysis", icon: "vscode-icons:file-type-excel" },
    { name: "Ms. Word", desc: "Documentation", icon: "vscode-icons:file-type-word" },
  ]

  const softSkills = [
    { name: "English (Native & Active)", percentage: 95 },
    { name: "Problem Solver", percentage: 95 },
    { name: "Communication", percentage: 85 },
    { name: "Talk Active", percentage: 90 },
    { name: "Adaptive", percentage: 90 },
    { name: "Time Management", percentage: 80 },
    { name: "Risk Management", percentage: 85 }
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }, exit: { opacity: 0, transition: { duration: 0.2 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }

  const tabs = [
    { id: 'pengalaman', label: 'WORK EXP' },
    { id: 'pendidikan', label: 'EDUCATION' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' }
  ];

  return (
    <section id="experience" className="py-24 relative w-full overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0 bg-backgroundPrimary transform-gpu"></div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 transform-gpu" style={{ backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* OPTIMASI: once: true */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "50px" }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 style={pixelStyle} className="text-xl md:text-2xl mb-4 text-content1 flex items-center justify-center gap-4">
             <span className="w-3 h-3 bg-primary animate-pulse"></span> CAPABILITIES
          </h2>
          <p className="text-content3 text-sm md:text-base font-light">Perjalanan, karya, dan keahlian saya</p>
        </motion.div>

        {/* OPTIMASI: once: true */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 md:px-6 py-3 border-2 transition-all ${activeTab === tab.id ? 'border-primary bg-primary/10 text-primary shadow-[4px_4px_0_rgba(var(--color-primary),0.3)]' : 'border-border bg-backgroundSecondary text-content3 hover:border-content1 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(var(--color-border),0.5)]'}`}>
              <span style={pixelStyle} className="text-[7px] md:text-[9px]">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        <div className="relative w-full min-h-[600px]" ref={containerRef}>
          <AnimatePresence mode="wait">
            
            {(activeTab === 'pengalaman' || activeTab === 'pendidikan') && (
              <motion.div key="timeline" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="relative flex flex-col w-full">
                
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0 transform md:-translate-x-1/2 z-0">
                  <div className="absolute top-0 bottom-0 left-0 w-0.5 border-l-[4px] border-dotted border-border/60 -translate-x-[2px]" />

                  <motion.div
                    className="absolute top-0 left-0 w-[4px] bg-primary origin-top -translate-x-[2px] shadow-[0_0_10px_rgba(var(--color-primary),0.8)] transform-gpu"
                    style={{ bottom: 0, scaleY: scrollYProgress }}
                  />

                  <motion.div
                    className="absolute left-0 -translate-x-1/2 -mt-3 z-30 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] transform-gpu"
                    style={{ top: pacmanY }}
                  >
                    <div className="relative w-6 h-6 rotate-90">
                      <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.3, ease: "steps(1)" }}
                        className="absolute inset-0 text-cyan-400 flex items-center justify-center transform-gpu"
                      >
                        <Icon icon="mdi:pac-man" className="w-full h-full" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.3, ease: "steps(1)" }}
                        className="absolute inset-0 flex items-center justify-center transform-gpu"
                      >
                        <div className="w-[18px] h-[18px] rounded-full bg-cyan-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {(activeTab === 'pengalaman' ? dataPengalaman : dataPendidikan).map((item, index) => {
                  const isEven = index % 2 === 0
                  return (
                    // OPTIMASI: once: true
                    <motion.div key={item.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "50px" }} variants={itemVariants} className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-10 md:mb-16 last:mb-0 group">
                      <div className={`hidden md:block w-5/12 ${isEven ? 'order-1' : 'order-3'}`}></div>
                      
                      <motion.div 
                        initial={{ scale: 0 }} 
                        whileInView={{ scale: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 0.2 }} 
                        className="absolute left-6 md:static md:left-auto md:order-2 w-4 h-4 rounded-full bg-white shadow-[0_0_8px_white] transform -translate-x-1/2 md:translate-x-0 mt-[1.3rem] md:mt-0 z-10 group-hover:scale-150 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#22d3ee] transition-all"
                      />

                      <div className={`w-full md:w-5/12 pl-14 md:pl-0 order-2 ${isEven ? 'md:order-3' : 'md:order-1'}`}>
                        <div className={`border-2 border-border bg-backgroundSecondary p-6 md:p-8 hover:border-primary hover:shadow-[6px_6px_0_rgba(var(--color-primary),0.2)] transition-all duration-300 ${!isEven ? 'md:text-right' : 'md:text-left'} hover:-translate-y-1`}>
                          <span style={pixelStyle} className="text-primary text-[6px] sm:text-[7px] md:text-[8px] bg-primary/10 border border-primary/20 px-2 py-1 mb-4 inline-block">{item.date}</span>
                          <h3 className="text-lg md:text-xl font-bold mb-2 text-content1 group-hover:text-primary transition-colors">{item.title}</h3>
                          <h4 className="text-sm font-medium text-content2 mb-4">{item.place}</h4>
                          <p className="text-content3 text-xs leading-relaxed font-light">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div key="projects" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full transform-gpu">
                {dataProjects.map((project, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="border-2 border-border bg-backgroundSecondary p-6 flex flex-col h-full hover:border-purple-500 hover:shadow-[6px_6px_0_rgba(168,85,247,0.2)] transition-all duration-300 group hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-backgroundPrimary border-2 border-border flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-colors">
                        <Icon icon={project.icon} className="w-6 h-6 text-content1 group-hover:text-purple-400" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                         <span style={pixelStyle} className="text-[6px] text-content2 bg-backgroundPrimary border border-border px-2 py-1 text-center leading-none">{project.role}</span>
                         {project.github && (
                           <a href={project.github} target="_blank" rel="noreferrer" className="p-1 border border-border hover:bg-white/10 transition-colors" title="View Repository">
                             <Icon icon="mdi:github" className="w-4 h-4 text-content1" />
                           </a>
                         )}
                      </div>
                    </div>
                    <div className="flex-grow mb-6">
                      <h3 className="font-bold text-base md:text-lg text-content1 mb-2 group-hover:text-purple-400 transition-colors leading-tight">{project.title}</h3>
                      <p style={pixelStyle} className="text-[6px] md:text-[7px] text-content3 mb-4 line-clamp-1">{project.client}</p>
                      <p className="text-content2 text-xs md:text-sm leading-relaxed font-light">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-dashed border-border/50">
                      {project.tech.map((t, i) => (
                        <span key={i} style={pixelStyle} className="text-[5px] text-primary bg-primary/5 border border-primary/20 px-1.5 py-1">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div key="skills" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 w-full transform-gpu">
                <div className="lg:col-span-7 xl:col-span-8">
                  <motion.h3 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={pixelStyle} className="text-xs md:text-sm text-content1 mb-8 flex items-center gap-3 justify-center lg:justify-start">
                    <span className="text-primary"></span> HARD_SKILLS
                  </motion.h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {hardSkills.map((skill, index) => (
                      <motion.div key={index} variants={itemVariants} className="bg-backgroundSecondary border-2 border-border p-3 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 hover:border-primary hover:bg-backgroundPrimary transition-colors group">
                        <div className="w-10 h-10 flex-shrink-0 bg-backgroundPrimary border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon icon={skill.icon} className={`w-5 h-5 md:w-6 md:h-6 ${skill.color || ''}`} />
                        </div>
                        <div>
                          <h4 className="font-bold text-content1 text-xs md:text-sm">{skill.name}</h4>
                          <p style={pixelStyle} className="text-[5px] md:text-[6px] text-content3 mt-1.5">{skill.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
                  <motion.h3 initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={pixelStyle} className="text-xs md:text-sm text-content1 mb-8 flex items-center gap-3 justify-center lg:justify-start">
                    <span className="text-purple-500"></span> SOFT_SKILLS
                  </motion.h3>
                  
                  <div className="flex flex-col gap-6">
                    {softSkills.map((skill, index) => {
                      const totalBlocks = 20;
                      const filledBlocks = Math.round((skill.percentage / 100) * totalBlocks);

                      return (
                        <motion.div key={index} variants={itemVariants} className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-content1 text-xs">{skill.name}</span>
                            <span style={pixelStyle} className="text-[6px] md:text-[8px] text-primary">{skill.percentage}%</span>
                          </div>
                          
                          <div className="w-full bg-[#0a0a0a] border-2 border-border h-5 md:h-6 p-1 flex gap-[2px] shadow-[0_0_10px_rgba(0,0,0,0.5)_inset]">
                            {[...Array(totalBlocks)].map((_, i) => (
                              <div key={i} className="h-full flex-1 bg-primary/10 relative">
                                {i < filledBlocks && (
                                  <motion.div 
                                    variants={{
                                      hidden: { opacity: 0 },
                                      visible: { 
                                        opacity: 1, 
                                        transition: { 
                                          delay: 0.2 + (index * 0.1) + (i * 0.04), 
                                          duration: 0.01, 
                                          ease: "steps(1)" 
                                        } 
                                      }
                                    }}
                                    className="absolute inset-0 bg-primary shadow-[0_0_8px] shadow-primary transform-gpu" 
                                  />
                                )}
                              </div>
                            ))}
                          </div>

                        </motion.div>
                      );
                    })}
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}